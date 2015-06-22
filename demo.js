angular.module('app', [])
	.controller('demoController', function($scope){
		$scope.name = 'Daniel';
		$scope.description = 'This is who I am';
		$scope.profile = 'dog.jpg'
		// $scope.sayHello = function(){
		// 	// alert('hello');
		// 	$scope.greeting = [
		// 		'hello',
		// 		$scope.name
		// 	].join(' ');
		// }
	})