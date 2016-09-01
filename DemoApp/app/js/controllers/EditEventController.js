'use strict';

eventsApp.controller('EditEventController', 
    function EventController($scope) {
        $scope.saveEvent = function(event, newEventForm){
            if(newEventForm.$valid){
                alert(event.name);
            }
            else{
                alert("Form is not valid");
            }
        };

        $scope.cancelEdit = function(){
            window.location="/EventDetails.html";
        }
    });