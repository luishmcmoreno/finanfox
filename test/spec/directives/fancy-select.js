'use strict';

describe('Directive: fancy-select', function () {

  // load the directive's module
  beforeEach(module('Finanfox'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<fancy-select></fancy-select>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the fancy-select directive');
  }));
});
