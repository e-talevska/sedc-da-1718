(function() {
	let box = document.getElementById('box');
	let link = document.getElementById('link');	

	// function a(v){

	// }
	// a(box);

	box.addEventListener('click', function(e){
		// e.stopPropagation();

		if (e.target !== link) {
			box.style.backgroundColor = "#efefef";
		}

		console.log(e,"box clicked");
	}, true);

	link.addEventListener('click', function(e){
		e.preventDefault();
		console.log("link clicked");
	});
})();