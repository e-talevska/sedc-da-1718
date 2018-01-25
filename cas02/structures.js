let resultDiv = document.getElementById("result");
let currentHour = (new Date()).getHours();

console.log(currentHour);

function checkHour(currentHour) {
	if (currentHour > 20) {
		resultDiv.innerHTML = "<h2>Good evening</h2>";
	} else if(currentHour > 12){
		resultDiv.innerHTML = "<h2>Good afternoon</h2>";
	} else {
		resultDiv.innerHTML = "<h2>Good morning</h2>";
	}
}

checkHour(currentHour);