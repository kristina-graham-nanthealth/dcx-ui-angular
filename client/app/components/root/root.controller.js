/** root controller. Can be used to set global properties. Should not be used for anything that can be done in a
 * more limited scoping. Currently only sets the time a user has to recover from an idle session warning. 
 */
(function(){
    "use strict";

    function RootCtrl(LOGOUT_WARNING_SECONDS){
        
        var self = this;
        
        self.logoutWarningSeconds = LOGOUT_WARNING_SECONDS;
    }

    angular.module("DCX")
           .controller("RootCtrl", RootCtrl);

})();