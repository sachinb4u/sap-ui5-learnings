sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast",
    "sap/ui/core/Fragment"
], function(Controller, MessageToast, Fragment){
    "use strict";
    return Controller.extend("sap.ui.demo.walkthrough.controller.HelloPanel", {

        onShowHello : function(){
            // show native JavaScript Alert
            // alert("Hello there, how may I help you?");
            var resBundle = this.getView().getModel("i18n").getResourceBundle();
            var recipientName = this.getView().getModel().getProperty("/recipient/name");
            var msg = resBundle.getText("helloMsg", [recipientName]);

            MessageToast.show(msg);
        },

        onOpenDialog : function(){
            this.getOwnerComponent().openHelloDialog();
        }
    });
}

);