'use strict';

eventsApp.controller('EventController', 
    function EventController($scope) {
        $scope.sortorder = 'name'; 

        $scope.snippet = '<span style="color:red">hi there</span>';
        $scope.boolValue = true;
        $scope.myStyle = {color:'blue'};
        $scope.colorClass = "green";
        $scope.buttonDisabled = false;
        $scope.event = {
            name: 'Angular Boot Camp',
            date: '1/1/2013',
            time: '10:30 am',
            location: {
                address: 'Google Hq',
                city: 'Mountain View',
                province: 'CA'
            },
            imageUrl: '/img/angularjs-logo.png',
            sessions: [
                {
                    name: 'Directives Masterclass',
                    creatorName: 'Bob Smith',
                    duration: 1,
                    level: 'Advanced',
                    abstract: 'In this session you will lear the ins and outs of directives in Angular',
                    upVoteCount: 0
                },
                {
                    name: 'Scopes for fun and profit',
                    creatorName: 'John Doe',
                    duration: 2,
                    level: 'Introductory',
                    abstract: 'This session will take a closer look at scope. Learn what it means, what it does, etc.',
                    upVoteCount: 0
                },
                {
                    name: 'Well Behaved Controllers - Advanced',
                    creatorName: 'Jane Doe',
                    duration: 4,
                    level: 'Intermediate',
                    abstract: 'Controlles ar the beginning of everything Angular does. You need to know this.',
                    upVoteCount: 0
                }
            ]
        }

        $scope.upVoteSession = function(session){
            session.upVoteCount++;
        };

        $scope.downVoteSession = function(session){
            session.upVoteCount--;
        };

    }
);