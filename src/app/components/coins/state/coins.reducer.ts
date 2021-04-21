import { createReducer, on } from '@ngrx/store';

import { CoinsApiActions, CoinsPageActions } from '../actions';

import { Coin } from '../coin';

export interface CoinState {
  coins: Coin[];
  currentCoinId: string | null;
  showEntries: number;
  error: string;
}

/* Initial Coin state */
const initialState: CoinState = {
  coins: [],
  currentCoinId: null,
  showEntries: 50,
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
  ),
  on(
    CoinsPageActions.setCurrentCoin,
    (state, action): CoinState => {
      return {
        ...state,
        currentCoinId: action.currentCoinId,
      };
    }
  ),
  on(
    CoinsPageActions.showEntries,
    (state, action): CoinState => {
      return {
        ...state,
        showEntries: action.entries,
      };
    }
  )
);
