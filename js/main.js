$(document).ready(function() {

$(".walled").wallpaper({
	source: {
		"fallback": "img/header_bg.jpg",
		"(min-width: 980px)": "img/header_bg.jpg"
	}
});

$("main").wallpaper({
	source: {
		"fallback": "img/main_bg.png",
		"(min-width: 980px)": "img/main_bg.png"
	}
});


$('.tooltip').tooltipster({
    trigger: 'click'
});



});