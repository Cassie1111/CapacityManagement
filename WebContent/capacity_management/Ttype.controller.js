sap.ui.controller("capacity_management.Ttype", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf capacity_management.Ttype
*/
//	onInit: function() {
//
//	},

/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf capacity_management.Ttype
*/
//	onBeforeRendering: function() {
//
//	},

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf capacity_management.Ttype
*/
//	onAfterRendering: function() {
//
//	},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf capacity_management.Ttype
*/
//	onExit: function() {
//
//	}
	
	navigation: function(ttype){
		
		var oJsonModel = sap.ui.getCore().getModel();
		var oData = oJsonModel.getData();
		oData.ttype = ttype;
		oJsonModel.setData(oData);
		sap.ui.getCore().setModel(oJsonModel);
		var oRouter = sap.ui.core.routing.Router.getRouter("appRouter");
		var oHashChanger = new sap.ui.core.routing.HashChanger();
		oHashChanger.setHash(oRouter.getURL("CapacityManagementView"));
		
		
	},
	
	navBack: function(){
		
		var oRouter = sap.ui.core.routing.Router.getRouter("appRouter");
		var oHashChanger = new sap.ui.core.routing.HashChanger();
		oHashChanger.setHash(oRouter.getURL("LogonView"));

	}

	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	

});