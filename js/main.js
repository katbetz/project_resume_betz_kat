$(document).ready(function() {
// Adds wallpaper plugin to the header and footer
$(".walled").wallpaper({
	source: {
		"fallback": "img/header_bg.jpg",
		"(min-width: 980px)": "img/header_bg.jpg"
	}
});

// Adds wallpaper plugin to the main
$("main").wallpaper({
	source: {
		"fallback": "img/main_bg.png",
		"(min-width: 980px)": "img/main_bg.png"
	}
});

// Adds tooltip plugin to the tooltip class
$('.tooltip').tooltipster({
    trigger: 'click'
});



});