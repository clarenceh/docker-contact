import { createSelector } from 'reselect';
import { ActionReducer } from '@ngrx/store';
import { combineReducers } from '@ngrx/store';

import * as fromContact from './contact';

export interface State {
  contact: fromContact.State;
}

const reducers = {
  contact: fromContact.reducer
}

const appReducer: ActionReducer<State> = combineReducers(reducers);

export function reducer(state: any, action: any) {
  return appReducer(state, action);
}

export const getContainerId = (state: State) => (<any>state).container_id;
export const getContacts = (state: State) => (<any>state).contacts;

