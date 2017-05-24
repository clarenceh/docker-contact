import { Component, OnInit, Input } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { Store } from '@ngrx/store';
import * as _ from 'lodash';

import { Contact } from '../models/contact';
import * as fromRoot from '../reducers';
import * as contactActions from '../actions/contact';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.scss']
})
export class ContactListComponent implements OnInit {

  @Input() contacts: Contact[];

  // Form variables
  formMode = 'add';
  contact: Contact;

  // Form group and controls
  contactForm: FormGroup;
  first_name: AbstractControl;
  last_name: AbstractControl;
  email: AbstractControl;
  telephone: AbstractControl;

  constructor(private formBuilder: FormBuilder,
    private store: Store<fromRoot.State>) { }

  ngOnInit() {
    this.contactForm = this.formBuilder.group({
      first_name: ['', [Validators.required]],
      last_name: ['', [Validators.required]],
      email: ['', [Validators.required]],
      telephone: ['', [Validators.required]]
    });

    this.first_name = this.contactForm.controls['first_name'];
    this.last_name = this.contactForm.controls['last_name'];
    this.email = this.contactForm.controls['email'];
    this.telephone = this.contactForm.controls['telephone'];

    this.contact = new Contact();
  }

  setAddContactMode() {

    this.formMode = 'add';

    this.contact = new Contact();
    this.contactForm.reset();

  }

  saveContact() {
    console.log(`Save contact: ${JSON.stringify(this.contactForm.value)}`);

    if (this.formMode === 'add') {
      this.contact = _.assign({}, this.contactForm.value);
      this.store.dispatch(new contactActions.AddAction(this.contact));
    } else {
      this.contact = _.assign(this.contact, this.contactForm.value);
      this.store.dispatch(new contactActions.UpdateAction(this.contact));
    }

  }

  deleteContact(contactObj: Contact) {

    console.log(`Delete contact: ${JSON.stringify(contactObj)}`);

    this.store.dispatch(new contactActions.DeleteAction(contactObj.id));

  }

  selectContact(contactObj: Contact) {

    console.log(`Select contact: ${JSON.stringify(contactObj)}`);

    this.contact = contactObj;

    this.formMode = 'edit';
    this.populateFormValues();

  }

  private populateFormValues() {

    this.last_name.setValue(this.contact.last_name);
    this.first_name.setValue(this.contact.first_name);
    this.email.setValue(this.contact.email);
    this.telephone.setValue(this.contact.telephone);

  }

}
