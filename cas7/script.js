let leftDiv = document.getElementById('left');
let rightDiv = document.getElementById('right');
let btn = document.getElementById('btn');

let activeDiv = 0;
rightDiv.style.display = "none";

// let a = function(){

// }
// a();

function showHide() {
	
}

// function addEventListener(event, funk) {
// 	funk();
// }


btn.addEventListener('click', function(){
	activeDiv = (activeDiv === 0) ? 1 : 0;

	if (activeDiv == 0) {
		leftDiv.style.display = "block";
		rightDiv.style.display = "none";
		btn.textContent = "Left";
	} else {
		rightDiv.style.display = "block";
		leftDiv.style.display = "none";
		btn.textContent = "Right";
	}
});