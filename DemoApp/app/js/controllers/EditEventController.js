'use strict';

eventsApp.controller('EditEventController', 
    function EventController($scope) {
        $scope.saveEvent = function(event){
            alert(event.name);
        };

        $scope.cancelEdit = function(){
            window.location="/EventDetails.html";
        }
    });