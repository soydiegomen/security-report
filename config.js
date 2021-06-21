'use strict';

var config = module.exports;
var PRODUCTION = process.env.NODE_ENV === 'production';

config.express = {
  port: process.env.EXPRESS_PORT || 3000,
  ip: 'localhost'
};

if (PRODUCTION) {
  config.express.ip = '0.0.0.0';
}

