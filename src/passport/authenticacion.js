'use strict';
 
const Cryptr = require('cryptr');
const cryptr = new Cryptr('myTotalySecretKey');

var basicAuth = require('basic-auth');
let credentials = require('./Username').auth;
 
var express_logger = require('express-logger-unique-req-id');

let logger = express_logger.getLogger();
 
 /* 
const encryptedString = cryptr.encrypt('bacon');
const decryptedString = cryptr.decrypt(encryptedString);
 
console.log(encryptedString); // 5590fd6409be2494de0226f5d7
console.log(decryptedString); // bacon
*/
 
 
const uuid = require('node-uuid');
const httpContext = require('express-http-context');
 
module.exports = function () {
    return function(req, res, next) {
        if (!credentials.enabled) {
            return next();
        }
        var user = basicAuth(req);
		
        if (user == undefined || user.name !== credentials.user || user.pass !== cryptr.decrypt(credentials.password)) {
			httpContext.set('reqId', uuid.v1());
			if(user != undefined){
				logger.info('Unauthorized: ' + user.name);
			}else{
				logger.info('Unauthorized: No User');
			}
			res.status(401).json({
									
						"FastSummary": {
							"URL": '401 ERROR',
							"result": 'Unauthorized'
						}
				}).end;
			
			//res.end();
			
        }else{
			res.header("Access-Control-Allow-Origin", "*");
			res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
			
			httpContext.set('reqId', uuid.v1());
			
			logger.info('Authorized: ' + user.name);
			next();
		}
        
    };
};