
angular.module('app',[])
  .controller('catController', function($scope) {
    $scope.cat = "Garfield";
  })
  .filter('firstify', function() {
  return function(input) {
    return input[0];
  }
});
