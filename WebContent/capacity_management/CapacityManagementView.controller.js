sap.ui.controller("capacity_management.CapacityManagementView", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf capacity_management.CapacityManagementView
*/
	
	onInit: function() {
		
		var oModel = new sap.ui.model.odata.ODataModel("proxy/http/DEWDFLSSC5446.emea.global.corp.sap:8000/sap/opu/odata/sap/Z_CAPACITY_MANAGEMENT_GW_SRV", false,"cassieliu","Initial1");	 
	   
        console.log(oModel);

	},

/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf capacity_management.CapacityManagementView
*/
//	onBeforeRendering: function() {
//
//	},

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf capacity_management.CapacityManagementView
*/
	onAfterRendering: function() {
		
		var oLogonModel = sap.ui.getCore().getModel();
		var oJsonModel = new sap.ui.model.json.JSONModel();
		var client = oLogonModel.getData().client;
		var sid = oLogonModel.getData().sid;
		var ttype = oLogonModel.getData().ttype;
        var requestObj = {
    			
    			requestUri: "proxy/http/DEWDFLSSC5446.emea.global.corp.sap:8000/sap/opu/odata/sap/Z_CAPACITY_MANAGEMENT_GW_SRV/CAPA_MAINSet?$filter=Client eq \'" + client + "\' and Sid eq \'" + sid + "\' and Ttype eq \'" + ttype + "\' &$top=1&$orderby=Weeknum desc",
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
			var week = data.results[0]["Weeknum"];
			var requestObj1 = {
	    			
	    			requestUri: "proxy/http/DEWDFLSSC5446.emea.global.corp.sap:8000/sap/opu/odata/sap/Z_CAPACITY_MANAGEMENT_GW_SRV/CAPA_MAINSet?$filter=Client eq \'" + client + "\' and Sid eq \'" + sid + "\' and Weeknum eq \'"+ week +"\' and Ttype eq \'" + ttype +"\' &$top=50",
	    			method: "GET",
	    			headers: {
	    				"X-Requested-With": "XMLHttpRequest",
	    				"Content-Type": "application/atom+xml",
	    				"DataServiceVersion": "2.0",
	    				"MaxDataServiceVersion": "2.0",
	    				"Accept": "application/atom+xml"
	    			}
	    	};
			OData.request(requestObj1, function (data, response){
				oJsonModel.setData(data.results);			
				
			});
		});
		
		var oTable = sap.ui.getCore().byId(this.createId("tableId"));
		oTable.setModel(oJsonModel);
	    oTable.bindRows("/");
	    	
		var oDataset = new sap.viz.core.FlattenedDataset(this.createId("dataSetOfLineChart"), {
			dimensions : [ {
				axis : 1,
				name : "Report Name",
				value : "{Rena}"
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
	    var oLineChart = sap.ui.getCore().byId(this.createId("lineChartId"));
	    oLineChart.setDataset(oDataset);
	    var oPanel = sap.ui.getCore().byId(this.createId("LinePanelId"));
	 	oPanel.removeContent(oLineChart);
	 	oPanel.addContent(oLineChart);
		


	},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf capacity_management.CapacityManagementView
*/
//	onExit: function() {
//
//	}
	
	
	navBack: function() {
		
		var oRouter = sap.ui.core.routing.Router.getRouter("appRouter");
	    var oHashChanger = new sap.ui.core.routing.HashChanger();
	    oHashChanger.setHash(oRouter.getURL("TtypeView"));
		
	},
	
	detailInfo: function(){
		
		var oTable = sap.ui.getCore().byId(this.createId("tableId"));
    	
    	var index = oTable.getSelectedIndex();
    	
    	if(index == -1){
    		
    		alert("select a row");
    	}
    	else{
    		var aSelectedIndices = oTable.getSelectedIndices();  
    		for (var i=0; i<aSelectedIndices.length; i++) {  
    			
    		    var oData = oTable.getContextByIndex(aSelectedIndices[i]);   
    		    var sPath = oData.getPath();     		   
    		    var model = oData.getModel();
    		    var data = model.getProperty(sPath);
    		    
    		    /*var oJsonModel = new sap.ui.model.json.JSONModel({
    		    	Sid:data['Sid'],
    		    	Client:data['Client'],
    		    	Rena: data['Rena'],
    		    	Ttype: data['Ttype'],
    		    	Weeknum: data['Weeknum'],
    		    	Dbpt: data['Dbpt'],
    		    	Cpupt: data['Cpupt'],
    		    	Rest: data['Rest'],
    		    	Ztotal: data['Ztotal'],
    		    	Zcomment: data['Zcomment'],
    		    	Zstatus: data['Zstatus'],
    		    	Ztrend: data['Ztrend']
    		    }   		    		
    		    );*/
    		    var oJsonModel = new sap.ui.model.json.JSONModel(data);
    		    sap.ui.getCore().setModel(oJsonModel,"DetailModel");
    		    
    		    var oRouter = sap.ui.core.routing.Router.getRouter("appRouter");
    		    var oHashChanger = new sap.ui.core.routing.HashChanger();
    		    oHashChanger.setHash(oRouter.getURL("DetailInfoView"));
    		    
    		    
        		
        			
    		}  
    	
	}
}
	
	


});