const { models } = require('../sequelize');

async function create(req, res) {

	const port = await models.port.create(req.body);
	res.status(201).json(port);
}

async function getAll(req, res) {
	const ports = await models.port.findAll();
	res.status(200).json(ports);
}

module.exports = {
	create,
	getAll
};