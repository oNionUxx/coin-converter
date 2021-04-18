import { createReducer, on } from '@ngrx/store';

import { CoinsApiActions, CoinsPageActions } from '../actions';

import { Coin } from '../coin';

export interface CoinState {
  coins: Coin[];
  error: string;
}

const initialState: CoinState = {
  coins: [],
  error: '',
};

export const coinReducer = createReducer<CoinState>(
  initialState,
  on(
    CoinsApiActions.loadCoinsOnSuccess,
    (state, action): CoinState => {
      return {
        ...state,
        coins: action.coins,
        error: '',
      };
    }
  ),
  on(
    CoinsApiActions.loadCoinsOnFailure,
    (state, action): CoinState => {
      return {
        ...state,
        coins: [],
        error: action.err,
      };
    }
  )
);
