import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as AppState from '../../../store/state/app.state';
import { CoinState } from './coins.reducer';

export interface State extends AppState.State {
  coins: CoinState;
}

const getCoinFeatureState = createFeatureSelector<CoinState>('coins');

export const getCoins = createSelector(getCoinFeatureState, (state) => state.coins);

export const getCurrentCoinId = createSelector(getCoinFeatureState, (state) => state.currentCoinId);

export const getCurrentCoin = createSelector(getCoinFeatureState, getCurrentCoinId, (state, currentCoinId) => {
  if (!currentCoinId) {
    return null;
  } else {
    return currentCoinId ? state.coins.find((coin) => coin.asset_id === currentCoinId) : null;
  }
});

export const showEntries = createSelector(getCoinFeatureState, (state) => state.showEntries);
