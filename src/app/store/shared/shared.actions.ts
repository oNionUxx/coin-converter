import { createAction, props } from '@ngrx/store';

export const toggleSpinner = createAction('[Spinner] Toggle Spinner', props<{ status: boolean }>());
