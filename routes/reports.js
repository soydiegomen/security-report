const { models } = require('../sequelize');
const parseString = require('xml2js').parseString;

async function uploadReportFile(req, res) {
    console.log("react to post action - loadFile");
	
	var logFile = req.files.xmlFile;
	
	//console.log(logFile);
	var buffer = logFile.data;
	let fileContent = buffer.toString('utf8');
	//console.log(fileContent);

	let jsonReport = {};
	parseString(fileContent, function (err, result) {
		jsonReport = result;
	});

    if(!jsonReport.nmaprun || !jsonReport.nmaprun.host){
        res.status(401).send('The file does not has a valid formar');
    }

    let savedHosts = 0;
    for (const hostInfo of jsonReport.nmaprun.host) {

        //Check the host details have the hostname info
        let hostname = null;
        let hostnameType = null;
        if(hostInfo.hostnames.length > 0 && hostInfo.hostnames[0].hostname){
            hostname = hostInfo.hostnames[0].hostname[0]['$'].name;
            hostnameType = hostInfo.hostnames[0].hostname[0]['$'].type;
        }

        const model= {
            status_state: hostInfo.status[0]['$'].state,
            status_reason: hostInfo.status[0]['$'].state,
            addr: hostInfo.address[0]['$'].addr,
            addrtype: hostInfo.address[0]['$'].addrtype,
            hostname: hostname,
            hostname_type: hostnameType
        }

        const host = await models.host.create(model);
        savedHosts++;
    }

	res.status(200).json({ savedHosts, jsonReport });
}

module.exports = {
	uploadReportFile
};