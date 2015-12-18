sap.ui.controller("capacity_management.ChartView", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf capacity_management.ChartView
*/
//	onInit: function() {
//
//	},

/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf capacity_management.ChartView
*/
//	onBeforeRendering: function() {
//
//	},

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf capacity_management.ChartView
*/
//	onAfterRendering: function() {
//
//	},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf capacity_management.ChartView
*/
//	onExit: function() {
//
//	}
	//chartType: 0,
	lineChart: function() {
		
		var oLineChart = new sap.viz.ui5.Line({  
  			id : "lineChartId",
  			width : "80%",
  		    height : "400px",
  		    title : {
  		        visible : true,
  		        text : "Response Time"
  		    }
  		});		
		
		var oDataset = new sap.viz.core.FlattenedDataset("dataSetOfLineChart", {
			dimensions : [ {
				axis : 1,
				name : "Response Name",
				value : "{Rena}"
			} ],
			measures : [ {
				name : "Response Time",
				value : "{Rest}"
			} ],
			data : {
				path : "/modeldata/results"
			}
		});
		var requestObj = {
    			
    			requestUri: "proxy/http/DEWDFLSSC5446.emea.global.corp.sap:8000/sap/opu/odata/sap/Z_CAPACITY_MANAGEMENT_GW_SRV/CAPA_MAINSet?$top=10&$orderby=Weeknum desc",
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
			var oJsonModel =  new sap.ui.model.json.JSONModel();  
			oJsonModel.setData({modeldata: data});
	        oDataset.setModel(oJsonModel);
	        oLineChart.setDataset(oDataset);
	 		var oPanel = sap.ui.getCore().byId("panelId");
	 		oPanel.removeContent(oLineChart);
	 		oPanel.addContent(oLineChart);
	              
		});
		
		
	},
	
	columnChart: function() {
		
		var oColumnChart = new sap.viz.ui5.Column({  
  			id : "columnChartId",
  			width : "80%",
  		    height : "400px",
  		    title : {
  		        visible : true,
  		        text : "Response Time"
  		    }
  		});	
		
		var oDataset = new sap.viz.core.FlattenedDataset("dataSetOfColumnChart", {
			dimensions : [ {
				axis : 1,
				name : "Response Name",
				value : "{Rena}"
			} ],
			measures : [ {
				name : "Response Time",
				value : "{Rest}"
			} ],
			data : {
				path : "/modeldata/results"
			}
		});
		var requestObj = {
    			
    			requestUri: "proxy/http/DEWDFLSSC5446.emea.global.corp.sap:8000/sap/opu/odata/sap/Z_CAPACITY_MANAGEMENT_GW_SRV/CAPA_MAINSet?$top=10&$orderby=Weeknum desc",
    			method: "GET",
    			headers: {
    				"X-Requested-With": "XMLHttpRequest",
    				"Content-Type": "application/atom+xml",
    				"DataServiceVersion": "2.0",
    				"MaxDataServiceVersion": "2.0",
    				"Accept": "application/atom+xml"
    			}
    	};
	
		var chartData = 0;  		
		OData.request(requestObj, function (data, response) { 
			var oJsonModel =  new sap.ui.model.json.JSONModel();  
			oJsonModel.setData({modeldata: data});
	        oDataset.setModel(oJsonModel);
	        oColumnChart.setDataset(oDataset);
	 		var oPanel = sap.ui.getCore().byId("panelId");
	 		oPanel.removeContent(oColumnChart);
	 		oPanel.addContent(oColumnChart);
	              
		});
		
		
         
		
			
	},
	
	pieChart: function() {
		
		var oPieChart = new sap.viz.ui5.Pie({  
  			id : "pieChartId",
  			width : "80%",
  		    height : "400px",
  		    title : {
  		        visible : true,
  		        text : "Response Time"
  		    }
  		});	
		
		var oDataset = new sap.viz.core.FlattenedDataset("dataSetOfPieChart", {
			dimensions : [ {
				axis : 1,
				name : "Response Name",
				value : "{Rena}"
			} ],
			measures : [ {
				name : "Response Time",
				value : "{Rest}"
			} ],
			data : {
				path : "/modeldata/results"
			}
		});
		var requestObj = {
    			
    			requestUri: "proxy/http/DEWDFLSSC5446.emea.global.corp.sap:8000/sap/opu/odata/sap/Z_CAPACITY_MANAGEMENT_GW_SRV/CAPA_MAINSet?$top=10&$orderby=Weeknum desc",
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
			var oJsonModel =  new sap.ui.model.json.JSONModel();  
			oJsonModel.setData({modeldata: data});
	        oDataset.setModel(oJsonModel);
	        oPieChart.setDataset(oDataset);
	 		var oPanel = sap.ui.getCore().byId("panelId");
	 		oPanel.removeContent(oPieChart);
	 		oPanel.addContent(oPieChart);
	              
		});
		
		
		
	},
	
	navigation: function(){
		
		
		var View1 = sap.ui.getCore().byId("idChartView1");
		var View2 = sap.ui.getCore().byId("idCapacityManagementView1");
		
		sap.ui.getCore().getUIArea("content").removeContent(View1);
		View2.placeAt("content");
		
		
		
		
	}
	

});