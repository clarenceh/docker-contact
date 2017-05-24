import { Injectable } from '@angular/core';
import { Effect, Actions, toPayload } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { empty } from 'rxjs/observable/empty';
import { of } from 'rxjs/observable/of';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/takeUntil';

import { ContactService } from '../services/contact.service';
import * as contact from '../actions/contact';

@Injectable()
export class ContactEffects {

  @Effect()
  load$: Observable<Action> = this.actions$
    .ofType(contact.LOAD)
    .switchMap( () => {
      return this.contactService.getAll()
        .map(contactResponse => new contact.LoadCompleteAction(contactResponse));
    })

  @Effect()
  add$: Observable<Action> = this.actions$
    .ofType(contact.ADD)
    .map(toPayload)
    .switchMap( contactReq => {
      return this.contactService.add(contactReq)
        .map(savedContact => new contact.AddSuccessAction(savedContact));
    })

  @Effect()
  update$: Observable<Action> = this.actions$
    .ofType(contact.UPDATE)
    .map(toPayload)
    .switchMap( contactReq => {
      return this.contactService.update(contactReq)
        .map(savedContact => new contact.UpdateSuccessAction(savedContact));
    })

  @Effect()
  delete$: Observable<Action> = this.actions$
    .ofType(contact.DELETE)
    .map(toPayload)
    .switchMap( contactId => {
      return this.contactService.delete(contactId)
        .map(deletedContact => new contact.DeleteSuccessAction(deletedContact[0]));
    })

  constructor(private actions$: Actions, private contactService: ContactService) {}

}
