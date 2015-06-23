// var Pet = function(){
// 	this.legs = 0;
// 	this.ears = 2;
// }

// Pet.prototype.ears= 6;

// var Dog = function(){
// 	Dog.prototype = new Pet();
// }
// Pet.prototype.ears = 6;
// var kitten = new Pet();
// 	alert(kitten.ears);
// // kitten.legs = 2;


// alert(kitten.legs);
// var a = ""

// var car = {
// 	colour:"yellow",
// 	speed:0,
// 	speedUp: function(){
// 		this.speed += 10;
// 	}
// }

var Vehicle = function(){
		this.latitude = 1234,
		this.longtitude = 2345,
	moveNorth = function(){
		this.longtitude += 1;
	},
	moveSouth = function(){
		this.longtitude -= 1;
	},
	moveEast = function(){
		this.latitude += 1;
	},
	moveWest = function(){
		this.latitude -= 1;
	}

};

var car = new Vehicle();

car.changeOil = function(){
	alert('oil is changed');
}

alert(car.latitude);
car.moveWest;
alert(car.latitude);
// var speedUp = car.speedUp;
// var speed = 0;
// speedUp();
// car.speedUp();