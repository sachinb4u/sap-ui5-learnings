sap.ui.define([
    "sap/ui/core/UIComponent",
    "sap/ui/model/json/JSONModel"
], function(UIComponent, JSONModel){
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
        }
    })
});