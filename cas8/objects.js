let john = {
	name: "John",
	lastName: "Doe",
	yearOfBirth: 1980,
	sayHi: function(toWhom = 'everyone') {
		return `Hello ${toWhom}`;	
	}
};

let mike = {
	name: "Mike",
	lastName: "Smith",
	yearOfBirth: 1970,
	'!sdf': "das"
}

mike.status = 'married';
console.log( john.sayHi(mike.name)  );

let jane = new Object();
//let jane = {};
jane.name = "Jane";
//...
delete jane.name;
console.log(jane);
console.log(mike);


let niza = [];
let niza1 = new Array();

function Person(n, year){
	// console.log(this);
	this.name = n;
	this.lastName = "Petkovski";
	this.yearOfBirth = year;
	this.calculateAge = function(){
		return (new Date()).getFullYear() - this.yearOfBirth;
	}
}

let petko = new Person("Petko", 1990);
console.log(petko.calculateAge());
petko.yearOfBirth = 1991;
console.log(petko.calculateAge());

let zlatko = new Person("Zlatko", 1980);

console.log(petko, zlatko);

console.log(this);
function a() {
	console.log(this.abc);
}
var abc = "abc";
a();

