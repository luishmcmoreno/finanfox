'use strict';

describe('Filter: bymonth', function () {

  // load the filter's module
  beforeEach(module('Finanfox'));

  // initialize a new instance of the filter before each test
  var bymonth;
  beforeEach(inject(function ($filter) {
    bymonth = $filter('bymonth');
  }));

  it('should return the input prefixed with "bymonth filter:"', function () {
    var text = 'angularjs';
    expect(bymonth(text)).toBe('bymonth filter: ' + text);
  });

});
