import { createAction, props } from '@ngrx/store';
import { Coin } from '../coin';

/* Load Coins List On Success Action */
export const loadCoinsOnSuccess = createAction('[Coins API] Load Success', props<{ coins: Coin[] }>());

/* Load Coins List On Failure Action */
export const loadCoinsOnFailure = createAction('[Coins API] Load Fail', props<{ err: string }>());
