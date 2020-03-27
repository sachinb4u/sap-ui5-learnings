sap.ui.define([], function() {
	"use strict";
	return {
			statusText : function (sStatus){
				var resourcesBundle = this.getView().getModel('i18n').getResourceBundle();
				switch(sStatus){
					case "A":
						return resourcesBundle.getText("invoiceStatusA");
					case "B":
						return resourcesBundle.getText("invoiceStatusB");
					case "C":
						return resourcesBundle.getText("invoiceStatusC");
					default:
						return sStatus;
				}
			}
	};
});