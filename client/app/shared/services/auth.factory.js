/**
 * TODO: Will be where we call to the server to do authentication. Currently hardcoded to make "kristina" and "7" admins
 * and any other user an "editor"
 */
(function(){
    "use strict";

    function AuthFactory(API_SERVER, Logger, $http, Session, $q){

        var logger = new Logger("AuthFactory");

        return {
            login: login,
            isAuthenticated: isAuthenticated,
            isAuthorized: isAuthorized
        };

        function login(username, password){
            //return $http
            //    .post({
            //              url: API_SERVER + '/login',
            //              params: {
            //                  username: username,
            //                  password: password
            //              }
            //          })
            //    .then(function(response){
            //        Session.create(response.data.id, response.data.user.id,
            //                       response.data.user.role);
            //        return response.data.user;
            //      });
            var deferred = $q.defer();
            if(username !== "kristina") {
                Session.create(Math.random(), username,
                               username === "7" ? "admin" : "editor");
                deferred.resolve();
            } else {
                if(password !== "kristina") {
                    deferred.reject("Password incorrect for the given user.");
                } else {
                    Session.create(Math.random(), username, "admin");
                }
            }
            return deferred.promise;

        }

        /** is the user logged in? */
        function isAuthenticated(){
            return !!Session.username;
        }

        /** takes in the route's authorized roles and, using the current session information, determines whether
         * they are authorized to view the page calling this function
         */
        function isAuthorized(authorizedRoles){
            if(!angular.isArray(authorizedRoles)) {
                authorizedRoles = [authorizedRoles];
            }
            return isAuthenticated() && authorizedRoles.indexOf(Session.userRole) !== -1;
        }

    }

    angular.module("DCX")
           .factory("AuthFactory", AuthFactory);

})();