'use strict';

describe('Controller: ReceitasCtrl', function () {

  // load the controller's module
  beforeEach(module('Finanfox'));

  var ReceitasCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ReceitasCtrl = $controller('ReceitasCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
