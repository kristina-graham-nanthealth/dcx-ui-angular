(function(){
    "use strict";

    function IdleSessionWarningDialogCtrl(Logger, $interval){
        var logger = new Logger("IdleSessionWarningDialogCtrl");
        var self = this;

        /* md-progres-linear counts down from 100%, this provides that starting point */
        self.countdown = 100;
        
        /* every second we want to count down by 100 divided by the number of seconds in the countdown */
        var counter = 100 / self.countdownSeconds;
        
        /* runs every second per the 1000 (milliseconds) as the second parameter */
        $interval(function() {
            self.countdown -= counter;
            self.countdownSeconds -= 1;
        }, 1000);
        
    }

    angular.module("DCX")
           .controller("IdleSessionWarningDialogCtrl", IdleSessionWarningDialogCtrl);

})();