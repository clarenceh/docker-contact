import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { Contact, ContactResponse } from '../models/contact';
import { environment } from '../../environments/environment';

@Injectable()
export class ContactService {

  contactApiEndpoint = `${environment.apiEndpoint}/contacts`;

  constructor(private http: Http) {};

  /**
   * Return contacts and metadata
   *
   * @returns {Observable<ContactResponse>}
   *
   * @memberof ContactService
   */
  getAll(): Observable<ContactResponse> {

    return this.http.get(this.contactApiEndpoint)
      .map(res => res.json());

  }

  /**
   * Add new contact
   *
   * @param {Contact} contact
   * @returns {Observable<Contact>}
   *
   * @memberof ContactService
   */
  add(contact: Contact): Observable<Contact> {

    return this.http.post(this.contactApiEndpoint, contact)
      .map(res => res.json());

  }

  /**
   * Update contact
   *
   * @param {Contact} contact
   * @returns {Observable<Contact>}
   *
   * @memberof ContactService
   */
  update(contact: Contact): Observable<Contact> {

    const id = contact.id;

    return this.http.put(`${this.contactApiEndpoint}/${id}`, contact)
      .map(res => res.json());

  }

  /**
   * Delete contact
   *
   * @param {number} id
   * @returns {Observable<Contact>}
   *
   * @memberof ContactService
   */
  delete(id: number): Observable<Contact[]> {

    return this.http.delete(`${this.contactApiEndpoint}/${id}`)
      .map(res => res.json());

  }

}
