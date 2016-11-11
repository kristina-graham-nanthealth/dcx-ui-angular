/**
 * Created by KGraham on 5/26/16.
 * 
 * Controller for gateways page.
 */
(function(){
    "use strict";

    function GatewaysCtrl($mdDialog, GatewayFactory){

        var self = this;
        
        self.groupings = groupings();
        self.selectedGrouping = groupings()[0].name;
        self.connections = [{name: "192.168.101.0"}];
        self.drivers = [{name: "Pseudo Driver v01.00.000"}];

        self.addGateway = addGateway;

        /** pops dialog for configuring new gateway. 
         * Passes the dialog the current connections and drivers available.
         * TODO: Will need http logic for getting the real gateways
         */
        function addGateway(ev){
            $mdDialog.show({
                               controller: "AddGatewayDialogCtrl",
                               controllerAs: "AddGateway",
                               locals: {
                                   connections: self.connections,
                                   drivers: self.drivers
                               },
                               bindToController: true,
                               templateUrl: 'app/components/gateways/addGatewayDialog.html',
                               targetEvent: ev,
                               clickOutsideToClose: true
                           })
                     .then(function(newGateway){
                         GatewayFactory.postGateway(newGateway).then(function() {
                             // successful http post of new gateway
                         }, function(err) {
                             // unsuccessful http post of new gateway
                         });
                     }, function(){
                     });
        }

        function groupings(){
            return ["None", "Driver", "Node"];
        }
    }

    angular.module('DCX')
           .controller('GatewaysCtrl', GatewaysCtrl);

})();