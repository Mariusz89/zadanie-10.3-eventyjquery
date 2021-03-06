$(document).ready(function(){
	var carouselList = $("#carousel ul"),
		carousel = $('#carousel'),
		interval;

	interval = setInterval(nextSlide, 3000);

	function nextSlide(){
		carouselList.animate({'marginLeft':-400}, 500, moveFirstSlide);
    }

    function prevSlide() {
    	moveLastSlide();
    	carouselList.animate({'marginLeft': 0}, 500);	
    }

	function moveFirstSlide(){
		var firstItem = carouselList.find("li:first");
		var lastItem = carouselList.find("li:last");

		lastItem.after(firstItem);
		carouselList.css({marginLeft:0});
	}

	function moveLastSlide() {
		var firstItem = carouselList.find("li:first");
		var lastItem = carouselList.find("li:last");

		firstItem.before(lastItem);
		carouselList.css({marginLeft: -400});
	}

	$("#left").click(function(){
		prevSlide();
	});

	$("#right").click(function(){
		nextSlide();
	});

	carousel.hover(
		function() {
			clearInterval(interval);
		},
		function() {
			interval = setInterval(nextSlide, 3000);
		}
	);
});





  
























