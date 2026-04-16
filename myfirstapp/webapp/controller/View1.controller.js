sap.ui.define([
    "sap/ui/core/mvc/Controller"
], (Controller) => {
    "use strict";

    return Controller.extend("custom.myfirstapp.controller.View1", {
        onInit() {
        },
        onPress() {
            alert("hola mundo....");
        }
    });
});