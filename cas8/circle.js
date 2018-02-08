function Circle(r){
	this.radius = r;
	this.calculatePerimeter = function(){
		return 2 * Math.PI * this.radius;
	}
	this.calculateArea = function(){
		return Math.pow(this.radius, 2) * Math.PI;
	}
}

let resultDiv = document.getElementById('res');
document.getElementById("form")
		.addEventListener('submit', function(event){
			event.preventDefault();
			// console.log(this); //'this' is the form element
			// console.log(this.radius); //the input element with attribute name="radius"
			let radius =  Number(this.radius.value);

			if (Number.isNaN(radius)) {
				res.textContent = "Bad value!";
			} else {
				let circle1 = new Circle(radius);
				// let circle2 = new Circle(radius-1);
				// let circle3 = new Circle(radius+1);
				res.textContent = `The perimiter for circle with radius ${circle1.radius} is ${circle1.calculatePerimeter()} and the area is ${circle1.calculateArea()}`;
			}
		});

//this should be happening on form submit...
//selecting the dropdown element
let genderDropdown = document.getElementById('gender');
console.log(genderDropdown.options); //all available options - ARRAY!!
//each element in the array is option element (so another object)

//we need to find the selected option
console.log(genderDropdown.selectedIndex); //will give me the index of the selected option from the genderDropdown.options array

console.log(genderDropdown.options[genderDropdown.selectedIndex]); //will give me the selecte option element (only one element - object)

console.log(genderDropdown.options[genderDropdown.selectedIndex].value); //from that element I'm getting the value. The value is the 'value' attribute if set otherwise is the text between the option tags