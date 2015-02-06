'use strict';

describe('Service: financas', function () {

  // load the service's module
  beforeEach(module('Finanfox'));

  // instantiate service
  var financas;
  beforeEach(inject(function (_financas_) {
    financas = _financas_;
  }));

  it('should do something', function () {
    expect(!!financas).toBe(true);
  });

});
