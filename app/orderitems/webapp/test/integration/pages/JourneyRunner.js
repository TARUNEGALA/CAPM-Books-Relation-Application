sap.ui.define([
    "sap/fe/test/JourneyRunner",
	"com/airbus/orderitems/test/integration/pages/OrderItemDetailsList.gen",
	"com/airbus/orderitems/test/integration/pages/OrderItemDetailsObjectPage.gen"
], function (JourneyRunner, OrderItemDetailsListGenerated, OrderItemDetailsObjectPageGenerated) {
    'use strict';

    const runner = new JourneyRunner({
        launchUrl: sap.ui.require.toUrl('com/airbus/orderitems') + '/test/flp.html#app-preview',
        pages: {
			onTheOrderItemDetailsListGenerated: OrderItemDetailsListGenerated,
			onTheOrderItemDetailsObjectPageGenerated: OrderItemDetailsObjectPageGenerated
        },
        async: true
    });

    return runner;
});

