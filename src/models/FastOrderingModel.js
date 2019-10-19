const UCMobileProcedures = require('../../../FastAutomatization/index');

module.exports = {
 CreateUCMobileOrder: async function(page,logger,OrderData)
 {
	 
   const output = await UCMobileProcedures.run(page,logger,OrderData.Customer_Name,OrderData.Project_Name,OrderData.Offering_Category,OrderData.Offering_Name,OrderData.Location,OrderData.Orders);
   return output.order_url;
 } 

 
}

