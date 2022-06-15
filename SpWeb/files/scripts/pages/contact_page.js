$(document).ready( function(){
	$('#time').bind('click', theme);
	var jsmail = "<?php echo $_SESSION['login'] ?>";
	$('#paste_mail_pm').bind('click', function(){
		$('#in2').val(sessionStorage.getItem('PasteMail'));
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

	for (var i=1; i<16; i++) {
		//Large
		if (i < 3) {
			let ide = "#quad" + i;
			let size = (Math.floor(Math.random() * (250 - 150 + 1)) + 150);
			$(ide).width(size);
			$(ide).height(size);
			let top = (Math.floor(Math.random() * (230 - 0 + 1)) + 0);
			$(ide).css('top', top + 'px');
		}
		//Small
		else if (i > 8) {
			let ide = "#quad" + i;
			let size = (Math.floor(Math.random() * (100 - 50 + 1)) + 50);
			$(ide).width(size);
			$(ide).height(size);
			let top = (Math.floor(Math.random() * (380 - 0 + 1)) + 0);
			$(ide).css('top', top + 'px');
		}
		//Medium
		else{
			let ide = "#quad" + i;
			let size = (Math.floor(Math.random() * (150 - 100 + 1)) + 100);
			$(ide).width(size);
			$(ide).height(size);
			let top = (Math.floor(Math.random() * (330 - 0 + 1)) + 0);
			$(ide).css('top', top + 'px');
		}
		let ide = "#quad" + i;
		let color = (Math.floor(Math.random() * (4 - 1 + 1)) + 1);
		if (color == 1) {$(ide).css('background-color', 'var(--purple)');}
		else if (color == 2) {$(ide).css('background-color', 'var(--pink)');}
		else if (color == 3) {$(ide).css('background-color', 'var(--green)');}
		//else if (color == 4) {$(ide).css('background-color', 'var(--blue)');}
		else if (color == 4){$(ide).css('background-color', 'var(--yellow)');}
		let fright = (Math.floor(Math.random() * (800 - 1 + 1)) + 1);
		$(ide).css('right', fright + 'px');
	}
	
	$('#sub').bind('click', function () {
		let wrng = 0;
		if ($('#in1').val() == '') {
			$('#tx1').css('color', 'var(--errorfont)');
			wrng++;
		}
		if ($('#in2').val() == '') {
			$('#tx2').css('color', 'var(--errorfont)');
			wrng++;
		}
		if ($('#in3').val() == '') {
			$('#tx3').css('color', 'var(--errorfont)');
			wrng++;
		}
		if ($('#in4').val() == '') {
			$('#tx4').css('color', 'var(--errorfont)');
			wrng++;
		}

		if (wrng == 0) {
			let dates = {
				Name: $('#in1').val(),
				Mail: $('#in2').val(),
				Title: $('#in3').val(),
				Text: $('#in4').val(),
			};
			let json = JSON.stringify(dates);
			$.ajax({
				type: 'POST',
				url: "../php/post-mail.php",
				dataType: 'json',
				cache: false,
				data: {data: json},
				success: open()
			});
		}
		function open() {
		 	$('#mbox-code').css('display', 'block');
			$("html,body").css("overflow","hidden");
			$('#fog').show();
			//alert(result);
			$('#mbox-exit').bind('click', function(){
				$('#mbox-code').css('display', 'none');
				$("html,body").css("overflow","");
				$('#fog').hide();
			});
			$('#mbox-btn').bind('click', function(){
				$('#mbox-code').css('display', 'none');
				$("html,body").css("overflow","");
				$('#fog').hide();
			});
		}
	});



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

});

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
