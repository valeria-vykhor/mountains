$(document).ready(function() {
	
	$(document).foundation();

	$(".owl-carousel").owlCarousel({
		loop:true,
		margin:15,
		dots:true,
		dotsEach: true,
		autoplay:true,
		autoplayTimeout:2000,
		autoplayHoverPause:false,
		responsive:{
			0:{
				items:1,
				dots:true
			},
			400:{
				items:2,
				dots:true
			},
			700:{
				items:3,
				dots:true
			},
			1050:{
				items:4,
				dots:true
			},
			1400:{
				items:5,
				dots:true
			}
		}
	});

	$(".fancybox").fancybox({
		wrapCSS: "styled-fancybox",
		loop: false,
		nextSpeed: "normal",
		prevSpeed: "normal"
	});
});