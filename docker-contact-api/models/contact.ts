import { Observable } from '@reactivex/rxjs';

import { Contact } from '../types/contact';
let db = require('../db/db');

class ContactModel {

    all(): Observable<Contact[]> {

        return Observable.fromPromise(db.get().contact.find({}));

    }

    save(contact: Contact): Observable<Contact> {

        return Observable.fromPromise(db.get().contact.save(contact));

    }

    delete(id: number): Observable<Contact> {
    
        return Observable.fromPromise(db.get().contact.destroy({id: id}));

    }
    
}


export = ContactModel;
