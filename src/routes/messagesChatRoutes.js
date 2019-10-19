var express_logger = require('express-logger-unique-req-id');
let logger = express_logger.getLogger();
const uuid = require('node-uuid');

module.exports = function (app) {
  app.post('/mSIPQuotation', async function(req, res) {
	try{
		const OrderData = {
		  Service_Name : req.body.service,
		};
		console.log(req.body);
		//console.log('IP: ' + req.connection.remoteAddress)
		console.log('IPs: ' + req.ip);
		if(req.body.service=='StandAlone'){			
			res.json({
				  "data": [
					{
					    "text": 'Hello, how are you? This should be a very long message so that we can test how it fit into the screen.',
					    "reply": false,
					    "date": new Date(),
					    "user": {
					      "name": 'John Doe',
					      "avatar": 'https://i.gifer.com/no.gif',
					    }
					  }
				  ]
				});	
		}		
		else{	
			res.json({
				"Error": '201 ERROR'
				});
		}
	}catch (e){
		res.json({
			"Error Catch": '201 ERROR'
			});
	}
  });
}
