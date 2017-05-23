let os = require('os');
let express = require('express');
import * as _ from 'lodash';

import ContactModel = require('../models/contact');
import { Contact, ContactResponse } from '../types/contact';
import { MetaData } from '../types/metadata';

const router = express.Router();

let contactModel = new ContactModel();

router.get('/', function(req, res, next) {

    contactModel.all().subscribe(
        data => {
            let metadata = new MetaData();

            // Populate container id
            metadata.container_id = os.hostname();

            let contactResponse = new ContactResponse();

            contactResponse.metadata = metadata;
            contactResponse.data = data;

            res.json(contactResponse);
        },
        err => {
            console.error(err, `Error getting contacts`);
            res.next(err);
        }
    );

});

router.post('/', function (req, res, next) {

    const contact: Contact = req.body;

    contactModel.save(contact).subscribe(
        data => {
            console.log(`Contact added successfully: ${JSON.stringify(data)}`);
            res.json(data);
        },
        err => {
            console.error(err, `Error adding contact`);
            res.next(err);
        }
    );

});

router.put('/:id', function (req, res, next) {

    const contactId = +req.params.id;

    const contact: Contact = req.body;

    contactModel.save(contact).subscribe(
        data => {
            console.log(`Contact updated successfully: ${JSON.stringify(data)}`);
            res.json(data);
        },
        err => {
            console.error(err, `Error updating contact`);
            res.next(err);
        }
    );

});

router.delete('/:id', function (req, res, next) {

    const contactId = +req.params.id;

    contactModel.delete(contactId).subscribe(
        data => {
            res.json(data);
        },
        err => {
            console.error(err, `Error deleting contact`);
            res.next(err);            
        }
    )

});

module.exports = router;