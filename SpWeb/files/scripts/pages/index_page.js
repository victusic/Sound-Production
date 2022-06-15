$(document).ready( function(){
	$('#time').bind('click', theme);

	$('#cookies-close').bind('click', function(){
		$.ajax({
			url: 'files/php/cookie.php',
			type: 'POST',
			data: ({name: '1'}),
			dataType: 'text',
			success: cookieclose
		});
	});

	$('#btn_cookie').bind('click', function(){
		$.ajax({
			url: 'files/php/cookie.php',
			type: 'POST',
			data: ({name: '2'}),
			dataType: 'text',
			success: cookieclose
		});
	});

	$('#lg_bl').bind('click', function(){
		if ($('#cbxlg').is(':checked')){
			$('#lgbutton').removeAttr('disabled');
		}
		else {
			$('#lgbutton').attr('disabled', 'disabled'); 
		}
		$.ajax({
			url: 'files/php/robot.php',
			type: 'POST',
			data: ({name: 'yes'}),
			dataType: 'text',
		});
	});
});

function cookieclose(){
	$('#cookie_base').slideUp(475);
}

function theme(){
	if(document.documentElement.hasAttribute("theme")){
		document.documentElement.removeAttribute("theme");
	}
	else{
		document.documentElement.setAttribute("theme", "dark");
	}
	if ($('#time').is(':checked')){
		$.ajax({
			url: 'files/php/themes.php',
			type: 'POST',
			data: ({theme: 'black'}),
			dataType: 'text',
		});
		
	} else {
		$.ajax({
			url: 'files/php/themes.php',
			type: 'POST',
			data: ({theme: 'white'}),
			dataType: 'text',
		});
	}
};



jQuery(document).ready(function(){
	initSlider();
	function initSlider() {
		$(".owl-carousel").owlCarousel({
			items: 1,
			loop: true,
			animateOut: 'fadeOut',
			autoHeight: false,
			autoplay: true,
			autoplayTimeout: 6000,
			autoplayHoverPause: true,
			dots: true,
			lazyLoad: true,
			onDrag: stopSlider
		});
	}

	function stopSlider(event) {
		var heroPeepsSlider = $('#myCarousel');  
		heroPeepsSlider.trigger('stop.owl.autoplay'); 
	}

	function startProgressBar() {
		$(".slide-progress").css({
			width: "100%",
			transition: "width 6000ms"
		});
	}

	function resetProgressBar() {
		$(".slide-progress").css({
			width: 0,
			transition: "width 0s"
		});
	}


});


jQuery(document).keyup(function (event) {   
 
	var heroPeepsSlider = jQuery("#myCarousel");

	heroPeepsSlider.trigger('stop.owl.autoplay');

	if (event.keyCode == 37) 
	{
		heroPeepsSlider.trigger('prev.owl.carousel');
	} 
	else if (event.keyCode == 39) 
	{
		heroPeepsSlider.trigger('next.owl.carousel');
	}
});