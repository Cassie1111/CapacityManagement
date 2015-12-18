sap.ui.controller("capacity_management.DetailInfo", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf capacity_management.DetailInfo
*/
	onInit: function() {
		
		var oModel = new sap.ui.model.odata.ODataModel("proxy/http/DEWDFLSSC5446.emea.global.corp.sap:8000/sap/opu/odata/sap/Z_CAPACITY_MANAGEMENT_GW_SRV", false,"cassieliu","Initial1");	 

	},

/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf capacity_management.DetailInfo
*/
//	onBeforeRendering: function() {
//
//	},

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf capacity_management.DetailInfo
*/
	onAfterRendering: function() {
		
		var oModel = sap.ui.getCore().getModel("DetailModel");
		var oTable = sap.ui.getCore().byId(this.createId("historyTableId"));
		var data = oModel.getData();
		var oJsonModel = new sap.ui.model.json.JSONModel();
		sap.ui.getCore().byId(this.createId("sidLabel")).setText(data.Sid);
		sap.ui.getCore().byId(this.createId("clientLabel")).setText(data.Client);
		sap.ui.getCore().byId(this.createId("renaLabel")).setText(data.Rena);
		sap.ui.getCore().byId(this.createId("ttypeLabel")).setText(data.Ttype);
		sap.ui.getCore().byId(this.createId("weeknLabel")).setText(data.Weeknum);
		sap.ui.getCore().byId(this.createId("dbptLabel")).setText(data.Dbpt);
		sap.ui.getCore().byId(this.createId("cpuptLabel")).setText(data.Cpupt);
		sap.ui.getCore().byId(this.createId("restLabel")).setText(data.Rest);
		sap.ui.getCore().byId(this.createId("ztotalLabel")).setText(data.Ztotal);
		sap.ui.getCore().byId(this.createId("zcommentLabel")).setText(data.Zcomment);
		sap.ui.getCore().byId(this.createId("zstatusLabel")).setText(data.Zstatus);
		sap.ui.getCore().byId(this.createId("ztrendLabel")).setText(data.Ztrend);
		
		 var requestObj = {
	    			
	    			requestUri: "proxy/http/DEWDFLSSC5446.emea.global.corp.sap:8000/sap/opu/odata/sap/Z_CAPACITY_MANAGEMENT_GW_SRV/CAPA_MAINSet?$filter=Client eq \'" + data.Client + "\' and Sid eq \'" + data.Sid + "\' and Rena eq \'" + data.Rena + "\' and Ttype eq \'" + data.Ttype + "\' &$top=10&$orderby=Weeknum desc",
	    			method: "GET",
	    			headers: {
	    				"X-Requested-With": "XMLHttpRequest",
	    				"Content-Type": "application/atom+xml",
	    				"DataServiceVersion": "2.0",
	    				"MaxDataServiceVersion": "2.0",
	    				"Accept": "application/atom+xml"
	    			}
	    	};
				  		
			OData.request(requestObj, function (data, response) {		
					oJsonModel.setData(data.results);			
			});
			
			oTable.setModel(oJsonModel);
			oTable.bindRows("/");
			
			var oDataset = new sap.viz.core.FlattenedDataset(this.createId("dataSetOfHistoryLineChart"), {
				dimensions : [ {
					axis : 1,
					name : "Weeknum",
					value : "{Weeknum}"
				} ],
				measures : [ {
					name : "Response Time",
					value : "{Rest}"
				} ],
				data : {
					path : "/"
				}
			});
			
			oDataset.setModel(oJsonModel);
		    var oLineChart = sap.ui.getCore().byId(this.createId("historyLineChartId"));
		    oLineChart.setDataset(oDataset);
		    var oPanel = sap.ui.getCore().byId(this.createId("historyChartPanelId"));
		 	oPanel.removeContent(oLineChart);
		 	oPanel.addContent(oLineChart);
		
		
		

	},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf capacity_management.DetailInfo
*/
//	onExit: function() {
//
//	}
	
	navBack: function(){
		
		 var oRouter = sap.ui.core.routing.Router.getRouter("appRouter");
		 var oHashChanger = new sap.ui.core.routing.HashChanger();
		 oHashChanger.setHash(oRouter.getURL("CapacityManagementView"));
		
	}
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	

});