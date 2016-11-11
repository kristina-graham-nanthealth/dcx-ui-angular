/** named exactly as used. Grouped with the parameters code because it will likely only be used by the parameters
 * view. Move to shared if that ever changes. This takes in a number (or string rep of a number) and returns 0. +
 * right padding of zeros - the size of the padding being the number passed in. Used in UOM conversions on
 * parameters page
 */
(function(){
    "use strict";

    function PrecisionFilter(){
        return function(input) {
            if (!angular.isNumber(input)) {
                if (input && input.length > 0) {
                    var padding = "";
                    for (var i = 0; i < input; i++) {
                        padding += "0";
                    }
                    return "0." + padding;
                } else {
                    return "";
                }
            }
        };
    }

    angular.module("DCX")
           .filter("precisionExample", PrecisionFilter);

})();