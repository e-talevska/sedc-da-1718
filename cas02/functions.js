console.log("before function definition");
let res = 2;
function zbir(a,b = 3) {
	// console.log(a,b);
	// let a = 2;
	// let b = 3;
	let res = a + b;
	// console.log(res);
	return res;
}

console.log("after function definition");
let x = zbir(1,2); //the result the functions returns
//if the function does not use the 'return' statement, the result will be undefined
console.log( zbir(x,4) );
console.log( zbir(3) );
zbir(4,5);

let resultDiv = document.getElementById("result");
function celToFahr(cel){ //cel => local variable
	return cel * 1.8 + 32;
}

function fahrToCel(fahr) {
	return (5/9) * (fahr - 32);
}

let cel = 100; //cel => global variable
let fahr = celToFahr(cel);

console.log("fahr:" + fahr);
resultDiv.innerHTML = `${cel} celsius to fahrenheit is ${fahr}`;

console.log (  fahrToCel(fahr)  );