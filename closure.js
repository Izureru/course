// var beaver = ['furry', 'chewy', 'taily', 'industrious']

(function(){
var beaver = {
	personality: 'scary',
	sayHello : function(){
		alert('hello');
	},
	wood:{
		pine:{
			quantity: 'loads'
		},
		cedar:{
			quantity:'not much'
		}
	}
}
alert(beaver['wood'].pine['quantity']);
})();
// var action = 'sayHello';

// beaver.sayHello();
// beaver['personality'] = 'scary';

// beaver['sayHello'] = function(){
// 	alert('hello!')
// };

// alert(beaver['sayHello']());

