/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

let scores, roundScore, activePlayer;
let score1Div = document.getElementById("score-0"); //element
let score2Div = document.getElementById("score-1"); //element
let currentScores = document.getElementsByClassName('player-current-score'); //array
let dice = document.querySelector('.dice');
let btnHold = document.querySelector('.btn-hold');
let btnRoll = document.querySelector('.btn-roll');
let btnNew = document.querySelector('.btn-new');


console.dir(dice);

score1Div.textContent = 0;
score2Div.textContent = 0;

for(let i = 0; i < currentScores.length; i++) {
	//currentScores[i] is element (object)
	currentScores[i].textContent = 0;
}
dice.style.display = "none";
activePlayer = 0;
roundScore = 0;
scores = [0,0];

// function rollDice(){
// 	console.log('rollDice function called');
// }
function nextPlayer() {
	//round score of current active player set to zero (reset)
	document.getElementById(`current-${activePlayer}`).textContent = 0;
	//remove class 'active' of current active player's panel
	document.querySelector(`.player-${activePlayer}-panel`).classList.remove('active');

	//set new active player
	activePlayer = (activePlayer === 0) ? 1 : 0;
	// if (activePlayer === 0) {
	// 	activePlayer = 1;
	// } else {
	// 	activePlayer = 0;
	// }
	//add class 'active' to the new active player's panel
	document.querySelector(`.player-${activePlayer}-panel`).classList.add('active');

	roundScore = 0;
}


let rollDice = function(){
	// console.log('rollDice function called');
	//1 to 6
	let random = Math.floor( Math.random() * 6  ) + 1;

	if (random !== 1) {
		dice.src = `dice-${random}.png`;
		dice.style.display = 'inline-block';
		roundScore += random;

		if (activePlayer === 0) {
			//when left panel user is active
			document.getElementById(`current-0`).textContent = roundScore;
		} else {	
			//when right panel user is active
			document.getElementById(`current-1`).textContent = roundScore;
		}

		// document.getElementById(`current-${activePlayer}`).textContent = roundScore;
	} else {
		nextPlayer();
	}
}


// if (false) {
// 	rollDice();
// }

// console.log( "fdsdfsdwe".toUpperCase() + 21312  )

btnRoll.addEventListener('click', rollDice);



// switch (random) {
// 	case 1:
// 		dice.src = "dice-1.png";
// 		break;
// 	case 2:
// 		dice.src = "dice-2.png";
// 		break;
// 	//...
// }

