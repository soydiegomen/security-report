const { Sequelize } = require('sequelize');

// In a real app, you should keep the database connection URL as an environment variable.
// But for this example, we will just use a local SQLite database.
const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: './database.sqlite',
    logQueryParameters: false,
    //the logging is turn off
    logging: false
});


const modelDefiners = [
    require('./models/host.model'),
    require('./models/port.model'),
];

// We define all models according to their files.
for (const modelDefiner of modelDefiners) {
	modelDefiner(sequelize);
}

const { port, host } = sequelize.models;

host.hasMany(port);
port.belongsTo(host);

// We export the sequelize connection instance to be used around our app.
module.exports = sequelize;