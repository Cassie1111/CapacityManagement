sap.ui.jsview("capacity_management.Logon", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf capacity_management.Logon
	*/ 
	getControllerName : function() {
		return "capacity_management.Logon";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf capacity_management.Logon
	*/ 
	createContent : function(oController) {
		
		var oPage = new sap.m.Page("logon_pageId",{
			title:"Please input the Client number and System ID",
			content:[
			    
			    new sap.ui.commons.form.SimpleForm("formid",{
	
			    	   content: [

			    	    	  new sap.ui.commons.Label({text:"Client"}),
			    	    	  new sap.ui.commons.TextField("logon_client",{
			    	    	    	width:"150px",
			    	    	    	value:"001"
			    	    	    }),
			    	    	    new sap.ui.commons.Label({text:"SID:"}),
			    	    	    new sap.ui.commons.TextField("logon_sid",{
			    	    	    	width:"150px",
			    	    	    	value:"SHM"
	        		  
			    	    	    }),
			    	    	    new sap.ui.commons.Label({text:""}),
			    	    	    new sap.ui.commons.Button("logonid",{
			    	    	    	text:"Logon",
			    	    	    	width:"100px",
			    	    	    	press:function(){
			    	    	    		oController.navigation();
			    	    	    	}
			    	    	    }).addStyleClass("logonBtn")

			    	    	]
			    	    })
			    	    ]
			    	
			    			    
			   
			
		});
			
		
		return oPage;

	}

});
