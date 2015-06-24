angular.module('app',[])
  .controller('demoController', function(helloService) {
  	helloService.sayHello();
    })
  .service('helloService', function(){
  	var service = {
  		sayHello: function() {
  			alert('Hey There!');
  		}
  	}
  	return service;
  })
    