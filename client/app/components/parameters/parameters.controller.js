/**
 * Created by KGraham on 5/26/16.
 */
(function(){
    "use strict";

    function ParametersCtrl(DriverFactory, $filter){

        var self = this;

        DriverFactory.getDrivers()
                     .then(function(data){
                         self.drivers = data;
                     });
        self.parametersSelected = [];
        self.conversions = conversions();

        self.setParameters = setParameters;
        self.toggleParameterSelected = toggleParameterSelected;
        self.toggleExtended = toggleExtended;
        self.anySelected = anySelected;

        /** have to call this because the ng-repeat of driver.parameters was malfunctioning
         * TODO: refactor to take in the indexSelected for better testability
         */
        function setParameters(){
            if(self.indexSelected) {
                self.parameters = self.drivers[self.indexSelected].parameters;
            }
        }
        
        function toggleParameterSelected(parameter){
            parameter.selected = parameter.selected ? false : true;
        }

        /** represents clicking the more/less link on the page. Since this is not a stored property on the parameter
         *  object we are just saving whether each parameter is extended or not by saving a property on the
         *  controller named after the parameter.name. Since the parameter names are unique this should not break
         *  down. Might have to refactor to handle multiple drivers since parameters will be duplicated across
         *  multiple drivers. Menu's toggled as extended should probably not be persisted across driver changes
         *  though, so can just add a call to wipe all parameters on the controller upon driver change
         */
        function toggleExtended(parameterName){
            if(!self[parameterName]) {
                self[parameterName] = {};
            }
            self[parameterName].extended = self[parameterName].extended ? false : true;
        }

        /** helper function to report whether any parameters are currently selected. aids the view logic with
         * deciding whether to show a little helper message to the user for getting started 
         */
        function anySelected(){
            if(self.parameters) {
                var filtered = $filter("filter")(self.parameters, {selected: true});
                if(filtered) {
                    return filtered.length > 0;
                }
            }
            return false;
        }

        function conversions(){
            return ["C to F", "C to K", "F to C", "F to K", "K to C", "K to F", "L to mL", "mL to L", "L/m to L/h",
                "L/m to L/s", "L/m to mL/h"];
        }
    }

    angular.module('DCX')
           .controller('ParametersCtrl', ParametersCtrl);

})();