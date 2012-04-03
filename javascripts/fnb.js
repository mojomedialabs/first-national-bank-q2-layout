$(function() {
	$("#main-nav > ul > li").hover(
		function() {
			$(this).find("> ul").show();
			$(this).find("> .menu-image").show();
		}, function() {
			$(this).find("> ul").hide();
			$(this).find("> .menu-image").hide();
		}
	);

	$("#main-nav > ul > li > ul > li").hover(
		function() {
			$(this).find("> ul").show();
			if ($(this).find("> ul").length !== 0) {
				$(".menu-image").css("left", "+=200");
			}
		}, function() {
			$(this).find("> ul").hide();
			if ($(this).find("> ul").length !== 0) {
				$(".menu-image").css("left", "-=200");
			}
		}
	);

	$("#main-nav > ul > li > ul > li > ul > li").hover(
		function() {
			$(this).find("> ul").show();
			if ($(this).find("> ul").length !== 0) {
				$(".menu-image").css("left", "+=200");
			}
		}, function() {
			$(this).find("> ul").hide();
			if ($(this).find("> ul").length !== 0) {
				$(".menu-image").css("left", "-=200");
			}
		}
	);

	//Not really a fan of this. But I simply don't know any other way to have a left
	//floating div with a width in pixels and then a right floating div with a width
	//that spans all (or most) of the rest of the browser's width.
	//Media queries are just too clunky.
	$(window).resize(function(event) {
		$("#page").width($(window).width() - ($("#main-nav").width() + parseInt($("#main-nav").css("margin-left").replace("px", "")) + parseInt($("#main-nav").css("margin-right").replace("px", ""))) + "px");
	});

	$(window).resize();

	//$("#page").width($(window).width() - ($("#main-nav").width() + parseInt($("#main-nav").css("margin-left").replace("px", "")) + parseInt($("#main-nav").css("margin-right").replace("px", ""))) + "px");

});