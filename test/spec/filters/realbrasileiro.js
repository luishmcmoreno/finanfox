'use strict';

describe('Filter: realbrasileiro', function () {

  // load the filter's module
  beforeEach(module('Finanfox'));

  // initialize a new instance of the filter before each test
  var realbrasileiro;
  beforeEach(inject(function ($filter) {
    realbrasileiro = $filter('realbrasileiro');
  }));

  it('should return the input prefixed with "realbrasileiro filter:"', function () {
    var text = 'angularjs';
    expect(realbrasileiro(text)).toBe('realbrasileiro filter: ' + text);
  });

});
