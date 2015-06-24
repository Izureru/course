angular.module('app',['flickr', 'cats'])



angular.module('cats', [])
  .directive('catDirective', function(){
    var directive = {
      scope:true,
      controller: 'catController',
      restrict:'AEC',
      template: [
        "<ul>",
          '<li ng-repeat = "flicks in flickr.items">',
            '<pre>',
          '<img ng-src="{{flicks.media.m}}"/>',
        '</pre>',
          '</li>',
        '</ul>"'
      ].join('')
    }
    return directive;
  })
  .controller('catController', function($scope, flickr) {
    $scope.vm = this;
    $scope.vm.loading = true;
    flickr.getEvents().success(function(data){
      $scope.flickr = data;
      $scope.vm.loading = false;
    });
  });

angular.module('flickr', [])
  .service('flickr', function($http){
    var search = 'cats';
	  var service = {
		getEvents:function(){
  			var url = [
            'http://api.flickr.com/services/feeds/photos_public.gne?tags=',
            search,
            '&tagmode=any&format=json&jsoncallback=JSON_CALLBACK'
        ].join('');
  			return $http.jsonp(url);
  		}
  	}
    return service;
  });
    