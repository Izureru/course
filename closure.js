// var a = 12;
// alert(a);

// var sayHello = function() {
// 	// alert("Hello");
// 	a = 12;
// }

// // sayHello = function(){
// // 	alert("goodbye");
// // }
// sayHello();
// alert(a);

// var outer = function(){
// 	var a = 12;
// 	var inner = function(){
// 	alert(a);

// 	}
// 	inner();
// }

// outer();

var outer = function(){
	var a = 12;
	var inner = function(){
		alert(a);
	}
	return inner;
		
	}

var fnc = outer();
fnc();

