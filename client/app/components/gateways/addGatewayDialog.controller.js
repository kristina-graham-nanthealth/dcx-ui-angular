(function(){
    "use strict";

    function AddGatewayDialogCtrl($mdDialog){
        var self = this;

        console.log("drivers", self.drivers);
        console.log("connections", self.connections);
        
        self.save = save;
        self.cancel = cancel;
        
        function save() {
            $mdDialog.hide(self.newGateway);
        }
        
        function cancel() {
            $mdDialog.cancel();
        }
    }

    angular.module("DCX")
           .controller("AddGatewayDialogCtrl", AddGatewayDialogCtrl);

})();