/**
 * Created by KGraham on 5/26/16.
 *
 * One of the 3 main routes files. Follows the same pattern as Admin and VCX routes. Each page gets its url,
 * template, controller, list of authorized user types (in the data block), and they all set the page header and the
 * page header's help content upon entering. Because they all set these page header things, no one has to delete their
 * remnants upon exit.
 */
(function(){
    "use strict";

    function Routes($stateProvider, INVENTORY_STATES, USER_ROLES){

        $stateProvider
            .state(INVENTORY_STATES.NODES, {
                url: "nodes",
                templateUrl: "app/components/nodes/nodes.html",
                controller: "NodesCtrl as Nodes",
                data: {
                    authorizedRoles: [USER_ROLES.ADMIN]
                },
                onEnter: function(PageHeaderFactory, NODES_CONSTANTS){
                    PageHeaderFactory.setPageHeader(NODES_CONSTANTS.PAGE_HEADER);
                    PageHeaderFactory.setPageHelpContents(NODES_CONSTANTS.PAGE_HEADER,
                                                          NODES_CONSTANTS.HELP_TEMPLATE_URL);
                }
            })
            .state(INVENTORY_STATES.DEVICES, {
                url: "devices",
                templateUrl: "app/components/devices/devices.html",
                controller: "DevicesCtrl as Devices",
                data: {
                    authorizedRoles: [USER_ROLES.ADMIN]
                },
                onEnter: function(PageHeaderFactory, DEVICES_CONSTANTS){
                    PageHeaderFactory.setPageHeader(DEVICES_CONSTANTS.PAGE_HEADER);
                    PageHeaderFactory.setPageHelpContents(DEVICES_CONSTANTS.PAGE_HEADER,
                                                          DEVICES_CONSTANTS.HELP_TEMPLATE_URL);
                }
            })
            .state(INVENTORY_STATES.GATEWAYS, {
                url: "gateways",
                templateUrl: "app/components/gateways/gateways.html",
                controller: "GatewaysCtrl as Gateways",
                data: {
                    authorizedRoles: [USER_ROLES.ADMIN]
                },
                onEnter: function(PageHeaderFactory, GATEWAYS_CONSTANTS){
                    PageHeaderFactory.setPageHeader(GATEWAYS_CONSTANTS.PAGE_HEADER);
                    PageHeaderFactory.setPageHelpContents(GATEWAYS_CONSTANTS.PAGE_HEADER,
                                                          GATEWAYS_CONSTANTS.HELP_TEMPLATE_URL);
                }
            })
            .state(INVENTORY_STATES.GROUPS, {
                url: "groups",
                templateUrl: "app/components/groups/groups.html",
                controller: "GroupsCtrl",
                data: {
                    authorizedRoles: [USER_ROLES.ADMIN]
                },
                onEnter: function(PageHeaderFactory, GROUPS_CONSTANTS){
                    PageHeaderFactory.setPageHeader(GROUPS_CONSTANTS.PAGE_HEADER);
                    PageHeaderFactory.setPageHelpContents(GROUPS_CONSTANTS.PAGE_HEADER,
                                                          GROUPS_CONSTANTS.HELP_TEMPLATE_URL);
                }
            })
            .state(INVENTORY_STATES.PARAMETERS, {
                url: "parameters",
                templateUrl: "app/components/parameters/parameters.html",
                controller: "ParametersCtrl as Parameters",
                data: {
                    authorizedRoles: [USER_ROLES.ADMIN]
                },
                onEnter: function(PageHeaderFactory, PARAMETERS_CONSTANTS){
                    PageHeaderFactory.setPageHeader(PARAMETERS_CONSTANTS.PAGE_HEADER);
                    PageHeaderFactory.setPageHelpContents(PARAMETERS_CONSTANTS.PAGE_HEADER,
                                                          PARAMETERS_CONSTANTS.HELP_TEMPLATE_URL);
                }
            });
    }

    angular.module('DCX')
           .config(Routes);

})();
