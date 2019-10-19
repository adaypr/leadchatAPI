const ProceduresInvokeAddUCMobile = require('../../../FastAutomatization/indexInvokeAddUCMobile');



module.exports = {
	DSSInvokeAddUCMobile: async function(data,logger,iterOrders)
	{
	   const output = await ProceduresInvokeAddUCMobile.DSSInvokeAddUCMobileUserFromFast(data,logger,iterOrders);
	   return output;
	 }
}

