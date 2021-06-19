'use strict';

var express = require('express'),
	bodyParser  = require('body-parser'),
  methodOverride = require('method-override'),
  cors = require('cors'),
  fileUpload = require('express-fileupload'),
	app = express();

app.use(bodyParser.urlencoded({ extended: false }));  
app.use(bodyParser.json());  
app.use(methodOverride());

//Enable All CORS Requests
app.use(cors());

//Allow use file upload
app.use(fileUpload());

//Set pug engine
app.set('view engine', 'pug');

// Load the routes ("controllers" -ish)
app.use('/games', require('./games/router'));

// Export the app instance for unit testing via supertest
module.exports = app;