sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/core/UIComponent",
	"sap/ui/core/routing/History"
], function(Controller, UIComponent, History) {
	"use strict";

	return Controller.extend("sap.ui.demo.walkthrough.controller.Detail", {
		onInit : function(){
			var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			oRouter.getRoute("detail").attachPatternMatched(this._onObjectMatched, this);
		},

		_onObjectMatched : function(oEvent){
			this.getView().bindElement({
				path : "/Invoices/" + oEvent.getParameter("arguments").invoicePath,
				model : "invoices"
			});
		},

		onNavBack : function(){
			var oHistory = History.getInstance();
			var sPrevHash = oHistory.getPreviousHash();

			if(sPrevHash != undefined){
				window.history.go(-1);
			}else{
				var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
				oRouter.navTo("overview", {}, true);
			}
		}
	});
});