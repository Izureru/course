angular.module('app', [])
  .controller('demoController', function($scope) {

  })
  .directive('outerDirective', function() {
    return {
      scope: {},
      // controller: function($scope) {
      //   $scope.test = 'outer';
      // },
      // transclude:true,
      // template: "I will Create a directive that will add a header and footer to any element. The title in the header will be bound to the isolate scope.",
      // // template: '<span ng-transclude></span>',
      // link: function(scope, element, attrs, controller, transclusion) {
      //   transclusion(scope, function(clone, scope) {
      //     element.append(clone);
      //   });
      // }
      transclude: true,
      template: "<div><header><h1>World of Template</h1></header><span ng-transclude></span></div>"
    }
  });
