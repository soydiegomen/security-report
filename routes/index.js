var hostController = require('./hosts.js');
var portsController = require('./ports.js');
var router = require('express').Router();
	
router.route('/hosts')
    .get(hostController.getAll)
	.post(hostController.create);

router.route('/ports')
    .get(portsController.getAll)
	.post(portsController.create);

module.exports = router;
