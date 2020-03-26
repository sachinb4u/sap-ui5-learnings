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
            var oView = this.getView();
            var oDialog = oView.byId("helloDialog");
            if(!oDialog){
                Fragment.load({
                    id : oView.getId(),
                    name: "sap.ui.demo.walkthrough.view.HelloDialog",
                    controller : this
                }).then(function(oDialogNew){
                    // connect dialog to the root view of this component (models, llifecycle)
                    oView.addDependent(oDialogNew);
                    oDialogNew.open();
                });
            }else{
                oDialog.open();
            }
        },

        onCloseDialog : function(){
            this.byId("helloDialog").close();
        }
    });
}

);