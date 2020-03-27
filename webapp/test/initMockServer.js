sap.ui.define([
	"sap/ui/demo/walkthrough/localservice/mockserver"
], function(mockserver) {
	"use strict";
	// initialize the mock server
	mockserver.init();
	// initialize the embedded component
	sap.ui.require(["sap/ui/core/ComponentSupport"]);
});