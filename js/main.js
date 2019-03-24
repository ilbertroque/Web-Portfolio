$(document).ready(function() {
	$('.splash-screen').removeClass('no-js');
	$('#menu-icon').click(function() {
		var path = $('#menu-icon i svg path');
		var title = $('#menu-icon i svg title');
		if ($(title).html() == 'menu-open') {
			$(title).html('menu-close');
			$(path).attr(
				'd',
				'M124,0A124,124,0,1,0,248,124,124,124,0,0,0,124,0Zm46.12,151.34a12.69,12.69,0,0,1,0,17.95l-.81.81a12.7,12.7,0,0,1-17.95,0l-27.57-27.58L96.21,170.1a12.7,12.7,0,0,1-17.95,0l-.81-.81a12.7,12.7,0,0,1,0-17.95L105,123.76,77.45,96.19a12.7,12.7,0,0,1,0-18l.81-.81a12.69,12.69,0,0,1,17.95,0L123.79,105l27.57-27.58a12.69,12.69,0,0,1,17.95,0l.81.81a12.69,12.69,0,0,1,0,18l-27.58,27.57Z'
			);
		} else {
			$(title).html('menu-open');
			$(path).attr(
				'd',
				'M124,0A124,124,0,1,0,248,124,124,124,0,0,0,124,0ZM58.83,79.19A12.69,12.69,0,0,1,71.52,66.5H176.05a12.69,12.69,0,0,1,12.69,12.69v1.15A12.69,12.69,0,0,1,176.05,93H71.52A12.69,12.69,0,0,1,58.83,80.34ZM189,169.31A12.69,12.69,0,0,1,176.31,182H71.79A12.69,12.69,0,0,1,59.1,169.31v-1.15a12.69,12.69,0,0,1,12.69-12.69H176.31A12.69,12.69,0,0,1,189,168.16Zm0-44.65a12.69,12.69,0,0,1-12.69,12.69H71.79A12.69,12.69,0,0,1,59.1,124.66v-1.15a12.69,12.69,0,0,1,12.69-12.69H176.31A12.69,12.69,0,0,1,189,123.51Z'
			);
		}
		$('#mobile-menu').toggleClass('mobile-active').toggleClass('mobile-inactive');
		$('#list').toggleClass('list-active');
	});
});

$(window).on('load', function() {
	setTimeout(function() {
		$('.splash-screen').addClass('splash-completed');
	}, 2300);
});

$(function() {
	var header = $('.header');
	$(window).scroll(function() {
		var scroll = $(window).scrollTop();

		if (scroll >= 100) {
			header.addClass('header-scrolled');
		} else {
			header.removeClass('header-scrolled');
		}
	});
});
