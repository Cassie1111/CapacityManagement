sap.ui.jsview("capacity_management.Ttype", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf capacity_management.Ttype
	*/ 
	getControllerName : function() {
		return "capacity_management.Ttype";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf capacity_management.Ttype
	*/ 
	createContent : function(oController) {
 		return new sap.m.Page({
			title: "Task Type",
			showNavButton:true,
			navButtonPress:function(){
				oController.navBack();
			},
			content: [
			    new sap.m.StandardTile(this.createId("tile1"),{
			    	title:"RFC",
			    	info: "Task Type: RFC",
			    	number:"1",
			    	press:function(){
			    		oController.navigation("RFC");
			    	}
			    }).addStyleClass("tile1CSSClass"),
			    new sap.m.StandardTile(this.createId("tile2"),{
			    	title:"BTC",
			    	info: "Task Type: BTC",
			    	number:"2",
			    	press:function(){
			    		oController.navigation("BTC");
			    	}

			    }).addStyleClass("tile2CSSClass"),
			    new sap.m.StandardTile(this.createId("tile3"),{
			    	title:"DIA",
			    	info: "Task Type: DIA",
			    	number:"3",
			    	press:function(){
			    		oController.navigation("DIA");
			    	}

			    }).addStyleClass("tile3CSSClass")
			]
		}).addStyleClass("pageCSSClass");
	}

});