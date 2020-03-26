sap.ui.define([
    "sap/ui/core/UIComponent",
    "sap/ui/model/json/JSONModel",
    "sap/ui/demo/walkthrough/controller/HelloDialog"
], function(UIComponent, JSONModel, HelloDialog){
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

            // set dialog
            this._helloDialog = new HelloDialog(this.getRootControl());
        },

        exit : function () {
            this._helloDialog.destroy();
        },

        openHelloDialog : function(){
            this._helloDialog.open();
        }
    })
});