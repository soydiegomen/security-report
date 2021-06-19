const { DataTypes } = require('sequelize');

// We export a function that defines the model.
// This function will automatically receive as parameter the Sequelize connection object.
module.exports = (sequelize) => {
	sequelize.define('port', {
		id: {
			allowNull: false,
			autoIncrement: true,
			primaryKey: true,
			type: DataTypes.INTEGER
		},
		state: {
			allowNull: true,
			type: DataTypes.STRING
		},
        reason: {
			allowNull: true,
			type: DataTypes.STRING
		},
        service_name: {
			allowNull: true,
			type: DataTypes.STRING
		},
        service_method: {
			allowNull: true,
			type: DataTypes.STRING
		},
        protocol: {
			allowNull: true,
			type: DataTypes.STRING
		},
        port_id: {
			allowNull: true,
			type: DataTypes.INTEGER
		},
	});
};