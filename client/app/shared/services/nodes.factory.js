/**
 * TODO: Will be where we do http logic for GET, PUT, POST, DELETE nodes
 */
(function(){
    "use strict";

    function NodesFactory(API_SERVER, $http, $q){

        /* only for testing */
        var testdata = [
            {name: "a23572346543", online: true, timeCameUp: new Date(), description: "D: 1"},
            {name: "d5152cc67165", online: true, timeCameUp: new Date(), description: "D: 2"},
            {name: "asbdsadfasdf", online: true, timeCameUp: new Date(), description: "D: 3"},
            {name: "asdfkjas;dfk", online: true, timeCameUp: new Date(), description: "D: 4"},
            {name: "askdfljasdfd", online: true, timeCameUp: new Date(), description: "D: 5"},
            {name: "woeiruqoweir", online: true, timeCameUp: new Date(), description: "D: 6"},
            {name: "oweqiruoqiwe", online: true, timeCameUp: new Date(), description: "D: 7"},
            {name: "209329348029", online: true, timeCameUp: new Date(), description: "D: 8"},
            {name: "zmxcnv,mxcvn", online: true, timeCameUp: new Date(), description: "D: 9"},
            {name: "123hdfghfghg", online: true, timeCameUp: new Date(), description: "D: 10"},
            {name: "[pwe[trtp[rt", online: true, timeCameUp: new Date(), description: "D: 11"},
            {name: "[wprt[we[p[p", online: true, timeCameUp: new Date(), description: "D: 12"}
        ];

        return {
            getNodes: getNodes
        };

        function getNodes(){
            //return $http({
            //                 url: API_SERVER + "/nodes"
            //             },
            //             function(response){
            //                 return response.data;
            //             });

            /* only for testing */
            var deferred = $q.defer();
            deferred.resolve(testdata);
            return deferred.promise;
        }
    }

    angular.module("DCX")
           .factory("NodesFactory", NodesFactory);

})();