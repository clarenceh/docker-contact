import { Component, OnInit, Input } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { Store } from '@ngrx/store';
import * as _ from 'lodash';

import { Contact } from '../models/contact';
import * as fromRoot from '../reducers';
import * as contact from '../actions/contact';

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

  saveContact() {
    console.log(`Save contact: ${JSON.stringify(this.contactForm.value)}`);

    if (this.formMode = 'add') {
      this.contact = _.assign({}, this.contactForm.value);
      this.store.dispatch(new contact.AddAction(this.contact));
    }
  }

}
