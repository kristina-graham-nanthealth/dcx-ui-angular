/** team logger class. Takes in a "context" when instantiated and this context cannot be minified so will be the
 * only helpful part of the logs.
 * 
 * Usage: 
 * 
 * Ctrl($scope, Logger) {
 *  var logger = new Logger("ExampleCtrl");
 *  
 *  logger.debug("Debug message");
 *  logger.log("Log message");
 *  logger.error("Error message");
 *  
 *  Note does not use .warn or .info. Those are pretty redundannt.
 */

(function(){
    "use strict";

    function Logger($log){

        function Logger(context){
            this.context = context;
        }

        Logger.prototype.log = function(){
            [].unshift.call(arguments, this.context);
            $log.log.apply(null, arguments);
        };

        Logger.prototype.debug = function(){
            [].unshift.call(arguments, this.context);
            $log.debug.apply(null, arguments);
        };

        Logger.prototype.error = function(){
            [].unshift.call(arguments, this.context);
            $log.error.apply(null, arguments);
        };

        return Logger;
    }

    angular
        .module("DCX")
        .factory("Logger", Logger);
})();
