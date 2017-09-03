import { Action, createSelector, createFeatureSelector } from '@ngrx/store';
import * as menu from '../actions/menu.action';

/**
 * State
 */
export interface State {
  readonly isOpen: boolean;
}

/**
 * Initial state
 */
export const initialState: State = {
  isOpen: false
};

/**
 * Reducer
 * @param state
 * @param action
 */
export function reducer(state = initialState, action: menu.Actions): State {
  console.log('state', state);
  console.log('action', action);

  switch (action.type) {
    case menu.OPEN: {
      return Object.assign({}, state, { isOpen: true });
    }
    case menu.CLOSE: {
      return Object.assign({}, state, { isOpen: false });
    }

    default: {
      return state;
    }
  }
}

/**
 * Selectors
 */
export const getState = createFeatureSelector<State>('menu');
export const getIsOpen = createSelector(getState, (state: State) => state.isOpen);
