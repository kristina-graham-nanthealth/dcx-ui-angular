/**
 * Created by KGraham on 5/26/16.
 */
(function(){
    "use strict";

    function PageHeaderCtrl($scope, PageHeaderFactory, $mdDialog){
        var self = this;

        /* set the page header initially */
        self.pageHeader = PageHeaderFactory.getPageHeader();
        self.openHelp = openHelp;

        /* set up a watcher to check for pageHeader changes (state changes). Could also use $rootScope events but
         watcher works fine
         */
        $scope.$watch(function(){
            return PageHeaderFactory.getPageHeader();
        }, function(newVal, oldVal){
            if(newVal !== oldVal) {
                self.pageHeader = newVal;
            }
        });

        /** the user clicked help on the current page, open the dialog */
        function openHelp(){
            $mdDialog.show(
                {
                    templateUrl: "app/components/helpDialog/helpDialog.html",
                    locals: PageHeaderFactory.getPageHelpContents(),
                    bindToController: true,
                    controller: function($mdDialog){
                        this.hide = function(){
                            $mdDialog.hide();
                        };
                    },
                    controllerAs: "Help",
                    clickOutsideToClose: true
                }
            );
        }
    }

    angular.module('DCX')
           .controller('PageHeaderCtrl', PageHeaderCtrl);

})();