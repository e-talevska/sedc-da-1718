let john = {
	name: "John",
	lastName: "Doe",
	yearOfBirth: 1980,
	sayHi: function(){
		console.log('Hi Everyone!');
	},
	12: 12
};

john.sayHi();
console.log(john.name);
john.name = "JOHN"; //modify existing property
john.status = "single"; //add new property
console.log(john[12]);
