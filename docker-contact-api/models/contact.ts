import { Observable } from '@reactivex/rxjs';
import massive = require('massive');

import { Contact } from '../types/contact';
let db = require('../db/db');

class ContactModel {

    all(): Observable<Contact[]> {

        const dbconn: massive.Database = db.get();
        return Observable.fromPromise(dbconn.contact.find({}));

    }

    save(contact: Contact): Observable<Contact> {

        const dbconn: massive.Database = db.get();
        return Observable.fromPromise(dbconn.contact.save(contact));

    }

    delete(id: number): Observable<Contact[]> {
    
        const dbconn: massive.Database = db.get();
        return Observable.fromPromise(dbconn.contact.destroy({id: id}));

    }
    
}


export = ContactModel;
