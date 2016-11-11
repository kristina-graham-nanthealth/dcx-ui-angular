/**
 * Created by KGraham on 5/26/16.
 */
(function () {
    "use strict";

    function DevicesCtrl() {
        var self = this;
        self.tabs = tabs();
        self.groupByTypes = groupByTypes();

        function tabs() {
            return [
                {
                    label: "Unconfigured",
                    templateUrl: "app/components/devices/unconfigured.html"
                },
                {
                    label: "Configured",
                    templateUrl: "app/components/devices/configured.html"
                }
            ];
        }

        function groupByTypes() {
            return [
                {
                    name: "None",
                    value: "none"
                },
                {
                    name: "Connection Status",
                    value: "status"
                },
                {
                    name: "Node/Gateway",
                    value: ""
                },
                {
                    name: "Driver",
                    value: ""
                },
                {
                    name: "Connection Type",
                    value: ""
                }
            ];
        }
    }

    angular.module('DCX').controller('DevicesCtrl', DevicesCtrl);

})();