import { Injectable } from '@angular/core';
import { createEffect, ofType, Actions } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, concatMap, map, mergeMap } from 'rxjs/operators';
import { CoinService } from '../service/coin.service';
import { CoinsPageActions, CoinsApiActions } from '../actions';

@Injectable()
export class CoinEffect {
  constructor(private action$: Actions, private coinService: CoinService) {}

  /* Load Coins Effect */
  loadProduct$ = createEffect(() => {
    return this.action$.pipe(
      ofType(CoinsPageActions.loadCoins),
      mergeMap(() =>
        this.coinService.getAssetsName().pipe(
          map((coins) => CoinsApiActions.loadCoinsOnSuccess({ coins })),
          catchError((err) => of(CoinsApiActions.loadCoinsOnFailure({ err })))
        )
      )
    );
  });
}
