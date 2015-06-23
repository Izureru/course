var a = 12;
alert(a);

var sayHello = function() {
	alert("Hello");
}

sayHello = function(){
	alert("goodbye");
}
sayHello();