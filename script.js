
var deviceWidth = document.body.clientWidth;


$(document).ready(function() {
	new ResponsiveMenuInit();
})

$(window).bind('resize orientationchange', function() {
	deviceWidth = document.body.clientWidth;
	new ResponsiveMenu();
});

var ResponsiveMenuInit = function(){
	$(".nav li a").each(function() {
		if ($(this).next().length > 0) {
			$(this).addClass("parent");
		};
	})	
	$("#toggle-menu").click(function(e) {
		e.preventDefault();
		$(this).toggleClass("active");
		$(".nav").toggle();
	});
	new ResponsiveMenu();
}
 
var ResponsiveMenu = function() {
	//Handle Resonsivness
	if (deviceWidth < 768) {
		$("#toggle-menu").css("display", "inline-block");
		var nav = $(".nav");
		($("#toggle-menu").hasClass("active") ? nav.show() : nav.hide());
		$(".nav li").unbind('mouseenter mouseleave');
		$(".nav li a.parent").unbind('click').bind('click', function(e) {	
			e.preventDefault();
			$(this).parent("li").toggleClass("hover");
		});
	} 
	else if (deviceWidth >= 768) {
		$("#toggle-menu").css("display", "none");
		$(".nav").show();
		$(".nav li").removeClass("hover").unbind('mouseenter mouseleave').bind('mouseenter mouseleave', function() {$(this).toggleClass('hover');});;
		$(".nav li a").unbind('click');
		 
	}
}

