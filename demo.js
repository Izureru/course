angular.module('app', [])
	.controller('demoController', function($scope){
		$scope.name = 'Daniel'
		$scope.sayHello = function(){
			alert('hello');
		}
	})