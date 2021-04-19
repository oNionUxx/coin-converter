import { createFeatureSelector, createSelector } from '@ngrx/store';
import { SharedState } from './shared.state';
export const SHARED_STATE_NAME = 'shared';

const getSpinnerStatusFeatureSelector = createFeatureSelector<SharedState>(SHARED_STATE_NAME);

export const getSpinnerStatus = createSelector(getSpinnerStatusFeatureSelector, (state) => {
  return state.toggleSpinner;
});
