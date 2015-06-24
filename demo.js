angular.module('app',['flickr'])
  .controller('demoController', function($scope, flickr) {

    $scope.vm = this;
    $scope.vm.loading = true;
  	flickr.getEvents().success(function(data){
  		$scope.flickr = data;
      $scope.vm.loading = false;
  	});
   })

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
    