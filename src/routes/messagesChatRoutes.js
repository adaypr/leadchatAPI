//const QuoteService = require('../models/QuoteServiceModel');
var express_logger = require('express-logger-unique-req-id');
let logger = express_logger.getLogger();
const uuid = require('node-uuid');

module.exports = function (app) {
  app.get('/messagesChat', async function(req, res) {
	try{
		const OrderData = {
		  Service_Name : req.body.service,
		};		
			res.json({[
				  {
				    text: 'Hello, how are you? This should be a very long message so that we can test how it fit into the screen.',
				    reply: false,
				    date: new Date(),
				    user: {
				      name: 'John Doe',
				      avatar: 'https://i.gifer.com/no.gif',
				    },
				  },
				  {
				    text: 'Hello, how are you? This should be a very long message so that we can test how it fit into the screen.',
				    reply: true,
				    date: new Date(),
				    user: {
				      name: 'Aday Perera',
				      avatar: 'https://i.gifer.com/no.gif',
				    }  
				]});	
		
	}catch (e){
		res.json({
			"Error Catch": '201 ERROR'
			});
	}
  });
}

