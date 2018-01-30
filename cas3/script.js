let userValue = prompt('Please enter your gender');

function colorBody(color) {
	document.body.style.backgroundColor = color;
}

// if (userValue === 'f' || userValue === 'female') {
// 	colorBody("red");
// 	// document.body.style.backgroundColor = "red";
// } else if (userValue === 'm' || userValue === 'male') {
// 	colorBody("blue");
// 	// document.body.style.backgroundColor = "blue";
// } else {
// 	colorBody("gray");
// 	// document.body.style.backgroundColor = "gray";
// }

switch(userValue){
	case 'f':
	case 'female':
		colorBody("red");
		break;
	case 'm':
	case 'male':
		colorBody("blue");
		break;
	default:
		colorBody("gray");
		break;
}

let a = 12;

if (a > 18) {
	console.log("true");
} else {
	console.log("false");
}

(a > 18) ? console.log("true") :
 ( (a > 16) ? console.log("driving") : console.log("false") );