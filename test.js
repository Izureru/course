describe('Unit: myController', function() {

  beforeEach(module('app'));

  var ctrl, scope;
  beforeEach(inject(function($controller, $rootScope) {
    scope = $rootScope.$new();
    ctrl = $controller('cityController', {
      $scope: scope
    });
  }));

  it('cityController instantiates cities', function() {
    expect(scope.cities).toBeDefined();
  });
});