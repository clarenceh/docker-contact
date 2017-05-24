import { Action } from '@ngrx/store';

import { Contact, ContactResponse } from '../models/contact';

export const LOAD = '[Contact] Load';
export const LOAD_COMPLETE = '[Contact] Load Complete';
export const ADD = '[Contact] Add';
export const ADD_SUCCESS = '[Contact] Add Success';
export const DELETE = '[Contact] Delete';
export const DELETE_SUCCESS = '[Contact] Delete Success';
export const UPDATE = '[Contact] Update';
export const UPDATE_SUCCESS = '[Contact] Update Success';

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

export class DeleteAction implements Action {
  readonly type = DELETE;

  constructor(public payload: number) {};
}

export class DeleteSuccessAction implements Action {
  readonly type = DELETE_SUCCESS;

  constructor(public payload: Contact) {};
}

export class UpdateAction implements Action {
  readonly type = UPDATE;

  constructor(public payload: Contact) {};
}

export class UpdateSuccessAction implements Action {
  readonly type = UPDATE_SUCCESS;

  constructor(public payload: Contact) {};
}

export type Actions =
  LoadAction |
  LoadCompleteAction |
  AddAction |
  AddSuccessAction |
  DeleteAction |
  DeleteSuccessAction |
  UpdateAction |
  UpdateSuccessAction;
