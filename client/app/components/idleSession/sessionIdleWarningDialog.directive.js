(function(){
    "use strict";

    function IdleSessionWarningDialogDirective($state, $mdDialog){
        return {
            restrict: "E",
            scope: {
                countdownSeconds: "="
            },
            link: function($scope){

                console.log("Countdown seconds in directive:", $scope.countdownSeconds);

                var dialog;

                $scope.$on('IdleStart', function(){
                    console.log("IdleStart event");
                    dialog = $mdDialog.show(
                        {
                            templateUrl: "app/components/idleSession/idleSessionWarningDialog.html",
                            controller: "IdleSessionWarningDialogCtrl",
                            controllerAs: "IdleSession",
                            locals: {
                                countdownSeconds: $scope.countdownSeconds
                            },
                            bindToController: true
                        }
                    );
                });

                $scope.$on('IdleEnd', function(){
                    console.log("IdleEnd event");
                    $mdDialog.cancel(dialog);
                });

                $scope.$on('IdleTimeout', function(){
                    console.log("IdleTimeout event");
                    $mdDialog.cancel(dialog);
                    $state.go("root.login", {alertMessage: "You have been logged out due to inactivity."});
                });
            }
        };
    }

    angular.module("DCX")
           .directive("idleSessionWarningDialog", IdleSessionWarningDialogDirective);

})();