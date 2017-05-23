let express = require('express');
import * as _ from 'lodash';

import ContactModel = require('../models/contact');

const router = express.Router();

let contactModel = new ContactModel();

router.get('/', function(req, res, next) {

    contactModel.all().subscribe(
        data => {
            res.json(data);
        },
        err => {
            console.error(err, `Error getting contacts`);
            res.next(err);
        }
    );

});

module.exports = router;