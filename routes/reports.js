const { models } = require('../sequelize');
const parseString = require('xml2js').parseString;

async function showHosts(req, res) {
	const hosts = await models.host.findAll({ include: models.port });
    res.render('report_hosts', { hosts });
}

async function showHostDetails(req, res) {
	const ports = await models.port.findAll();
    res.render('report_host_details', { ports });
}

async function uploadReportFile(req, res) {	
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

    //Save the hosts details
    let savedHosts = await saveHosts(jsonReport.nmaprun.host)
    
	res.status(200).json({ savedHosts: savedHosts });
}

async function saveHosts(hostsArray){

    let savedHosts = 0;

    for (const hostInfo of hostsArray) {

        //Check the host details have the hostname info
        let hostname = null;
        let hostnameType = null;
        if(hostInfo.hostnames.length > 0 && hostInfo.hostnames[0].hostname){
            hostname = hostInfo.hostnames[0].hostname[0]['$'].name;
            hostnameType = hostInfo.hostnames[0].hostname[0]['$'].type;
        }

        //Fill the host information
        const model= {
            status_state: hostInfo.status[0]['$'].state,
            status_reason: hostInfo.status[0]['$'].state,
            addr: hostInfo.address[0]['$'].addr,
            addrtype: hostInfo.address[0]['$'].addrtype,
            hostname: hostname,
            hostname_type: hostnameType
        }

        //Create host in BD
        const host = await models.host.create(model);

        const portsArray = hostInfo.ports[0].port;
        //Save the info of the ports
        await savePortsDetails(portsArray, host);

        savedHosts++;
    }

    return savedHosts;
}

async function savePortsDetails(portsArray, host){
    for (const portInfo of portsArray) {
        
        //Fill the ports information
        const portModel = {
            state: portInfo.state[0]['$'].state,
            reason: portInfo.state[0]['$'].reason,
            service_name: portInfo.service[0]['$'].name,
            service_method: portInfo.service[0]['$'].method,
            protocol: portInfo['$'].protocol,
            port_id: portInfo['$'].portid
        }

        //Create a new port related with the current host
        await host.createPort(portModel);
    }
}

module.exports = {
	uploadReportFile,
    showHosts,
    showHostDetails
};