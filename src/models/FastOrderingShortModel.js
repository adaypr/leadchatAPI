const indexCreateOrder = require('../../../FastAutomatization/indexCreateOrder');

module.exports = {
 createOrderingShort: async function(page,OrderData)
 {
	 
   const output = await indexCreateOrder.run(page,OrderData.Customer_Name,OrderData.Project_Name,OrderData.Offering_Category,OrderData.Offering_Name,OrderData.Location);
   return output.order_url;
 } 

 
}

