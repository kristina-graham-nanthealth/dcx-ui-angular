/**
 * Created by KGraham on 5/26/16.
 */
(function () {
    "use strict";

    function ThemeConfig($mdThemingProvider) {

        // sets the md-primary used by angular material all across the app. See angular material > themes for more info
        var dcxOrangeMap = $mdThemingProvider.extendPalette("blue", {
            "500": "f6a548"
        });

        // TODO: do not have this warn palette configured correctly yet. I don't think warn uses Hue 500
        var dcxBlueMap = $mdThemingProvider.extendPalette("blue", {
            "500": "00aadf"
        });

        $mdThemingProvider.definePalette("dcxOrange", dcxOrangeMap);
        $mdThemingProvider.definePalette("dcxBlue", dcxBlueMap);

        $mdThemingProvider.theme("default")
            .primaryPalette("dcxOrange", {
                "hue-1": "800"
            })
            .warnPalette("dcxBlue")
            .accentPalette("grey");
    }

    angular.module('DCX').config(ThemeConfig);

})();