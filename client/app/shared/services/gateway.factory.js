/**
 * TODO: Will be where we do http logic for GET, PUT, POST, DELETE gateways
 */
(function(){
    "use strict";

    function GatewayFactory(API_SERVER, $http, $q){
        
        return {
            getGateways: getGateways,
            postGateway: postGateway
        };
        
        function getGateways() {
            //return $http({
            //                 url: API_SERVER + "/gateways"
            //             },
            //             function(response){
            //                 return response.data;
            //             });    
        }
        
        function postGateway(gateway) {
            //return $http({
            //                 url: API_SERVER + "/gateways",
            //                 method: "POST",
            //                 data: gateway
            //             });
            
            /* only for testing */
            var deferred = $q.defer();
            deferred.resolve(gateway);
            return deferred.promise;
        }
    }

    angular.module("DCX")
           .factory("GatewayFactory", GatewayFactory);

})();