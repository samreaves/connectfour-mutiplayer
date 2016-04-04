/**
 * @name Connect Four App Server
 * @file app.js
 * @description Client App 
 * @author Sam Reaves
 * @date April 3rd, 2016
 */


'use strict';

// Declare app level module which depends on views, and components
angular.module('connectfour', [
  'ngRoute',
  //'ngMaterial', 
  //'ngAnimate', 
  //'ngMdIcons', 
  'btford.socket-io',
  'connectfour.socket',
  'connectfour.home'
])

// Configure the route provider to redirect any non-existing route to root
.config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/'});
}]);