sap.ui.define([
    "sap/ui/core/UIComponent",
    "sap/ui/model/json/JSONModel",
    "sap/ui/demo/walkthrough/controller/HelloDialog",
	"sap/ui/Device"
], function(UIComponent, JSONModel, HelloDialog, Device){
    "use strict";
    return UIComponent.extend("sap.ui.demo.walkthrough.Component",{
        metadata :{
            manifest : "json"
        },

        init : function(){
            "use strict";
            // call the init function of the parent
            UIComponent.prototype.init.apply(this,arguments);

            // set data model
            var oData = {
                recipient : {
                    name : "Guest1"
                }
            };
            var jModel = new JSONModel(oData);
            this.setModel(jModel);

            // set device model
			var oDeviceModel = new JSONModel(Device);
			oDeviceModel.setDefaultBindingMode("OneWay");
			this.setModel(oDeviceModel, "device");

            // set dialog
            this._helloDialog = new HelloDialog(this.getRootControl());
            // create the views based on the url/hash
            this.getRouter().initialize();
        },

        exit : function () {
            this._helloDialog.destroy();
        },

        openHelloDialog : function(){
            this._helloDialog.open();
        },

		getContentDensityClass : function () {
			if (!this._sContentDensityClass) {
				if (!Device.support.touch) {
					this._sContentDensityClass = "sapUiSizeCompact";
				} else {
					this._sContentDensityClass = "sapUiSizeCozy";
				}
			}
			return this._sContentDensityClass;
		}
    })
});