$(function(){
	let par = $("div#content p");
	console.log(par);
	let color = 'yellow';

	function colorize(){
		$(this).css('backgroundColor', color);
		color = (color == 'yellow') ? 'green' : 'yellow';
	}

	$('#content').on('click', 'p', colorize);

	// par.on('click', colorize);

	$("div#content").append('<p>New paragraph</p>')
					.append('<p>Newest paragraph</p>');

	// $('div#content p:eq(2), div#content p:eq(3)').on('click', colorize);

	let newPar = $('<p>').text('Last paragraph').hide();
	$("div#content").append(newPar);
	// newPar.slideDown(2000);

	$('#box')
			// .animate({
			// 	width: '+=50px',
			// }, 2000)
			// .animate({
			// 	height: '+=50px',
			// }, 2000);
			.animate({
				marginLeft: '+=50px',
			}, 2000)
			.animate({
				marginTop: '+=50px',
			}, 2000)
			.animate({
				marginLeft: '-=50px',
			}, 2000)
			.animate({
				marginTop: '-=50px',
			}, 2000);
});