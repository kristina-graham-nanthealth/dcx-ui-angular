/**
 * Created by KGraham on 5/26/16.
 */
(function(){
    "use strict";

    function NavBarCtrl(INVENTORY_STATES, ADMIN_STATES, VCX_STATES, LOGIN_STATE, Session){

        var self = this;

        self.menus = menus();
        self.mapState = ADMIN_STATES.MAP;

        /** group and set all menus to be repeated in the view */
        function menus(){
            return [].concat(inventoryMenuItems(), adminMenuItems(), vcxMenuItems(), userMenuItems());

        }

        /** note stateParams can be passed in as the third property but no items except the logout event in userMenu
         * requires this functionality. See below for it's example.
         */
        function inventoryMenuItems(){
            return [].concat({
                title: "Inventory",
                menuItems: [
                    {
                        title: "Nodes",
                        state: INVENTORY_STATES.NODES
                    },
                    {
                        title: "Devices",
                        state: INVENTORY_STATES.DEVICES
                    },
                    {
                        title: "Gateways",
                        state: INVENTORY_STATES.GATEWAYS
                    },
                    {
                        title: "Groups",
                        state: INVENTORY_STATES.GROUPS
                    },
                    {
                        title: "Parameters",
                        state: INVENTORY_STATES.PARAMETERS
                    }
                ]
            });
        }

        function adminMenuItems(){
            return [].concat({
                title: "Admin",
                menuItems: [
                    {
                        title: "Events",
                        state: ADMIN_STATES.EVENTS
                    },
                    {
                        title: "Map",
                        state: ADMIN_STATES.MAP
                    },
                    {
                        title: "Dashboard",
                        state: ADMIN_STATES.DASHBOARD
                    },
                    {
                        title: "Device Test",
                        state: ADMIN_STATES.DEVICE_TEST
                    },
                    {
                        title: "Settings",
                        state: ADMIN_STATES.SETTINGS
                    },
                    {
                        title: "About",
                        state: ADMIN_STATES.ABOUT
                    }
                ]
            });
        }

        function vcxMenuItems(){
            return [].concat({
                title: "VitalsConX",
                menuItems: [
                    {
                        title: "Devices",
                        state: VCX_STATES.DEVICES
                    },
                    {
                        title: "Parameters",
                        state: VCX_STATES.PARAMETERS
                    },
                    {
                        title: "Template Library",
                        state: VCX_STATES.TEMPLATES
                    }
                ]
            });
        }

        /** user menu. Heads to the login state if the user logs out. Passes a message as a stateParam in doing so */
        function userMenuItems(){
            return [].concat({
                title: Session.username,
                menuItems: [
                    {
                        title: "Log Out",
                        state: LOGIN_STATE,
                        stateParams: {alertMessage: "You logged out."}
                    }
                ]
            });
        }
    }

    angular.module('DCX')
           .controller('NavBarCtrl', NavBarCtrl);

})();