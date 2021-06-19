var hostController = require('./hosts.js');
var portsController = require('./ports.js');
var reportsController = require('./reports.js');
var router = require('express').Router();
	
router.route('/hosts')
    .get(hostController.getAll)
	.post(hostController.create);

router.route('/ports')
    .get(portsController.getAll)
	.post(portsController.create);

router.route('/reports/upload_report')
	.post(reportsController.uploadReportFile);

module.exports = router;
