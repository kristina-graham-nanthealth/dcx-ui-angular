/**
 * Created by KGraham on 5/26/16.
 */
(function(){
    "use strict";

    angular.module("DCX")
           .constant("LOGIN_STATE", "root.login")
           .constant("INVENTORY_STATES", {
               "NODES": "root.main.body.nodes",
               "DEVICES": "root.main.body.devices",
               "GATEWAYS": "root.main.body.gateways",
               "GROUPS": "root.main.body.groups",
               "PARAMETERS": "root.main.body.parameters"
           })
           .constant("ADMIN_STATES", {
               "EVENTS": "root.main.body.events",
               "MAP": "root.main.body.map",
               "DASHBOARD": "root.main.body.dashboard",
               "DEVICE_TEST": "root.main.body.deviceTest",
               "SETTINGS": "root.main.body.settings",
               "ABOUT": "root.main.body.about"
           })
           .constant("VCX_STATES", {
               "DEVICES": "root.main.body.vcxDevices",
               "PARAMETERS": "root.main.body.vcxParameters",
               "TEMPLATES": "root.main.body.vcxTemplates"
           });
})();