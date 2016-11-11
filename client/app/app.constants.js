/**
 * Created by KGraham on 5/26/16.
 * 
 * Constants on the application level. Could be application name or application URL etc.
 */
(function() {
    "use strict";
    
    angular.module("DCX")
        .constant("ENVIRONMENT_TYPES", {
            DEV: "development",
            ITG: "integration",
            PRO: "production"
        });
    
})();