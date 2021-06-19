const { models } = require('../sequelize');

async function create(req, res) {

	const host = await models.host.create(req.body);
	res.status(201).json(host);
}

async function getAll(req, res) {
	const hosts = await models.host.findAll({ include: models.port });
	res.status(200).json(hosts);
}

module.exports = {
	create,
	getAll
};