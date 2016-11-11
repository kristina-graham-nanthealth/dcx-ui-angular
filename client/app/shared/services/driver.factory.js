/**
 * TODO: Will be where we do http logic for GET, PUT, POST, DELETE drivers
 */
(function(){
    "use strict";

    function DriverFactory(API_SERVER, $http, $q){

        var testdata = [{
            name: "NantHealth Pseudo v01.00.000",
            parameters: [
                {name: "ART_DBP", uom: "mmHg", description: "Pseudo ART_DBP"},
                {name: "CO", uom: "L/min", description: "Pseudo CO"},
                {name: "ETCO2", uom: "mmHg", description: "Pseudo ETCO2"},
                {name: "FIO2", uom: "%", description: "Pseudo FIO2"},
                {name: "HR", uom: "bpm", description: "Pseudo HR"},
                {name: "INSPTM", uom: "s", description: "Pseudo INSPTM"},
                {name: "MESSAGE_CONTROL_ID", uom: "", description: "Pseudo Message Control ID"},
                {name: "MV", uom: "L/min", description: "Pseudo MV"}
            ]
        }];

        return {
            getDrivers: getDrivers,
            postDriver: postDriver
        };

        function getDrivers(){
            //return $http({
            //                 url: API_SERVER + "/drivers"
            //             },
            //             function(response){
            //                 return response.data;
            //             });

            /* only for testing */
            var deferred = $q.defer();
            deferred.resolve(testdata);
            return deferred.promise;
        }

        function postDriver(driver){
            //return $http({
            //                 url: API_SERVER + "/nodes",
            //                 method: "POST",
            //                 data: driver
            //             });
        }
    }

    angular.module("DCX")
           .factory("DriverFactory", DriverFactory);

})();