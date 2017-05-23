import { Component, OnInit } from '@angular/core';
import { MdIconRegistry } from '@angular/material';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import * as fromRoot from './reducers';
import * as contact from './actions/contact';
import { Contact } from './models/contact';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  containerId$: Observable<string>;
  contacts$: Observable<Contact[]>;

  constructor(private mdIconRegistry: MdIconRegistry,
    private store: Store<fromRoot.State>) {

    mdIconRegistry.registerFontClassAlias('fontawesome', 'fa');

    this.containerId$ = store.select(fromRoot.getContainerId);
    this.contacts$ = store.select(fromRoot.getContacts);

  }

  ngOnInit() {
    console.log(`AppComponent - OnInit`);

    // this.containerId$.subscribe(id => console.log(`AppComponent - OnInit - container id: ${id}`));
    // this.contacts$.subscribe(contacts => console.log(`AppComponent - OnInit - contacts: ${JSON.stringify(contacts)}`));

    // Load contacts
    this.store.dispatch(new contact.LoadAction());
  }

}
