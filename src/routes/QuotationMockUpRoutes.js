//const QuoteService = require('../models/QuoteServiceModel');
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
				      "subservice": "DDI StandAlone",
				      "salesforceCI": req.body.data[0].salesforceCI,
				      "MRC": 0,
				      "NRC": 0.9333333333333332,
				      "MRC_Cost": 0,
				      "NRC_Cost": 0.7,
				      "PPM_A_Fixed": -1.4285714285714286,
				      "PPM_A_Mobile": -1.4285714285714286,
				      "PPM_A_Public": -1.4285714285714286,
				      "PPM_B": -1.3698320105820108,
				      "PPM_A_Fixed_Cost": -1,
				      "PPM_A_Mobile_Cost": -1,
				      "PPM_A_Public_Cost": -1,
				      "PPM_B_Cost": -1,
				      "Minutes": 1000
				    },
				    {
				      "subservice": "ITFS StandAlone",
				      "salesforceCI": req.body.data[1].salesforceCI,
				      "MRC": 0,
				      "NRC": 1.3333333333333333,
				      "MRC_Cost": 0,
				      "NRC_Cost": 1,
				      "PPM_A_Fixed": 0.013714285714285714,
				      "PPM_A_Mobile": 0.19314285714285714,
				      "PPM_A_Public": 0.15714285714285717,
				      "PPM_B": -1.3699280045351474,
				      "PPM_A_Fixed_Cost": 0.0096,
				      "PPM_A_Mobile_Cost": 0.1352,
				      "PPM_A_Public_Cost": 0.11,
				      "PPM_B_Cost": -1,
				      "Minutes": 2000
				    },
				    {
				      "subservice": "ITFS StandAlone",
				      "salesforceCI": req.body.data[2].salesforceCI,
				      "MRC": 0,
				      "NRC": 0,
				      "MRC_Cost": 0,
				      "NRC_Cost": 0,
				      "PPM_A_Fixed": 0.14085714285714285,
				      "PPM_A_Mobile": 0.14085714285714285,
				      "PPM_A_Public": -1.4285714285714286,
				      "PPM_B": -1.369944003527337,
				      "PPM_A_Fixed_Cost": 0.0986,
				      "PPM_A_Mobile_Cost": 0.0986,
				      "PPM_A_Public_Cost": -1,
				      "PPM_B_Cost": -1,
				      "Minutes": 9000
				    }
				  ]
				});	
		}
		else if(req.body.service=='Pure Inbound'){							
				res.json({"data": [
					    {
					      "MRC": 1,
					      "NRC": 2,
					      "MRC_Cost": 0.5,
					      "NRC_Cost": 1.5,
					      "salesforceCI": "a0a0D000001uICeQAM"
					    },					    
					    {
					      "MRC": 3,
					      "NRC": 4,
					      "MRC_Cost": 0.6,
					      "NRC_Cost": 1.6,
					      "PPM_A_Fixed": 0.01,
					      "PPM_A_Mobile": 0.18,
					      "PPM_A_Public": 0.14,
					      "PPM_A_Fixed_Cost": 0.0096,
					      "PPM_A_Mobile_Cost": 0.1352,
					      "PPM_A_Public_Cost": 0.11,
					      "salesforceCI": "a0a0D000001uICfQAM"
					    },
					    {
					      "MRC": 5.7,
					      "NRC": 6.7,
					      "MRC_Cost": 0,
					      "NRC_Cost": 1,
					      "salesforceCI": "a0a0D000001uIDpQAM"
					    }
					  ]
					}

					);	
		}
		
		else if(req.body.service=='Trunk'){							
				res.json({
							"MRC": 150,
							"NRC": 120
							}
					);	
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

