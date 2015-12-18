sap.ui.controller("capacity_management.Logon", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf capacity_management.Logon
*/
	onInit: function() {
		
		this.oLogonModel = new sap.ui.model.json.JSONModel();
		//var oModel = new sap.ui.model.odata.ODataModel("proxy/http/DEWDFLSSC5446.emea.global.corp.sap:8000/sap/opu/odata/sap/Z_CAPACITY_MANAGEMENT_GW_SRV", false,"cassieliu","Initial1");
				

	},

/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf capacity_management.Logon
*/
//	onBeforeRendering: function() {
//
//	},

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf capacity_management.Logon
*/
//	onAfterRendering: function() {
//
//	},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf capacity_management.Logon
*/
	//onExit: function() {	

	//},
	
	navigation: function() {
		var sid = $("#logon_sid").val();
		var client = $("#logon_client").val();
				
		if(sid == ""){
			
			alert("input the System Id!");
		}
		else{
			var json = {};
			json.client = client;
			json.sid = sid;
		    this.oLogonModel.setData(json);
		    sap.ui.getCore().setModel(this.oLogonModel);
			var oRouter = sap.ui.core.routing.Router.getRouter("appRouter");
		    var oHashChanger = new sap.ui.core.routing.HashChanger();
		    //oHashChanger.setHash(oRouter.getURL("CapacityManagementView"));
		    oHashChanger.setHash(oRouter.getURL("TtypeView"));
			
		}
	
		
	}

});