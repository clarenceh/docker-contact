import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { ContactResponse } from '../models/contact';
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

}
