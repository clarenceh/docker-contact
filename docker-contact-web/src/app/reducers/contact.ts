import { combineReducers, ActionReducer } from '@ngrx/store';
import { createSelector } from 'reselect';
import * as contact from '../actions/contact';
import { Contact, ContactResponse } from '../models/contact';

export interface State {
  container_id: string;
  contacts: Contact[];
}

export const initialState: State = {
  container_id: '',
  contacts: []
}

export function reducer(state = initialState, action: contact.Actions): State {

  switch (action.type) {

    case contact.LOAD_COMPLETE: {
      const contactResponse: ContactResponse = action.payload;

      const containerId = contactResponse.metadata.container_id;
      const contacts = contactResponse.data;

      return {
        container_id: containerId,
        contacts: contacts
      }
    }
    default: {
      return state;
    }

  }

}

/*
export const reducers = {
  contactState: contactReducer
}

const appReducer: ActionReducer<State> = combineReducers(reducers);

export function reducer(state: any, action: any) {
  return appReducer(state, action);
}

export const getContainerId = (state: State) => {
  console.log(`Contact reducer - state: ${JSON.stringify(state)}`);
  return state.container_id;
}

export const getContacts = (state: State) => state.contacts;
*/
