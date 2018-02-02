/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

let score1Div = document.getElementById("score-0"); //element
let score2Div = document.getElementById("score-1"); //element
let currentScores = document.getElementsByClassName('player-current-score'); //array
let dice = document.querySelector('.dice');

console.dir(dice);

score1Div.textContent = 0;
score2Div.textContent = 0;

for(let i = 0; i < currentScores.length; i++) {
	//currentScores[i] is element (object)
	currentScores[i].textContent = 0;
}

dice.style.display = "none";
let random = Math.floor( Math.random() * 6  ) + 1;
// dice.src = "dice-"+random+".png";
// switch (random) {
// 	case 1:
// 		dice.src = "dice-1.png";
// 		break;
// 	case 2:
// 		dice.src = "dice-2.png";
// 		break;
// 	//...
// }

