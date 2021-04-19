import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as AppState from '../../../store/state/app.state';
import { CoinState } from './coins.reducer';

export interface State extends AppState.State {
  coins: CoinState;
}

const getCoinFeatureState = createFeatureSelector<CoinState>('coins');

export const getCoins = createSelector(getCoinFeatureState, (state) => state.coins);
