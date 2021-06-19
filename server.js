'use strict';

const app = require('./index'),
	config = require('./config'),
  sequelize = require('./sequelize');

// Note that there's not much logic in this file.
// The server should be mostly "glue" code to set things up and
// then start listening
app.listen(config.express.port, config.express.ip, async function (error) {
  if(error){
    console.log('Unable to listen for connections', error);
    process.exit(10);
  }
  console.log('Node server running on http://' + config.express.ip + ':' +config.express.port);

  //Create the DB if it does not exist
  //await sequelize.sync({});
  await sequelize.sync({ force: true });
})