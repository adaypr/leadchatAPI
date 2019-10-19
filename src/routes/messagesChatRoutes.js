var express_logger = require('express-logger-unique-req-id');
let logger = express_logger.getLogger();
const uuid = require('node-uuid');

module.exports = function (app) {
  app.get('/chatmessages', async function(req, res) {
	try{
		const OrderData = {
		  Service_Name : req.body.service,
		};
		console.log(req.body);				
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
	}catch (e){
		res.json({
			"Error Catch": '201 ERROR'
			});
	}
  });
}
