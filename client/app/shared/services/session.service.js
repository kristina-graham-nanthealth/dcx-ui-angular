/** stores the current session data for the logged in user */
(function(){
    "use strict";

    function Session(){

        this.create = function(sessionId, username, userRole){
            this.sessionId = sessionId;
            this.username = username;
            this.userRole = userRole;
        };

        this.destroy = function(){
            this.sessionId = null;
            this.username = null;
            this.userRole = null;
        };
    }

    angular.module("DCX")
           .service("Session", Session);

})();