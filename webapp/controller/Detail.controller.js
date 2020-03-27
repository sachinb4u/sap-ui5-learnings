sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/core/UIComponent",
	"sap/ui/core/routing/History",
	"sap/m/MessageToast"
], function(Controller, UIComponent, History, MessageToast) {
	"use strict";

	return Controller.extend("sap.ui.demo.walkthrough.controller.Detail", {
		onInit : function(){
			var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			oRouter.getRoute("detail").attachPatternMatched(this._onObjectMatched, this);
		},

		_onObjectMatched : function(oEvent){
			this.byId("rating").reset();
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
		},
		onRatingChange : function (oEvent) {
			var fValue = oEvent.getParameter("value");
			var oResourceBundle = this.getView().getModel("i18n").getResourceBundle();
			MessageToast.show(oResourceBundle.getText("ratingConfirmation", [fValue]));
		}
	});
});