import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { combineLatest, Observable, throwError } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';

import { Coin, Icon } from '../coin';

@Injectable({
  providedIn: 'root',
})
export class CoinService {
  baseUrl = null;

  constructor(private http: HttpClient) {
    this.baseUrl = 'http://rest.coinapi.io/v1';
  }

  coins$ = this.http.get<Coin[]>(`http://rest.coinapi.io/v1/assets`).pipe(
    tap((data) => console.log('Coins Data: ', JSON.stringify(data))),
    catchError(this.handleError)
  );

  coinsWithIcons$ = this.http.get<Icon[]>(`http://rest.coinapi.io/v1/assets/icons/32`).pipe(
    tap((data) => console.log('Coins With Icons: ', JSON.stringify(data))),
    catchError(this.handleError)
  );

  getAssetsName(): Observable<Coin[]> {
    return combineLatest([this.coins$, this.coinsWithIcons$]).pipe(
      map(([coins, icons]) =>
        coins.map(
          (coin) =>
            ({
              ...coin,
              icon: icons.find((c) => c.asset_id === coin.asset_id),
            } as Coin)
        )
      )
    );
  }

  getExchangeRate(from: string, to: string): Observable<number> {
    return this.http.get<number>(`${this.baseUrl}/exchangerate/${from}/${to}?`);
  }

  private handleError(err: any) {
    // in a real world app, we may send the server to some remote logging infrastructure
    // instead of just logging it to the console
    let errorMessage: string;
    if (err.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      errorMessage = `Backend returned code ${err.status}: ${err.body.error}`;
    }
    console.error(err);
    return throwError(errorMessage);
  }
}
