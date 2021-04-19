import { createReducer, on } from '@ngrx/store';
import { toggleSpinner } from './shared.actions';
import { initialState, SharedState } from './shared.state';

export const sharedReducer = createReducer<SharedState>(
  initialState,
  on(toggleSpinner, (state, action) => {
    return {
      state,
      toggleSpinner: action.status,
    };
  })
);
