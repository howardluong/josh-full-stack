
var timedShowPage;
var activePage;


function loadPage() {
    timedShowPage = setTimeout(hidePreload, 2000);
    activePage = setTimeout(showPage, 2900);
}

function hidePreload() {
  document.getElementById("preload").style.opacity = 0;
}

function showPage() {
	document.getElementById("mainContent").style.opacity = 1;
	document.getElementById("mainContent").style.display = 'block';
	document.getElementById('preload').style.display = 'none';
	// document.getElementById('preload').removeProperty('height');
}


(function ($) {
  $(document).ready(function(){

	$('#mainContent').hide();
    $('.fly-in').removeClass('hidden');

	$('.navbar').hide();

	var  navBar = $("#navbarSticky");
    var sticky = "navbarScrolled";
    header = $('header').height();

	$(window).scroll(function() {
	  if($(this).scrollTop() > header ) {
	    navBar.addClass(sticky);
	    $('.navbar').fadeIn();
	  } else {
	    navBar.removeClass(sticky);
	    $('.navbar').fadeOut();
	  }
	});

	var $animation_elements = $('.animation-element');
	var $window = $(window);
	
	$window.on('scroll resize', check_if_in_view);
	$window.trigger('scroll');

	function check_if_in_view() {
  		var window_height = $window.height();
  		var window_top_position = $window.scrollTop();
  		var window_bottom_position = (window_top_position + window_height);
 
  		$.each($animation_elements, function() {
    		var $element = $(this);
    		var element_height = $element.outerHeight();
    		var element_top_position = $element.offset().top;
    		var element_bottom_position = (element_top_position + element_height);
 
    	//check to see if this current container is within viewport
    		if ((element_bottom_position >= window_top_position) &&
        	(element_top_position <= window_bottom_position)) {
      			$element.addClass('in-view');
    		} else {
      			$element.removeClass('in-view');
    		}
  		});
	}
	$('#navLogo').click(function(){
		$('html, body').animate({
			scrollTop: $('#mainContent').offset().top
		}, 600);
	});

	$("#about").click(function() {
    	$('html, body').animate({
        	scrollTop: $("#aboutSection").offset().top
    	}, 600);
	});

	$("#portfolio").click(function() {
    	$('html, body').animate({
        	scrollTop: $("#projects").offset().top
    	}, 600);
	});

	$('#contact').click(function(){
		$('html, body').animate({
			scrollTop: $('#contactSection').offset().top
		}, 600);
	});

});
  }(jQuery));

