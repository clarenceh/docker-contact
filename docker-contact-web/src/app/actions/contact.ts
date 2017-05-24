import { Action } from '@ngrx/store';

import { Contact, ContactResponse } from '../models/contact';

export const LOAD = '[Contact] Load';
export const LOAD_COMPLETE = '[Contact] Load Complete';
export const ADD = '[Contact] Add';
export const ADD_SUCCESS = '[Contact] Add Success';

export class LoadAction implements Action {
  readonly type = LOAD;
}

export class LoadCompleteAction implements Action {
  readonly type = LOAD_COMPLETE;

  constructor(public payload: ContactResponse) {};
}

export class AddAction implements Action {
  readonly type = ADD;

  constructor(public payload: Contact) {};
}

export class AddSuccessAction implements Action {
  readonly type = ADD_SUCCESS;

  constructor(public payload: Contact) {};
}

export type Actions =
  LoadAction |
  LoadCompleteAction |
  AddAction |
  AddSuccessAction;
