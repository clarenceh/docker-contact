import { Observable } from '@reactivex/rxjs';

import { Contact } from '../types/contact';
let db = require('../db/db');

class ContactModel {

    all(): Observable<Contact[]> {

        return Observable.create( observer => {

            db.get().contact.find({}, function(err, contacts) {
                if (err) {
                    console.error(err, `Error getting contacts from DB`);
                    observer.error(err);
                } else {
                    observer.next(contacts);
                }

                observer.complete();
            });

        });

    }

}

export = ContactModel;
