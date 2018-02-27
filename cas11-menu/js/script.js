$(function(){
	let activeMenuItem = $('#toggle');
	let menuList = $('ul#lista');
	// let menuItems = $('ul#lista>li');
	let menuItems = menuList.children('li');
	// let menuLinks = $('ul#lista>li>a');
	let menuLinks = menuItems.children('a');
	let width = $(menuItems[0]).width();

	function closeMenu(){
		menuItems.each(function(i, item){
			$(this).css({
				top: ((i+1)*4) + 'px',
				zIndex: -i,
				width: ($(this).width() - 3*(i+1)) + 'px',
				marginLeft: 3/2*(i+1) + 'px'
			});
		});

	}
	closeMenu();

	activeMenuItem.on('mousedown', function(e){
		e.preventDefault();
		//toggleClass will add the class if not present, otherwise will remove it
		$(this).toggleClass('active');

		//hasClass checks if the element has the given class
		if( $(this).hasClass('active') ) {
			// console.log(menuItems);
			// for (var i = 0; i < menuItems.length; i++) {
			// 	$(menuItems[i]).css('top', ((i+1)*60)+'px');
			// }

			menuItems.each(function(i, item){
				// console.log(item);
				// console.log(item == this);
				// item.style.top = ((i+1)*60)+'px';

				$(item).css('top', ((i+1)*60)+'px')
						.css('width', width)
					   .css('marginLeft', '0px');
			});

		} else {
			closeMenu();
		}
	});

	menuItems.on('click', function(){
		menuItems.removeClass('active');
		$(this).addClass('active');

		let label = $(this).children('a').attr('data-label');
		let icon = $(this).find('i').attr('class');

		activeMenuItem.children('i').attr('class', icon);
		activeMenuItem.children('span.label-active').text(label);
		activeMenuItem.removeClass('active');
		closeMenu();
	})
});

// let a = [1,2,3];

// a.forEach(function(item, index){

// });

// for (var i = 0; i < 2; i+=2) {
// 	a[i]
// }