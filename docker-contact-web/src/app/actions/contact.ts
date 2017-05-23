import { Action } from '@ngrx/store';

import { ContactResponse } from '../models/contact';

export const LOAD = '[Contact] Load';
export const LOAD_COMPLETE = '[Contact] Load Complete';

export class LoadAction implements Action {

  readonly type = LOAD;

}

export class LoadCompleteAction implements Action {

  readonly type = LOAD_COMPLETE;

  constructor(public payload: ContactResponse) {};

}

export type Actions = LoadAction | LoadCompleteAction;
