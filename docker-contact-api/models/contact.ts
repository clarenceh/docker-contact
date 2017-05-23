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

    save(contact: Contact): Observable<Contact> {

        return Observable.create( observer => {

            db.get().contact.save(contact, function(err, savedContact) {

                if (err) {
                    console.error(err, `Erroring saving new contact`);
                    observer.error(err);
                } else {
                    observer.next(savedContact);
                }

                observer.complete();

            });

        });

    }

    delete(id: number): Observable<Contact> {

        return Observable.create( observer => {

            db.get().contact.destroy({id: id}, function(err, deletedContact) {

                if (err) {
                    console.error(err, `Erroring deleting contact with id: ${id}`);
                    observer.error(err);
                } else {
                    observer.next(deletedContact);
                }

                observer.complete();

            });            

        });

    }

}

export = ContactModel;
