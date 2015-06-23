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

// var outer = function(){
// 	var a = 12;
// 	var inner = function(){
// 		alert(a);
// 	}
// 	return inner;
		
// 	}

// var fnc = outer();
// fnc();
var a = 10;
var x = (function() {
	console.log(a);
  (function() {
    var a = 12;
	console.log(a);
  })();
	console.log(a);
  return (function() {
    alert(a);
	console.log(a);
  })
})();
	console.log(a);
x();
	console.log(a);

