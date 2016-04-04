'use strict';

// Declare app level module which depends on views, and components
angular.module('connectfour.home', ['ngRoute'])

// Configure root to use the home partial and HomeCtrl controller
.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/', {
    templateUrl: 'views/home/home.html',
    controller: 'HomeCtrl'
  });
}])

// Set up HomeCtrl controller
.controller("HomeCtrl", ['$scope', 'socket', function($scope, socket) {



socket.on('messages', function(message) {
  console.log("message received: ", message.data);
  alert(message.data);
});
  

}]);