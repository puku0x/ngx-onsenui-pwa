import { ActionReducerMap } from '@ngrx/store';
import * as fromMenu from './menu.reducer';

/**
 * Top-level state
 */
export interface State {
  menu: fromMenu.State;
}

/**
 * App reducers
 */
export const reducers: ActionReducerMap<State> = {
  menu: fromMenu.reducer,
};
