import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

import { Coin } from '../coin';

@Injectable({
  providedIn: 'root',
})
export class CoinService {
  baseUrl = null;

  constructor(private http: HttpClient) {
    this.baseUrl = 'http://rest.coinapi.io/v1';
  }

  getAssetsName(): Observable<Coin[]> {
    return this.http.get<Coin[]>(`${this.baseUrl}/assets`).pipe(
      tap((data) => console.log(JSON.stringify(data))),
      catchError(this.handleError)
    );
  }

  // getAssetsIcons(): Observable<Currency[]> {
  //   return this.http.get<Currency[]>(`${this.baseUrl}/assets/icons/32`);
  // }

  // getExchangeRate(from: string, to: string): Observable<number> {
  //   return this.http.get<number>(`${this.baseUrl}/exchangerate/${from}/${to}?`);
  // }

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
