/**
 * Created by KGraham on 5/27/16.
 */
(function () {
    "use strict";

    function DeviceFactory($http, API_SERVER) {

        function Devices() {

        }

        return {
            get:get
        };

        function get(params) {
            return $http({
                url: API_SERVER + '/svc/devices',
                method: "GET",
                params: params
            }).then(function(response){
                return response.data;
            });
        }
    }

    angular
        .module("DCX")
        .factory("DeviceFactory", DeviceFactory);
})();