let express = require('express');
import * as _ from 'lodash';

const router = express.Router();

router.get('/', function(req, res, next) {

    let response = {
        message: 'Hello'
    };

    res.json(response);

});

module.exports = router;