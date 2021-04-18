import { createAction, props } from '@ngrx/store';
import { Coin } from '../coin';

/* Load Coins List Action */
export const loadCoins = createAction('[Coins Page] Load Success');

/* Set Current Coin Action */
export const setCurrentCoin = createAction('[Coins Page] Set Current Coin');
