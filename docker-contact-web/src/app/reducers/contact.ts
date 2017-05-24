import { combineReducers, ActionReducer } from '@ngrx/store';
import { createSelector } from 'reselect';
import * as _ from 'lodash';
import * as contactAction from '../actions/contact';
import { Contact, ContactResponse } from '../models/contact';

export interface State {
  container_id: string;
  contacts: Contact[];
}

export const initialState: State = {
  container_id: '',
  contacts: []
}

export function reducer(state = initialState, action: contactAction.Actions): State {

  switch (action.type) {

    case contactAction.LOAD_COMPLETE: {
      const contactResponse: ContactResponse = action.payload;

      const containerId = contactResponse.metadata.container_id;
      const contacts = contactResponse.data;

      return {
        container_id: containerId,
        contacts: contacts
      }
    }

    case contactAction.ADD_SUCCESS: {
      const contact: Contact = action.payload;

      return {
        container_id: state.container_id,
        contacts: [...state.contacts, contact]
      }
    }

    case contactAction.DELETE_SUCCESS: {

      const contactId: number = action.payload.id;

      return {
        container_id: state.container_id,
        contacts: _.filter(state.contacts, contact => contact.id !== contactId)
      }

    }

    case contactAction.UPDATE_SUCCESS: {

      const updatedContact = action.payload;

      return {
        container_id: state.container_id,
        contacts: _.map(state.contacts, contact => {
          if (contact.id === updatedContact.id) {
            return _.assign({}, updatedContact);
          } else {
            return contact;
          }
        })
      }

    }

    default: {
      return state;
    }

  }

}
