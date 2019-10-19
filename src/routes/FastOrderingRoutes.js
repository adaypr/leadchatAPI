const Ordering = require('../models/FastOrderingModel');
const OrderingShort = require('../models/FastOrderingShortModel');
const InvokeAddUCMobile = require('../models/InvokeAddUCMobileModel');
const puppeteer = require('puppeteer');
const URL = 'https://pre.fast.telefonica.com/';
var express_logger = require('express-logger-unique-req-id');

let logger = express_logger.getLogger();

const uuid = require('node-uuid');
//const InvokeAddUCMobile = ('/Users/wuicmo01/Desktop/AUTOMATIZACIÓN/NEW 30102018/FastAutomatization/DSSInvokeAddUCMobileUserFromFast');

module.exports = function (app) {

  app.post('/createUCMobileOrder', async function(req, res) {
	  
	const browser = await puppeteer.launch({headless: false , devtools: false});
	const page = await browser.newPage();  
	  
	let num;
	var run_id = uuid.v1();
	try{
		await page.setViewport({width: 1034, height: 700});
	    //1034x700
	
		var re=true;
		
		
			
		
		const OrderData = {
		  Customer_Name : req.body.customer_name,
		  Project_Name : req.body.project_name,
		  Offering_Category : req.body.offering_category,
		  Offering_Name : req.body.offering_name,
		  Location : req.body.customer_location,
		  Orders : req.body.orders
		};
	   
		await page.goto(URL,  {waitUntil: 'networkidle2'});
	   
	    var data = "";
	    
		if(req.body.orders!=undefined){
			
			var iterOrders = req.body.orders.length;

			
			
			data = await Ordering.CreateUCMobileOrder(page,logger,OrderData);
			
			if(data != "" && data != undefined && data != 'KO'){
			
				//Close
				num = await browser.pages();

				for (const pag of num) {
					//console.log(pag.url())   // new page now appear!
					await pag.close();
				}
				
				var id_order = data.split("object=")[1];
				
				res.json({
										
							"FastSummary": {
								"URL": id_order,
								"run_id": run_id,
								"result": 'Success'
							}
					});
			}else{
				//Failure
				num = await browser.pages()

				for (const pag of num) {
					//console.log(pag.url())   // new page now appear!
					await pag.close();
				}
				//await browser.close();
				res.json({
										
							"FastSummary": {
								"URL": '404 ERROR',
								"run_id": run_id,
								"result": 'Error Created Order'
							}
					});
			}
		}else{
			//Failure
			
			logger.error('Field body is empty');
			num = await browser.pages()

			for (const pag of num) {
				//console.log(pag.url())   // new page now appear!
				await pag.close();
			}
			//await browser.close();
			res.json({
									
						"FastSummary": {
							"URL": '404 ERROR',
							"run_id": run_id,
							"result": 'Error Created Order'
						}
				});
		}
		
		
	}catch (e){
		//Failure
		num = await browser.pages()

		for (const pag of num) {
			//console.log(pag.url())   // new page now appear!
			await pag.close();
		}
		//await browser.close();
		await logger.info(e);
		res.json({
									
						"FastSummary": {
							"URL": '404 ERROR',
							"run_id": run_id,
							"result": 'Error Created Order'
						}
				});
	}
    
  });
  
  app.post('/createUCMobileOrderWithOo', async function(req, res) {
	  
	const browser = await puppeteer.launch({headless: false , devtools: false});
	const page = await browser.newPage();  
	  
	let num;
	
	try{
		
		var run_id = uuid.v1();
		
		await logger.info('run');
		
		await page.keyboard.down('Meta');
		await page.keyboard.press('ArrowUp');
		await page.keyboard.up('Meta');
	
	
		var re=true;
		
		
			
		
		const OrderData = {
		  Customer_Name : req.body.customer_name,
		  Project_Name : req.body.project_name,
		  Offering_Category : req.body.offering_category,
		  Offering_Name : req.body.offering_name,
		  Location : req.body.customer_location,
		  Orders : req.body.orders
		};
	   
		await page.goto(URL,  {waitUntil: 'networkidle2'});
	   
	    var data = "";
	   
	    var iterOrders = req.body.orders.length;

		data = await Ordering.CreateUCMobileOrder(page,logger,OrderData);
		var dssInvokeAddUCMobile="";
		
		if(data != "" && data != undefined && data != 'KO'){
		
		//Close
		num = await browser.pages()

		for (const pag of num) {
			//console.log(pag.url())   // new page now appear!
			await pag.close();
		}
		
			//await browser.close();
			dssInvokeAddUCMobile = await InvokeAddUCMobile.DSSInvokeAddUCMobile(data,logger,iterOrders);
			//await console.log('res ' + dssInvokeAddUCMobile);
			
			if(dssInvokeAddUCMobile != "" && dssInvokeAddUCMobile != undefined && dssInvokeAddUCMobile != 'KO'){
				
				if('failure'.includes(dssInvokeAddUCMobile)){
					//Failure
					res.json({				
					"FastSummary": {
						"URL": data,
						"run_id": run_id,
						"result": 'Created Order Successfully!',
					},
					"NetworkSummary": {result: 'failure'}

					})
				}else{
					//Success
					res.send(dssInvokeAddUCMobile);
					
				}
				
				
				
			}else{
				//Failure
				num = await browser.pages()

				for (const pag of num) {
					//console.log(pag.url())   // new page now appear!
					await pag.close();
				}
				//await browser.close();
				res.json({
									
						"FastSummary": {
							"URL": '404 ERROR',
							"result": 'Error Created Order'
						}
				});
				
			}
			
			
		}else{
			//Failure
			num = await browser.pages()

			for (const pag of num) {
				//console.log(pag.url())   // new page now appear!
				await pag.close();
			}
			//await browser.close();
			res.json({
									
						"FastSummary": {
							"URL": '404 ERROR',
							"result": 'Error Created Order'
						}
				});
		}
		
		
	}catch (e){
		//Failure
		num = await browser.pages()

		for (const pag of num) {
			//console.log(pag.url())   // new page now appear!
			await pag.close();
		}
		//await browser.close();
		await logger.info(e);
		res.json({
									
						"FastSummary": {
							"URL": '404 ERROR',
							"result": 'Error Created Order'
						}
				});
	}
    
  });
  
  
  app.post('/createOrderingShort', async function(req, res) {
	  
	const browser = await puppeteer.launch({headless: false , devtools: false});
	const page = await browser.newPage();
		
	var run_id = uuid.v1();
		
	try{
		await page.keyboard.down('Meta');
		await page.keyboard.press('ArrowUp');
		await page.keyboard.up('Meta');
	
		const OrderData = {
		  Customer_Name : req.body.customer_name,
		  Project_Name : req.body.project_name,
		  Offering_Category : req.body.offering_category,
		  Offering_Name : req.body.offering_name,
		  Location : req.body.customer_location,
		};
	   
		await page.goto(URL,  {waitUntil: 'networkidle2'});
	   
	    var data = "";
	   
	    //var iterOrders = req.body.orders.length;

		data = await OrderingShort.createOrderingShort(page,OrderData);
		
		if(data != "" && data != undefined && data != 'KO'){
			await browser.close();
			res.json({
									
						"FastSummary": {
							"URL": data,
							"result": 'Success'
						}
				});
		}else{
			await browser.close();
			res.json({
			  success: false,
			  msg: 'Error Created Order',
			  URL: '404 ERROR'
			})
		}
		
	}catch(e){
		await browser.close();
		await logger.info(e);
		res.json({
			  success: false,
			  msg: 'Error Created Order',
			  URL: '404 ERROR'
			})
	}
  });
  
}

