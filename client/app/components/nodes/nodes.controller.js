/**
 * Created by KGraham on 5/26/16.
 */
(function(){
    "use strict";

    function NodesCtrl(NodesFactory, $filter){

        var self = this;

        self.groupings = groupings();
        self.editMode = false;
        
        self.toggleEditMode = toggleEditMode;
        self.selectAll = selectAll;
        
        /* do we get online nodes and offline nodes in separate calls? treating them like we don't here, change later.
        * filter all nodes by the property "online" and set accordingly
        * */
       NodesFactory.getNodes().then(function(data) {
           self.online = $filter("filter")(data, {online: true});
           self.offline = $filter("filter")(data, {online: false});
       });
        
        function toggleEditMode() {
            self.editMode = !self.editMode;
        }
        
        /** TODO: Logic does not work yet */
        function selectAll() {
            self.online.forEach(function(node) {
                node.selected = true;
            });
            self.offline.forEach(function(node) {
                node.selected = true;
            });
        }

        function groupings(){
            return ["None", "Profile", "Type", "Activity"];
        }
    }

    angular.module('DCX')
           .controller('NodesCtrl', NodesCtrl);

})();