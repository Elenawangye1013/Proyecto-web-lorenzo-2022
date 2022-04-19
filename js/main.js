$(window).on('load', function(){

	$('.botonmenu').on('click', function() {
			// alert('Holaaaaaa!');
			// $('header nav').fadeToggle(1000);

			$('.menuhorizontal').toggleClass('activo');
			$(this).toggleClass('activo');
			return false;
		}
	);

	$('.main-carousel').flickity({
		// options
		cellAlign: 'center',
		wrapAround: true,
		autoPlay: 5000,
        pageDots: false,
		arrowShape: { 
		  x0: 10,
		  x1: 70, y1: 40,
		  x2: 70, y2: 40,
		  x3: 30
		}
	});
    $('.photo-carousel').flickity({
		// options
		cellAlign: 'center',
		wrapAround: true,
        pageDots: false,
		autoPlay: 5000,
		arrowShape: { 
		  x0: 10,
		  x1: 70, y1: 40,
		  x2: 70, y2: 40,
		  x3: 30
		}
	});



});
