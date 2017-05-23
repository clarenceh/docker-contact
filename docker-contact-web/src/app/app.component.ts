import { Component, OnInit } from '@angular/core';
import { MdIconRegistry } from '@angular/material';
import { Store } from '@ngrx/store';

import * as fromContact from './reducers/contact';
import * as contact from './actions/contact';
import { Contact } from './models/contact';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(private mdIconRegistry: MdIconRegistry,
    private store: Store<fromContact.ContactState>) {

    mdIconRegistry.registerFontClassAlias('fontawesome', 'fa');

  }

  ngOnInit() {
    console.log(`AppComponent - OnInit`);

    // Load contacts
    this.store.dispatch(new contact.LoadAction());
  }

}
