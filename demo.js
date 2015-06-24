angular.module('app',['hello'])
  .controller('demoController', function(helloService) {
  	helloService.sayHello();
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
    