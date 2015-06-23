angular.module('app', ['items']);

angular.module('items', [])
  .controller('itemController', function($scope, $http) {
    $scope.search = "cats";
    $scope.getFlickr = function(){

        var url = [
            'http://api.flickr.com/services/feeds/photos_public.gne?tags=',
            $scope.search,
            '&tagmode=any&format=json&jsoncallback=JSON_CALLBACK'
        ].join('');
        $http.jsonp(url).success(function(data) {
      $scope.items = data;
    })
};
$scope.$watch('search', $scope.getFlickr );
});