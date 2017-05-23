let os = require('os');
let express = require('express');
import * as _ from 'lodash';

import ContactModel = require('../models/contact');
import { ContactResponse } from '../types/contact';
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

module.exports = router;