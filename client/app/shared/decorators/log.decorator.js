/** enhances the Angular $log service by adding a timestamp, printing the line number (when used in Chrome or
 * Firefox) of the log statement, interpolating strings, and stringifying all objects automatically. Only does
 * linenumbers in development environment as configured by "ENVIRONMENT" which is set in /config/local.env.json by the
 * gulp build by gulp-ng-config. It only does it in this evironment because minified code's line numbers would
 * be nonsense. TODO: add sourcemaps to the build to overcome this
 * 
 * Note the interpolation works like log4j: "$log.debug("Hello {}", "Kristina");"
 * //outputs: Hello Kristina
 */
(function(){
     "use strict";
     function LogDecorator($delegate, ENVIRONMENT, ENVIRONMENT_TYPES){
         "ngInject";

         var levels = ["log", "info", "warn", "debug", "error"];

         levels.forEach(function(level){
             $delegate[level] = prepareLogFn(level);
         });

         function prepareLogFn(level){

             var logFn = $delegate[level];

             var enhancedLogFn = function(){

                 /* get all args passed to be logged */
                 var args = Array.prototype.slice.call(arguments);

                 args = purify(args);

                 args = interpolate(args);

                 args = stringify(args);

                 var meta = metadata();

                 args[0] = meta + " | " + args[0] + " -> ";

                 logFn.apply(null, args);

                 function purify(args){
                     return args.map(function(arg){
                         if(!angular.isDefined(arg)) {
                             return "undefined";
                         } else if(arg === null) {
                             return "null";
                         } else {
                             return arg;
                         }
                     });
                 }

                 /* replace {}'s with the insertions the developer wanted to add */
                 function interpolate(args){
                     var result = [];
                     /* take the second arg because the first is the context from the Logger class */
                     var mainPrint = args[1];
                     var supplant = "{}";
                     /* check whether there is anything to interpolate */
                     if(typeof mainPrint === "string" && mainPrint.indexOf(supplant) > -1) {
                         /* there is, okay loop through and do all the interpolations */
                         var counter = 2;
                         for (counter; counter < args.length; counter++) {
                             mainPrint = mainPrint.replace(supplant, stringify(args[counter]));
                         }
                         /* push in the context from the Logger class */
                         result.push(args[0]);
                         /* push newly interpolated string onto args stack */
                         result.push(mainPrint);
                         /* after interpolating just populate args array with any leftover arguments */
                         for (counter; counter < args.length; counter++) {
                             result.push(args[counter]);
                         }
                     } else {
                         /* do nothing */
                         result = args;
                     }

                     return result;

                 }

                 /* stringify all objects so that caller doesn't have to */
                 function stringify(args){
                     if(!Array.isArray(args)) {
                         return work(args);
                     } else {
                         return args.map(function(arg){
                             return work(arg);
                         });
                     }

                     function work(arg){
                         if(typeof arg === "object" && !(arg instanceof Error)) {
                             return JSON.stringify(arg);
                         }
                         return arg;
                     }
                 }

                 /* get timestamp and optional linenumber if code is not minified */
                 function metadata(){

                     /* get timestamp using date and pad values so all stamps look the same */
                     var today = new Date();
                     var timestamp = pad(2, today.getHours()) +
                                     ":" + pad(2, today.getMinutes()) +
                                     ":" + pad(2, today.getSeconds()) +
                                     ":" + pad(3, today.getMilliseconds());

                     var lineNumber = "";
                     if(level !== "error" && ENVIRONMENT === ENVIRONMENT_TYPES.DEV) {
                         /*
                          * Use (instance of Error)'s stack to get line number.
                          * Skip the line that says error and skip the line caused by this function, enhancedLogFn
                          */
                         var error = new Error();
                         /* ie errors do not have stack traces so we cannot add the line number */
                         if(error.stack) {
                             lineNumber = (new Error()).stack.split("\n")[4];

                             /* clean up the string we've retrieved: keep only app/__directory__/__script__.js */
                             lineNumber =
                                 " | " + lineNumber.substring(lineNumber.indexOf("/app/") + 1, lineNumber.length - 1);
                         }
                     }

                     return timestamp + lineNumber;

                     function pad(length, content){
                         var pad = "";
                         for (var i = 1; i < length; i++) {
                             pad += "0";
                         }
                         return pad.substring(0, length - (content + "").length) + content;
                     }
                 }
             };

             return enhancedLogFn;
         }

         return $delegate;
     }

     angular.module("DCX")
            .decorator("$log", LogDecorator);
 })();
