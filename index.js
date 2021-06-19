'use strict';

var express = require('express'),
	bodyParser  = require('body-parser'),
  methodOverride = require('method-override'),
  cors = require('cors'),
  fileUpload = require('express-fileupload'),
	app = express();

//var router = require('express').Router();
var hostController = require('./routes/hosts.js');

app.use(bodyParser.urlencoded({ extended: false }));  
app.use(bodyParser.json());  
app.use(methodOverride());

//Enable All CORS Requests
app.use(cors());

//Allow use file upload
app.use(fileUpload());

//Set pug engine
app.set('view engine', 'pug');

//Define the routes
app.use('/', require('./routes'));

// Export the app instance for unit testing via supertest
module.exports = app;