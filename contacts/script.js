function Contact(id, name, lastName, email) {
	this.id = id;
	this.firstName = name;
	this.lastName = lastName;
	this.email = email;
	this.showName = function(){
		return this.firstName + " " + this.lastName;
	}
}

// let app = {

// }

function Application(){
	let discardButton = document.getElementById('contacts-op-discard');
	let form = document.getElementById('contacts-form');
	let table = document.getElementById('contacts-table');
	let contactId = 1;
	let _self = this; //Application object

	this.init = function(){
		discardButton.addEventListener('click', function(){
			form.reset();
			form.id_entry.value = 0;
		});

		form.addEventListener('submit', function(event){
			event.preventDefault(); //prevent the form from submitting
			//here 'this' is the form element
			let id = this.id_entry.value;
			let firstName = this.first_name.value;
			let lastName = this.last_name.value;
			let email = this.email.value;
			// contact.showName()

			if (id === "0") {
				let contact = new Contact(contactId, firstName, lastName, email);
				contactId++;
				_self.createRow(contact);
			} else {
				let contact = new Contact(id, firstName, lastName, email);
				_self.editRow(contact);
			}

			//trigger discardButton click event handler to be executed
			discardButton.click();
		});
	}

	this.createRow = function(contact){
		// table.innerHTML += "<tr id='novRed'>ffd</tr>";
		// document.getElementById('novRed');
		let tr = document.createElement('tr');
		// tr.id = `row-${contact.id}`;
		let idAttr = document.createAttribute('id');
		idAttr.value = `row-${contact.id}`;
		tr.setAttributeNode(idAttr);

		let td1 = document.createElement('td');
		td1.innerHTML = contact.id;
		tr.appendChild(td1);

		let td2 = document.createElement('td');
		td2.textContent = contact.firstName;
		tr.appendChild(td2);

		let td3 = document.createElement('td');
		td3.textContent = contact.lastName;
		tr.appendChild(td3);

		let td4 = document.createElement('td');
		td4.textContent = contact.email;
		td4.addEventListener('click', function(){
			console.log(this);
		});
		tr.appendChild(td4);

		let td5 = document.createElement('td');
		td5.innerHTML = `<a id="edit-${contact.id}" href="#">edit</a> | <a id="delete-${contact.id}" href="#">delete</a>`;
		tr.appendChild(td5);

		table.appendChild(tr);

		//add event listener to the delete button added in the lines above
		document.getElementById(`delete-${contact.id}`)
				.addEventListener('click', function(e){
					e.preventDefault();
					//here 'this' is the 'delete' element
					//select the 'tr' element
					this.parentNode.parentNode.remove();
				});

		document.getElementById(`edit-${contact.id}`)
				.addEventListener('click', function(e){
					e.preventDefault();

					let tr = this.parentNode.parentNode;
					// console.log(tr.children)
					// document.getElementById('firstName').value = tr.children[1].textContent;
					form.id_entry.value = tr.children[0].textContent;
					form.first_name.value = tr.children[1].textContent;
					form.last_name.value = tr.children[2].textContent;
					form.email.value = tr.children[3].textContent;
				});
	}

	this.editRow = function(contact) {
		let tr = document.getElementById(`row-${contact.id}`);
		tr.children[1].textContent = contact.firstName;
		tr.children[2].textContent = contact.lastName;
		tr.children[3].textContent = contact.email;
	}
}

let app = new Application();
app.init();


function b() {

}
let a = function(){

}
a(); //The 'this' keyword is window
b(); //The 'this' keyword is window

let student = {
	sayHello: function(){

	}
}
student.sayHello(); //
new Contact();