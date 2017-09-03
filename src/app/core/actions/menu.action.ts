import { Action } from '@ngrx/store';

/**
 * Action types
 */
export const OPEN  = '[Menu] Open';
export const CLOSE = '[Menu] Close';

/**
 * Action for opening menu
 */
export class Open implements Action {
  readonly type = OPEN;
  constructor() {}
}

/**
 * Action for closing menu
 */
export class Close implements Action {
  readonly type = CLOSE;
  constructor() {}
}

/**
 * Actions
 */
export type Actions = Open | Close;
