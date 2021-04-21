import { createAction, props } from '@ngrx/store';

/* Load Coins List Action */
export const loadCoins = createAction('[Coins Page] Load Success');

/* Set Current Coin Action */
export const setCurrentCoin = createAction('[Coins Page] Set Current Coin', props<{ currentCoinId: string }>());

/* Display Coins Entries */
export const showEntries = createAction('[Coins Page] Display Entries', props<{ entries: number }>());
