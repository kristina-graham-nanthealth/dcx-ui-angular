/**
 * Created by KGraham on 5/26/16.
 *
 * One of the 3 main routes files. Follows the same pattern as Admin and Inventory routes. Each page gets its url,
 * template, controller, list of authorized user types (in the data block), and they all set the page header and the
 * page header's help content upon entering. Because they all set these page header things, no one has to delete their
 * remnants upon exit.
 */
(function () {
    "use strict";

    function Routes($stateProvider, VCX_STATES, USER_ROLES) {

        $stateProvider
            .state(VCX_STATES.DEVICES, {
                url: "vcxDevices",
                templateUrl: "app/components/vcxDevices/vcxDevices.html",
                controller: "VCXDevicesCtrl",
                data: {
                    authorizedRoles: [USER_ROLES.ADMIN, USER_ROLES.EDITOR]
                },
                onEnter: function(PageHeaderFactory, VCX_DEVICES_CONSTANTS) {
                    PageHeaderFactory.setPageHeader(VCX_DEVICES_CONSTANTS.PAGE_HEADER);
                    PageHeaderFactory.setPageHelpContents(VCX_DEVICES_CONSTANTS.PAGE_HEADER,
                                                          VCX_DEVICES_CONSTANTS.HELP_TEMPLATE_URL);
                }
            })
            .state(VCX_STATES.PARAMETERS, {
                url: "vcxParameters",
                templateUrl: "app/components/vcxParameters/vcxParameters.html",
                controller: "VCXParametersCtrl",
                data: {
                    authorizedRoles: [USER_ROLES.ADMIN, USER_ROLES.EDITOR]
                },
                onEnter: function(PageHeaderFactory, VCX_PARAMETERS_CONSTANTS) {
                    PageHeaderFactory.setPageHeader(VCX_PARAMETERS_CONSTANTS.PAGE_HEADER);
                    PageHeaderFactory.setPageHelpContents(VCX_PARAMETERS_CONSTANTS.PAGE_HEADER,
                                                          VCX_PARAMETERS_CONSTANTS.HELP_TEMPLATE_URL);
                }
            })
            .state(VCX_STATES.TEMPLATES, {
                url: "vcxTemplates",
                templateUrl: "app/components/vcxTemplates/vcxTemplates.html",
                controller: "VCXTemplatesCtrl",
                data: {
                    authorizedRoles: [USER_ROLES.ADMIN, USER_ROLES.EDITOR]
                },
                onEnter: function(PageHeaderFactory, VCX_TEMPLATES_CONSTANTS) {
                    PageHeaderFactory.setPageHeader(VCX_TEMPLATES_CONSTANTS.PAGE_HEADER);
                    PageHeaderFactory.setPageHelpContents(VCX_TEMPLATES_CONSTANTS.PAGE_HEADER,
                                                          VCX_TEMPLATES_CONSTANTS.HELP_TEMPLATE_URL);
                }
            });
    }

    angular.module('DCX').config(Routes);

})();