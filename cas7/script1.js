let leftDiv = document.getElementById('left');
let rightDiv = document.getElementById('right');
let btn = document.getElementById('btn');

let activeDiv = 'left';
rightDiv.classList.add('hidden');

btn.addEventListener('click', function(){
	document.getElementById(`${activeDiv}`).classList.add('hidden');
	activeDiv = (activeDiv === 'left') ? 'right' : 'left';
	document.getElementById(`${activeDiv}`).classList.remove('hidden');
					  //get the first char and make it capital   //get the rest of the chars
	btn.textContent = activeDiv.substr(0,1).toUpperCase() + activeDiv.substr(1);
});