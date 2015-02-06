'use strict';

describe('Controller: GastosCtrl', function () {

  // load the controller's module
  beforeEach(module('Finanfox'));

  var GastosCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    GastosCtrl = $controller('GastosCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
