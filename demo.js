angular.module('app',['github'])
  .controller('demoController', function($scope, helloService, github) {
  	// helloService.sayHello();
  	github.getEvents().success(function(data){
  		$scope.github = data;
  	});
   })

  angular.module('hello', [])
  .service('helloService', function(){
  	var service = {
  		sayHello: function() {
  			alert('Hey There!');
  		}
  	}
  	return service;
  })

  angular.module('github', [])
  .service('github', function($http){
  	var service = {
  		getEvents:function(){
  			var url = 'https://';
  			return $http.json(url);
  		}
  	}
  })
    