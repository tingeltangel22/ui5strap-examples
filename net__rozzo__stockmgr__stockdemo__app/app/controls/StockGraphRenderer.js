/**
 * 
 * Stock Graph Renderer
 * 
 * Author: Jan Philipp Knoeller
 * 
 * Copyright (c) 2014 PKSoftware.de
 * 
 * http://www.pksoftware.de
 * 
 */

jQuery.sap.declare("net__rozzo__stockmgr.stockdemo__app.controls.StockGraphRenderer");

net__rozzo__stockmgr.stockdemo__app.controls.StockGraphRenderer = {
};

net__rozzo__stockmgr.stockdemo__app.controls.StockGraphRenderer.render = function(rm, oControl) {
	 rm.write("<div");
	    rm.writeControlData(oControl);
	    rm.addClass("stock_overview-graph");
	    rm.writeClasses();
	    rm.write(">");
	    rm.write("</div>");
};
