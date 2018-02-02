
let a = 1; //globalna promenliva
var b = 2; //globalna promenliva
let c = 3; //globalna promenliva
function hello() {
	let greeting = 'Hello!'; //localna promenliva
	var greeting2 = "World"; //localna promenliva
	console.log(greeting); //ok
	console.log(greeting2); //ok
	c = 1; //using the global variable
}
hello();
console.log(greeting); //not ok
console.log(greeting2); //not ok

if (true) {
	let z = 1; //block promenliva, only if
	var y = 2; //globalna promenliva
	console.log(z); //ok
}

console.log(z); //not ok
console.log(y); //ok!!