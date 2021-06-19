var gameController = require('./gameController');
var router = require('express').Router();


	
router.route('/games')
	.post(gameController.createGame);

router.route('/read_xml')
	.get(gameController.readXml);

router.route('/read_xml_file')
	.post(gameController.readXmlFile);

router.route('/view')
	.get(
		(req, res) => {
			let employees = [];
			employees.push({name: { first: 'Diego', last:'Mendoza' }, email: 'email', phone: 'phone', location: 'Jilotepec'});

			res.render('index', { employees: employees });
		}
	);


module.exports = router;
