(function(){
    "use strict";

    function LoginCtrl(Logger, AuthFactory, $state, $stateParams, ADMIN_STATES){
        var logger = new Logger("LoginCtrl");
        var self = this;

        self.submit = submit;

        /* other states can pass a message to be displayed on this page. Example: when logging out from the navbar
           the message "You have been logged out." gets passed here as a stateParam. See Navbar controller for that
            exact example
         */
        if ($stateParams.alertMessage) {
            self.alertMessage = $stateParams.alertMessage;
        }

        /**
         * Does the actual submission of login form. AuthFactory handles the heavy lifting but error messages are
         * set in the negative promise handler function in case of error.
         */
        function submit(newUser){
            AuthFactory.login(newUser.username, newUser.password)
                       .then(function(){
                           $state.go(ADMIN_STATES.MAP);
                       }, function(errMessage) {
                           self.alertMessage = errMessage;
                       });
        }
    }

    angular.module("DCX")
           .controller("LoginCtrl", LoginCtrl);

})();