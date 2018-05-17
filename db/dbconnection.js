var authentication = require('../config/db.json');
var server = false;
var mongodbHost = '127.0.0.1';
var mongodbPort = '27017';

//getting credentials from config.js file 
const dialect = authentication.dialect;
const username = authentication.username;
const password = authentication.password;
const host = authentication.host;
const port = authentication.port;
const dbname = authentication.name;

//If Server Database like mLab is used - then it uses username and password for the connecting to it 
if (server) {
 mongodbHost = username+':'+password+'@'+host ;
 mongodbPort = port;
}
var mongodbDatabase = dbname;
var url = 'mongodb://'+mongodbHost+':'+mongodbPort+ '/' + mongodbDatabase;


module.exports.url=url;