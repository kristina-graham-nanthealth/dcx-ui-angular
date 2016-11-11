/**
 * Created by KGraham on 5/26/16.
 * 
 * This file handles all the abstract and root level routes. The structure is root is the base and then root either
 * branches to root.login or root.main.body.<route_name>. Root level provides the page holder div and the logo
 * footer for all pages. Main level plugs into root's "page" div and sets the skeleton for navbar, pageheader, and page
 * body, then root.main.body populates these three and provides a pluggable div for each page to flesh out in the
 * form of a one line in-line template (defined below). All corresponding routes then plug into this div and inherit
 * the other states
 * 
 * See uiRouter 3rd party library online for API information
 */
(function(){
    "use strict";

    function Routes($urlRouterProvider, $stateProvider){
        $urlRouterProvider.otherwise("/map");

        $stateProvider
            .state("root", {
                abstract: true,
                url: "/",
                templateUrl: "app/components/root/root.html",
                controller: "RootCtrl as Root"
            })
            .state("root.login", {
                url: "login",
                views: {
                    page: {
                        templateUrl: "app/components/login/login.html",
                        controller: "LoginCtrl as Login"
                    }
                },
                params: {
                    alertMessage: null
                },
                onEnter: function(Session, Idle) {
                    angular.element(document).find("body").addClass("login-background");
                    Session.destroy();
                    Idle.unwatch();
                },
                onExit: function() {
                    angular.element(document).find("body").removeClass("login-background");
                }
            })
            .state("root.main", {                abstract: true,
                views: {
                    page: {
                        templateUrl: "app/components/main/main.html"
                    }
                },
                onEnter: function(Idle) {
                    Idle.watch();
                }
            })
            .state("root.main.body", {
                abstract: true,
                views: {
                    navBar: {
                        templateUrl: "app/components/navBar/navBar.html",
                        controller: "NavBarCtrl as NavBar"
                    },
                    pageHeader: {
                        templateUrl: "app/components/pageHeader/pageHeader.html",
                        controller: "PageHeaderCtrl as PageHeader"
                    },
                    body: {
                        template: "<div ui-view></div>"
                    }
                }
            })
        ;
    }

    angular.module('DCX')
           .config(Routes);

})();
