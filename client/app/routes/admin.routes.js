/**
 * Created by KGraham on 5/26/16.
 * 
 * One of the 3 main routes files. Follows the same pattern as Inventory and VCX routes. Each page gets its url, 
 * template, controller, list of authorized user types (in the data block), and they all set the page header and the
 * page header's help content upon entering. Because they all set these page header things, no one has to delete their
 * remnants upon exit.
 */
(function(){
    "use strict";

    function Routes($stateProvider, ADMIN_STATES, USER_ROLES){

        $stateProvider
            .state(ADMIN_STATES.EVENTS, {
                url: "events",
                templateUrl: "app/components/events/events.html",
                controller: "EventsCtrl",
                data: {
                    authorizedRoles: [USER_ROLES.ADMIN, USER_ROLES.EDITOR]
                },
                onEnter: function(PageHeaderFactory, EVENTS_CONSTANTS){
                    PageHeaderFactory.setPageHeader(EVENTS_CONSTANTS.PAGE_HEADER);
                    PageHeaderFactory.setPageHelpContents(EVENTS_CONSTANTS.PAGE_HEADER,
                                                          EVENTS_CONSTANTS.HELP_TEMPLATE_URL);
                }
            })
            .state(ADMIN_STATES.MAP, {
                url: "map",
                templateUrl: "app/components/map/map.html",
                controller: "MapCtrl",
                data: {
                    authorizedRoles: [USER_ROLES.ADMIN, USER_ROLES.EDITOR]
                },
                onEnter: function(PageHeaderFactory, MAP_CONSTANTS){
                    PageHeaderFactory.setPageHeader(MAP_CONSTANTS.PAGE_HEADER);
                    PageHeaderFactory.setPageHelpContents(MAP_CONSTANTS.PAGE_HEADER,
                                                          MAP_CONSTANTS.HELP_TEMPLATE_URL);
                }
            })
            .state(ADMIN_STATES.DASHBOARD, {
                url: "dashboard",
                templateUrl: "app/components/dashboard/dashboard.html",
                controller: "DashboardCtrl",
                data: {
                    authorizedRoles: [USER_ROLES.ADMIN, USER_ROLES.EDITOR]
                },
                onEnter: function(PageHeaderFactory, DASHBOARD_CONSTANTS){
                    PageHeaderFactory.setPageHeader(DASHBOARD_CONSTANTS.PAGE_HEADER);
                    PageHeaderFactory.setPageHelpContents(DASHBOARD_CONSTANTS.PAGE_HEADER,
                                                          DASHBOARD_CONSTANTS.HELP_TEMPLATE_URL);
                }
            })
            .state(ADMIN_STATES.DEVICE_TEST, {
                url: "deviceTest",
                templateUrl: "app/components/deviceTest/deviceTest.html",
                controller: "DeviceTestCtrl",
                data: {
                    authorizedRoles: [USER_ROLES.ADMIN, USER_ROLES.EDITOR]
                },
                onEnter: function(PageHeaderFactory, DEVICE_TEST_CONSTANTS){
                    PageHeaderFactory.setPageHeader(DEVICE_TEST_CONSTANTS.PAGE_HEADER);
                    PageHeaderFactory.setPageHelpContents(DEVICE_TEST_CONSTANTS.PAGE_HEADER,
                                                          DEVICE_TEST_CONSTANTS.HELP_TEMPLATE_URL);
                }
            })
            .state(ADMIN_STATES.SETTINGS, {
                url: "settings",
                templateUrl: "app/components/settings/settings.html",
                controller: "SettingsCtrl",
                data: {
                    authorizedRoles: [USER_ROLES.ADMIN, USER_ROLES.EDITOR]
                },
                onEnter: function(PageHeaderFactory, SETTINGS_CONSTANTS){
                    PageHeaderFactory.setPageHeader(SETTINGS_CONSTANTS.PAGE_HEADER);
                    PageHeaderFactory.setPageHelpContents(SETTINGS_CONSTANTS.PAGE_HEADER,
                                                          SETTINGS_CONSTANTS.HELP_TEMPLATE_URL);
                }
            })
            .state(ADMIN_STATES.ABOUT, {
                url: "about",
                templateUrl: "app/components/about/about.html",
                controller: "AboutCtrl",
                data: {
                    authorizedRoles: [USER_ROLES.ADMIN, USER_ROLES.EDITOR]
                },
                onEnter: function(PageHeaderFactory, ABOUT_CONSTANTS){
                    PageHeaderFactory.setPageHeader(ABOUT_CONSTANTS.PAGE_HEADER);
                    PageHeaderFactory.setPageHelpContents(ABOUT_CONSTANTS.PAGE_HEADER,
                                                          ABOUT_CONSTANTS.HELP_TEMPLATE_URL);
                }
            });
    }

    angular.module('DCX')
           .config(Routes);

})();