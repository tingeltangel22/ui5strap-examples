/*
 * 
 * MyNavContainer
 *
 * Author: [Your Name]
 * 
 * Copyright (c) 2014 [Your Company]
 * 
 * [Website]
 *
 * [License information]
 * 
 */

(function (){
	
	jQuery.sap.declare("net__rozzo__test.codetest__app.modules.MyNavContainer");
	jQuery.sap.require("ui5strap.NavContainer");
	
	ui5strap.NavContainer.extend("net__rozzo__test.codetest__app.modules.MyNavContainer", {
		metadata : {

			library : "net__rozzo__test.codetest__app",
			
			properties : { 
				options : {
					type : "string",
					defaultValue : ""
				}
			}

		},

		//Use default NavContainer renderer
		renderer : "ui5strap.NavContainerRenderer"
	});

	var MyNavContainer = net__rozzo__test.codetest__app.modules.MyNavContainer,
	    MyNavContainerProto = MyNavContainer.prototype;

	MyNavContainerProto._initNavContainer = function(){
		//NavContainer type string
		//Resulting css class is "navcontainer navcontainer-my"
		this.ncType = "my";

		this.defaultTarget = "content";

		this.targets = {
			"content" : null,
			"buttonsLeft" : null,
			"buttonsRight" : null
		};
	};

}());