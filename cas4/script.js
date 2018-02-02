let x = 11;

while (x <= 10) {
	console.log(x);
	x = x + 1;
	break;
}

let student = ['John', 'Doe', 1989, "single"];

// student[0]
// student[1]
// student[2]

let i = 0;
while(i <= student.length - 1) {
	console.log(student[i]);
	i++;
}



i = 1;
let num, max = -Infinity;
let a = 1;
// while (i <= 10) {
	
// 	num = Number(prompt('Enter value'));
// 	if (num > max) {
// 		max = num; // the entered value becomes new max
// 	}
// 	i++;
// }

console.log(a); //

let resultDiv = document.getElementById("result");
// resultDiv.innerHTML = `Max value is ${max}`;
// resultDiv.innerHTML = 'Max value is ' + max;



i = 101;
let sum = 0;
while(i <= 150) {
	sum += Math.pow(i, 2);
	i++;
}

resultDiv.innerHTML += sum;

// for (i = 0; i < 150; i +=2) {

// }




// let broj = 22312312312;

// while (true) {
// 	let lastNumber = broj % 10;
// 	resultDiv.innerHTML += `<p>${lastNumber}</p>`;
// 	broj = parseInt(broj/10);

// 	if (broj === 0) {
// 		break;
// 	}
// }