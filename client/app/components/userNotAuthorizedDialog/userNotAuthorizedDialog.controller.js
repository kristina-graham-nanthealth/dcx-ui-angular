(function(){
    "use strict";

    function UserNotAuthorizedDialogCtrl(Logger, $mdDialog, $state){
        var logger = new Logger("UserNotAuthorizedDialogCtrl");
        var self = this;

        self.okay = okay;
        self.login = login;

        function okay() {
            $mdDialog.hide();
        }

        function login() {
            $state.go("root.login");
            $mdDialog.hide();
        }
    }

    angular.module("DCX")
           .controller("UserNotAuthorizedDialogCtrl", UserNotAuthorizedDialogCtrl);

})();