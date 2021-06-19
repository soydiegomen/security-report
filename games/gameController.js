const sequelize = require('../sequelize');
const { models } = require('../sequelize');
const parseString = require('xml2js').parseString;


async function createGame (req, res) {
	await sequelize.sync({ force: true });
	await models.game.create({ name: 'Mario Party', description: 'Family game' });
	const games = await models.game.findAll();
	res.contentType('application/json');
	
	res.send(JSON.stringify(games));
}

async function readXmlFile (req, res) {
	console.log("react to post action - loadFile");
	
	var logFile = req.files.xmlFile;
	
	console.log(logFile);
	var buffer = logFile.data;
	let fileContent = buffer.toString('utf8');
	//console.log(fileContent);

	let finalResult = {};
	parseString(fileContent, function (err, result) {
		finalResult = result;
	});
	
	//res.send("submit ok");
	res.contentType('application/json');
	res.send(JSON.stringify(finalResult));
}

async function readXml (req, res) {
	const xmlInfo = "";//gameHelper.getXML();
	
	let finalResult = {};
	parseString(xmlInfo, function (err, result) {
		finalResult = result;
	});
	
	//Obtiene el arreglo de hosts que se guardará en la BD
	//finalResult = finalResult.nmaprun.host;

	//Obtiene la dirección IP del primer host
	finalResult = finalResult.nmaprun.host[0].address[0]['$'].addr;
	//finalResult = finalResult.nmaprun.host;
	console.log('resultado', finalResult);
	
	res.contentType('application/json');
	res.send(JSON.stringify(finalResult));
}

module.exports = {
	createGame,
	readXml,
	readXmlFile
};