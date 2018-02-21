$(function(){
	let result =  $('#result');
	console.log(  $('#result') );
	console.log(  result );

	let menuLinks = $('ul>li>a');
	let menuItems = $('ul>li');

	document.getElementById('result').innerHTML;

	menuItems.hide()
			 .delay(1000)
			 .fadeIn(1000);

	console.log(menuLinks.text());
	// menuLinks.html('<b>Hello</b>');

	menuLinks.html(function(){
		//'this' is one element from the selection (javascript object)
		//$(this) is one element from the selection (jQuery object)
		console.log( $(this).html() );
		return "<b>" + this.innerHTML  + "</b>";
	});

	$('#result').replaceWith('<h1>Hello everyone!</h1>');

	let newMenuItem = $("<li>");
	let newMenuLink = $("<a>");

	//set the html for the line
	//set the href attribute
	newMenuLink.html('<b>Mission</b>')
			   .attr('href', '#');

   //add the link to the list item
    newMenuItem.append(newMenuLink);

    //add the list item to the list
    // $("ul").append(newMenuItem);
    //or
    $("li:last").after(newMenuItem);

    let newDiv = $('<div>').html('<h3>Div title</h3>').attr('class', 'dynamic-div');
    $('body').append(newDiv);

    // $('div.dynamic-div h3')
    let newPar = $('<p>').text('Lorem bla bla bla');
    newDiv.append(newPar);
    // newPar.css('background-color', '#e3e3e3');
    // newDiv.addClass('green');

    let newPar1 = $('<p>').text('Lorem bla bla bla').appendTo(newDiv);
    let newPar2 = $('<p>').text('Lorem bla bla bla');
    let newPar3 = $('<p>').text('Lorem bla bla bla');
    // newDiv.append(newPar1).append(newPar2).append(newPar3);

    $('div.dynamic-div>p:odd').css('background-color', 'green');
    $('div.dynamic-div>p:even').css('background-color', 'yellow')

    //read attribute value
    newDiv.attr('class')
    newDiv.css('background-color')

    newDiv.css({
    	backgroundColor: 'red',
    	fontWeight: "bold"
    });

    $('li:eq(0)').attr('class','bla hello');

    //for each element in selection
    //call the function passed as argument to each()
    let html = '';
    menuLinks.each(function(index, item){
    	// console.log(index, item);
    	// $(item) or $(this) - element from the selection
    	// this.innerHTML
    	html += $(this).html();
    });
});