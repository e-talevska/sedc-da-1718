
function calculateZodiac(year) {
	console.log((year-4) % 12);
	switch( (year-4) % 12 ) {
		case 0:
			return 'Rat';
			break;
		case 1:
			return 'Ox';
			break;
		//...
		default:
			return 'No match';
	}
}

let year = Number(prompt("Enter year of birth")); //number or NaN

// Number.isNaN(2) //false
// Number.isNaN(NaN) //true


// !Number.isNaN(year)
if (Number.isNaN(year) == false) {
	let sign = calculateZodiac(year);
	console.log(sign);
}

let loggedIn = true;

let role = "admin";

if (loggedIn == true && role == 'admin') {
	//do smth

} else if (loggedIn == true && role == 'student') {

}

if (loggedIn == true) {

	if (role == "admin") {

	} 

	 if (role == "student") {

	}

}

let money = 70;

if (money > 50) {
//
} else if (money >= 20) {
//
}

