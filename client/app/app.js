(function(){
    'use strict';

    // Declare app level module which depends on the 3rd party libraries
    angular
        .module('DCX', [
            'ui.router',
            'ngMaterial',
            'ngMessages',
            'ngAria',
            'ngIdle'
        ])
        .config(
            function(ENVIRONMENT, ENVIRONMENT_TYPES, $logProvider, IdleProvider, KeepaliveProvider, LOGIN_TIMEOUT_MIN,
                     LOGOUT_WARNING_SECONDS){

                /** this sets whether $log.debug message should be displayed. We only want to display said messages
                 * in a development environment. Most logs should be debug logs. Logs that you want displayed in
                 * ITG/Production should be .log or .error
                 */
                $logProvider.debugEnabled(ENVIRONMENT === ENVIRONMENT_TYPES.DEV);

                /** this is where we set how long the definition of an idle session is and how long the user has to
                 *  interrupt the countdown to logout sequence. Takes in constants
                 * for their values which are set in /config/local.env.json by the gulp build by gulp-ng-config
                 * 
                 * See ngIdle 3rd party library online for API information
                 */
                IdleProvider.idle(Number(LOGIN_TIMEOUT_MIN) * 60);
                IdleProvider.timeout(LOGOUT_WARNING_SECONDS);
                
                /** TODO: can use this libarary to send keepAlive heartbeats to the server. Need to research their
                 * API and develop this logic
                 */
                //KeepaliveProvider.interval(10);

            })
        .run(function($rootScope, AuthFactory, $state, $mdDialog, LOGIN_STATE){

            /** this badboy is what prevents users from navigating to routes when they are not
             * authenticated/authorized
             */
            //to start: listen for this event thrown by uiRouter on any state change
            $rootScope.$on('$stateChangeStart', function(event, next){
                // if the state change is to the login page, don't do anything. Anyone can always go to the login page
                if(next.name !== LOGIN_STATE) {
                    //okay not to login page, well let's collect the state they are trying to navigate to's
                    // authorized roles list (configured in the routes files under the data property)
                    var authorizedRoles = next.data.authorizedRoles;
                    // using the roles: is the user authorized?
                    if(!AuthFactory.isAuthorized(authorizedRoles)) {
                        // nope they arent, prevent the state change!
                        event.preventDefault();
                        // okay security concern thwarted. Now, are they even logged in?
                        if(AuthFactory.isAuthenticated()) {
                            // Yes they are logged in, the user is just not allowed here. Let them know
                            $mdDialog.show({
                                               templateUrl: "app/components/userNotAuthorizedDialog/userNotAuthorizedDialog.html",
                                               controller: "UserNotAuthorizedDialogCtrl",
                                               controllerAs: "UserNot"
                                           });
                        } else {
                            // user is not logged in, send them to login page (if they're not already there)
                            if($state.$current.name !== (LOGIN_STATE)) {
                                $state.go(LOGIN_STATE);
                            }
                        }
                    }
                }
            });
        });
})();