import { combineReducers, ActionReducer } from '@ngrx/store';
import { createSelector } from 'reselect';
import * as contact from '../actions/contact';
import { Contact, ContactResponse } from '../models/contact';

export interface ContactState {
  container_id: string;
  contacts: Contact[];
}

export const initialState: ContactState = {
  container_id: '',
  contacts: []
}

export function contactReducer(state = initialState, action: contact.Actions): ContactState {

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

export const reducers = {
  contactState: contactReducer
}

const appReducer: ActionReducer<ContactState> = combineReducers(reducers);

export function reducer(state: any, action: any) {
  return appReducer(state, action);
}

export const getContainerId = (state: ContactState) => state.container_id;

export const getContacts = (state: ContactState) => state.contacts;
