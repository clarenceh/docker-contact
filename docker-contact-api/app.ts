import express = require('express');
import bodyParser = require('body-parser');
import cookieParser = require('cookie-parser');
import cors = require('cors');

// Load configuration from dotenv
require('dotenv').config();

// Contact route
const contact = require('./routes/contacts');

const app = express();

// Support CORS
app.use(cors());

app.use('/contacts', contact);

const listenPort = process.env.PORT || 3000;

const server = app.listen(listenPort, () => {
    const {address, port} = server.address();
    console.log(`Listening on http://${address}:${port}`);
});