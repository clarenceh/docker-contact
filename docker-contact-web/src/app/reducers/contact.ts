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

    case contact.ADD_SUCCESS: {
      const contact: Contact = action.payload;

      return {
        container_id: state.container_id,
        contacts: [...state.contacts, contact]
      }
    }

    default: {
      return state;
    }

  }

}
