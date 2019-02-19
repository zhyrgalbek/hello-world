$(function(){
	var $hamburger = $(".hamburger");
	$hamburger.on("click", function(e){
		$hamburger.toggleClass("is-active");
		$(".header-menu").toggleClass("header-menu_show");
	});
	$(".owl-carousel").owlCarousel({
		items: 1,
		loop: true,
		nav: true
	});
	$(".nav").on("click", function(){
		$(".drops-1").fadeToggle(500);
	});
	$(document).mouseup(function(e){
		var div = $(".nav");
		if(!div.is(e.target) && $(".drops-1").has(e.target).length === 0){
			$(".drops-1").hide();
		}
	});
	$(".Category-tab").show();
	$(".by-category").click(function(e){
		e.preventDefault();
		var tab = $(".Category-tab");
		tab.fadeToggle();
		$(".treugolnik").toggleClass("rotate");
	});
	tab($(".tab_content"),$(".tab_content:first"),$(".application_tab li:first a"), "tab_active",$(".application_tab li a"));
	tab($(".feature-info"), $(".feature-info:nth-child(2)"),$(".Category-tab li:nth-child(2) a"), "tab_active", $(".Category-tab li a"));

	function tab(content, first, firstA, tab_active, liA){
		content.hide();
		first.show();
		firstA.addClass(tab_active);
		$(liA).click(function(e){
			e.preventDefault();
			liA.removeClass(tab_active);
			$(this).addClass(tab_active);
			content.hide();
			var selectTab = $(this).attr("href");
			$(selectTab).show();
		});
	}
});