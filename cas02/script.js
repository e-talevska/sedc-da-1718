
let windowWidth = window.innerWidth; //window width in px
let windowHeight = window.innerHeight; //window height in px

let elementWidth = 100; //element width in px
let elementHeight = 50; //element height in px

let centerElementX = windowWidth/2 - elementWidth/2;
let centerElementY = windowHeight/2 - elementHeight/2;

console.log("Coordinates: (" + centerElementX + "," + centerElementY + ")");
console.log(`Coordinates: (${centerElementX},${centerElementY})`);


let resultDiv = document.getElementById("result");

let distanceKm = 168;
let consumption = 5.7;
let pricePerL = 64;

let totalLiters = (distanceKm * consumption)/100;
let totalPrice = totalLiters * pricePerL;

// console.log(resultDiv.innerHTML);

resultDiv.innerHTML = resultDiv.innerHTML + `<h3>Total price is ${totalPrice} mkd</h3>`;

let a = 1;
let b = 2;

a = a + b;