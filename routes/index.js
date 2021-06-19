var hostController = require('./hosts.js');
var portsController = require('./ports.js');
var reportsController = require('./reports.js');
const router = require('express').Router();
	
router.route('/hosts')
    .get(hostController.getAll)
	.post(hostController.create);

router.route('/ports')
    .get(portsController.getAll)
	.post(portsController.create);

router.route('/reports/upload_report')
	.post(reportsController.uploadReportFile);

/* router.route('/reports/hosts')
	.get(
		(req, res) => {
			let employees = hostController
			employees.push({name: { first: 'Diego', last:'Mendoza' }, email: 'email', phone: 'phone', location: 'Jilotepec'});

			res.render('report_hosts', { employees: employees });
		}
	); */

router.route('/reports/hosts')
	.get(reportsController.showHosts);

module.exports = router;
