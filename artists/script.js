$(function(){
	let app = {
		init: function(){
			let errorMessageDiv = $('#error-message');
			let artistSimilarDiv = $('#artist-similar');
			artistSimilarDiv.accordion({
								heightStyle: "content"
							});

			$('#get-artist').on('submit', function(event){
				event.preventDefault();
				// $("#artist-input");
				// $(this.artist);
				// $(this).find('input[name="artist"]');
				let artistName = $(this.artist).val().trim();
				errorMessageDiv.text("");

				if (artistName == "") {
					errorMessageDiv.text('Please enter artist name');
				} else {
					console.log('before ajax');
					$.ajax({
						type: "GET",
						url: 'http://ws.audioscrobbler.com/2.0',
						//send information to the server
						data: {
							method: 'artist.getInfo',
							artist: artistName,
							api_key: '91dcbbe75821abf1c3c43e4120573e99',
							format: 'json'
						},
						success: function(response){
							// console.log('ajax success');
							console.log(response);

							if(response.error != undefined) {
								errorMessageDiv.text(response.message);
							} else {
								let artist = response.artist;
								$("#artist-name").html('<h2>'+ artist.name +'</h2>');

								// $("#artist-image").html(`<img src="${ artist.image[2]['#text'] }" >`)
								let sliderDiv = $('<div class="artist-slider">');
								artist.image.forEach(function(item, index){
									$("<div>").append(`<img src="${item['#text']}" >`)
											   .appendTo(sliderDiv);
								});
								$("#artist-image").html(sliderDiv);
								sliderDiv.bxSlider();

								artistSimilarDiv.html('');
								let similarArtists = artist.similar.artist; //array
								similarArtists.forEach(function(item, index){
									// console.log(item, index);
									artistSimilarDiv.append( $("<h3>").text(item.name) );
									$("<div>").append( `<img src="${item.image[1]['#text']}">` )
											  .append(`<p><a href="${item.url}">${item.url}</a></p>`)
											  .appendTo(artistSimilarDiv);
								});

								artistSimilarDiv.accordion('refresh');
							}
						},
						error: function(){
							console.log('ajax error');
						},
						complete: function(){
							console.log('ajax completed');
						}
						
					});

					$.ajax({
						type: "GET",
						url: 'http://ws.audioscrobbler.com/2.0',
						//send information to the server
						data: {
							method: 'artist.gettopalbums',
							artist: artistName,
							api_key: '91dcbbe75821abf1c3c43e4120573e99'
						},
						success: function(response){
							console.log(response);
							let albums = response.getElementsByTagName('album');
							for(let i = 0; i < albums.length; i++) {
								console.log(albums[i].getElementsByTagName('name')[0].textContent);
							}
						}
					});


					console.log('after ajax');
					console.log('after ajax');

					console.log('after ajax');
					console.log('after ajax');

				}
			});
		},
		name: "Last FM"
	};

	app.init();
	console.log(app.name);
});