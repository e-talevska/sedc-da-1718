let box = document.getElementById('box');
console.log(box);

box.style.backgroundColor = '#'+Math.random().toString(16).substring(2, 8);
box.textContent = "Nova vrednost";