$(document).ready( function(){
	$('#time').bind('click', theme);

	$('#cookies-close').bind('click', function(){
		$.ajax({
			url: '../php/cookie.php',
			type: 'POST',
			data: ({name: '1'}),
			dataType: 'text',
			success: cookieclose
		});
	});

	$('#btn_cookie').bind('click', function(){
		$.ajax({
			url: '../php/cookie.php',
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
			url: '../php/robot.php',
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
			url: '../php/themes.php',
			type: 'POST',
			data: ({theme: 'black'}),
			dataType: 'text',
		});
		
	} else {
		$.ajax({
			url: '../php/themes.php',
			type: 'POST',
			data: ({theme: 'white'}),
			dataType: 'text',
		});
	}
};

function cookieclose(){
	$('#cookie_base').slideUp(475);
}
