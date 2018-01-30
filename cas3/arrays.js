
function pecati() {
	console.log(student);
}

let emptyArray = [];
let student = ["SEDC", "Design", 1990];
console.log(student[2]);

let lastName = student[1]; //take the value with index 1
student[1] = "Web Design"; //change tha value with index 1
pecati();

console.log(student.length);

student[student.length] = ["HTML", "CSS"]; //add element at the end of the array

console.log(student.length);


student[student.length] = "Greetings";

pecati();

console.log(student[3][0]);

emptyArray.push("first element", "second element");

console.log(emptyArray);

let removedElement = emptyArray.shift();

console.log(emptyArray);
