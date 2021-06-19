const { DataTypes } = require('sequelize');

// We export a function that defines the model.
// This function will automatically receive as parameter the Sequelize connection object.
module.exports = (sequelize) => {
	sequelize.define('host', {
		id: {
			allowNull: false,
			autoIncrement: true,
			primaryKey: true,
			type: DataTypes.INTEGER
		},
		status_state: {
			allowNull: true,
			type: DataTypes.STRING
		},
        status_reason: {
			allowNull: true,
			type: DataTypes.INTEGER
		},
        addr: {
			allowNull: true,
			type: DataTypes.STRING
		},
        addrtype: {
			allowNull: true,
			type: DataTypes.STRING
		},
        hostname: {
			allowNull: true,
			type: DataTypes.STRING
		},
        hostname_type: {
			allowNull: true,
			type: DataTypes.STRING
		},
	});
};