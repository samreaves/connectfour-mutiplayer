'use strict';


// Test the Test controller (Lane)
describe('Controller: HomeCtrl', function () {
  
  // Before each test, load the Encryption module
  beforeEach(module('connectfour.home'));

  // Initialize global test variables
  var HomeCtrl, rootScope, scope;
  
  // Before each test, load the controller, rootScope, and $timeout
  beforeEach(

  	inject(function ($controller, $rootScope, $injector) {
    scope = $rootScope.$new();
    
    // Initialize a new scope.
    HomeCtrl = $controller('HomeCtrl', {
      $scope: scope,
    });


  }));
 
   it('should expect Posts Controller to be defined', inject(function () {
    
    // Expect EncryptionCtrl to be defined
    expect(HomeCtrl).toBeDefined();

  }));
});