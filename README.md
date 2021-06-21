# Port Analysis Exercise
 
## Overview
NodeJs web project which loads an xml file with the port analysis report and displays the report details in some UIs.
 
## Technical information
 
### Requirements for your setup
* NodeJS += 14.0
* Npm
 
### Setup guide
 
1. Download the code (you can use the Github repository)  
https://github.com/soydiegomen/security-report
 
2. Install NPM dependencies  
$ npm install
 
3. Raise the web server  
$ node server.js
 
 
## How use it  
After having settled the local environment
 
1. Open the postman app 
https://www.postman.com/
 
2. Import the postman collection 
https://www.getpostman.com/collections/b6e17b6f7f52da1a15c6
 
3. Upload the port scan xml file (Upload File Report Service)  
http://localhost:3000/reports/upload_report
 
4. Enter the hosts page, to see the list of hosts that were analyzed  
http://localhost:3000/reports/hosts
 
5. Click on any of the hosts to see the details of the status of their ports  
 
## Additional notes  
**Why did I decide to use the xml file as the source of the information?**    
The xml file allows us to read and select information in a simpler way, since its data is organized in nodes and these nodes can be parsed to an object that has attributes, and having the information as an object is very easy to manipulate.  
In contrast, the other files require a little more effort, to read the information and convert it into an object.
