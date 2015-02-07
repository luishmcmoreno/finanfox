'use strict';

describe('Controller: DespesasCtrl', function () {

  // load the controller's module
  beforeEach(module('Finanfox'));

  var DespesasCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    DespesasCtrl = $controller('DespesasCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
