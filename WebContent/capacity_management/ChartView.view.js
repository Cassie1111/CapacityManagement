sap.ui.jsview("capacity_management.ChartView", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf capacity_management.ChartView
	*/ 
	getControllerName : function() {
		return "capacity_management.ChartView";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf capacity_management.ChartView
	*/ 
	createContent : function(oController) {
		
		
		var oPanel = new sap.ui.commons.Panel("panelId",{
			
			text: "Capacity Management Chart",
			//title: "Chart View",
			content:[
			         
			    new sap.ui.commons.Button("lineBt",{
			    	text: "Line",
			    	width:'100px',
			    	press:function(){
			    		oController.lineChart();
			    	}}
			    ),
			    new sap.ui.commons.Button("columnBt",{
			    	text: "Column",
			    	width:'100px',
			    	press:function(){
			    		oController.columnChart();
			    	}}
			    ),
			    new sap.ui.commons.Button("pieBt",{
			    	text: "Pie",
			    	width:'100px',
			    	press:function(){
			    		oController.pieChart();
			    	}}
			    ),
			    new sap.ui.commons.Button("backBt",{
			    	text: "Go Back!",
			    	width: '100px',
			    	press: function(){
			    		
			    		oController.navigation();
			    		
			    	}
			    }),
			    new sap.ui.commons.TextField("showTextField",{width:"100px"})
			    
			    
			    
			]
		
		});
		
		return oPanel;

	}

});
