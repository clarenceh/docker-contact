import express = require('express');
import bodyParser = require('body-parser');
import cookieParser = require('cookie-parser');
import cors = require('cors');

let db = require('./db/db');

// Load configuration from dotenv
require('dotenv').config();

// Contact route
const contact = require('./routes/contacts');

const app = express();

// Support CORS
app.use(cors());

// Set the json body limit to 5mb to allow image upload
app.use(bodyParser.json({limit: '5mb'}));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

// Initialize DB connection
let database = process.env.DB_DATABASE;
let dbHost = process.env.DB_HOST;
let dbUser = process.env.DB_USER;
let dbPassword = process.env.DB_PASS;
let connectionString = 'postgres://' + dbUser + ':' + dbPassword + '@' + dbHost + '/' + database;
db.connect(connectionString);

app.use('/contacts', contact);

const listenPort = process.env.PORT || 3000;

const server = app.listen(listenPort, () => {
    const {address, port} = server.address();
    console.log(`Listening on http://${address}:${port}`);
});