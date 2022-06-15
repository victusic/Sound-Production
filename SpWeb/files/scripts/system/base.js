$(document).ready( function(){
	$("#rg-phone").mask("8(999)999-99-99");
	$('#prod').bind('click', showLk3);
	$('#manag').bind('click', showLk4);
	$('#news').bind('click', showNews);
	$('#about').bind('click', showAbout);
	$('#coop').bind('click', showCooperation);
	$('#glav').bind('click', HideNav);
	$('#autorise-btn').bind('click', showautorizvis);
	$('#f-autorise').bind('click', showautorizvis);
	$('#autorise-close').bind('click', showautorizhid);
	$('#text_btnR').bind('click', formR);
	$('#text_btnV').bind('click', formV);
	$('#password-icon').bind('click', vispassword);

	function vispassword(){
		if ($('#login_password').attr('type') == 'password'){
			$('.password-icon').addClass('view');
			$('#login_password').attr('type', 'text');
		} 
		else {
			$('.password-icon').removeClass('view');
			$('#login_password').attr('type', 'password');
		}
	}

	/*function cookieclose(){
		$('#cookie_base').slideUp(475);
	}*/

	$('#about_cookie').bind('click', ShowBand);
	$('#cookies-band-close').bind('click', HideBand);
	
	//$('body:not(:has(.navbtn))').bind('click', showautorizvis);

	$('#prm').click(function(){
		let srnm = $('#rg-surname').val();
		let snm = $('#rg-name').val();
		let ptrnm = $('#rg-patronymic').val();
		let phn = $('#rg-phone').val();
		let mil = $('#rg-mail').val();
		let lgn = $('#rg-login').val();
		let psw = $('#rg-password').val();
		let pswd = $('#rg-password-double').val();
		let rll = $('#rg-roll').val();

		var regex = /[^\^A-Za-zА-Яа-я]/gi;

		let error_srnm = 0;
		let error_snm = 0;
		let error_ptrnm = 0;
		let error_phn = 0;
		let error_mil = 0;
		let error_lgn = 0;
		let error_psw = 0;
		let error_pswd = 0;
		let error_sogl = 0;
		let error_check = -10;

		//Фамилия
		if(regex.test(srnm) == true || srnm.length < 2){
			$('#rg_srnm').css('color', 'var(--errorfont)');
			error_srnm ++;
		}
		else{
			$('#rg_srnm').css('color', 'var(--ffont)');
			$('#rg_srnm').html('Фамилия');
			error_srnm = 0;
		}
		//Имя
		if(regex.test(snm) == true || snm.length < 2){
			$('#rg_snm').css('color', 'var(--errorfont)');
			error_snm++;
		}
		else{
			$('#rg_snm').css('color', 'var(--ffont)');
			$('#rg_snm').html('Имя');
			error_snm = 0;
		}
		//Отчество
		if(regex.test(ptrnm) == true || ptrnm.length < 2){
			$('#rg_ptrnm').css('color', 'var(--errorfont)');
			error_ptrnm++;
		}
		else{
			$('#rg_ptrnm').css('color', 'var(--ffont)');
			$('#rg_ptrnm').html('Отчество');
			error_ptrnm = 0;
		}
		//Номер телефона
		if(phn.length != 15){
			$('#rg_phn').css('color', 'var(--errorfont)');
			error_phn ++;
		}
		else{
			$('#rg_phn').css('color', 'var(--ffont)');
			$('#rg_phn').html('Номер');
			error_phn = 0;
		}
		//Почта
		if(mil.length < 7){
			$('#rg_mil').css('color', 'var(--errorfont)');
			error_mil++;
		}
		else{
			$('#rg_mil').css('color', 'var(--ffont)');
			$('#rg_mil').html('Почта');
			error_mil = 0;
		}
		//Логин
		if(lgn.length < 7){
			$('#rg_lgn').css('color', 'var(--errorfont)');
			error_lgn++;
		}
		else{
			$('#rg_lgn').css('color', 'var(--ffont)');
			$('#rg_lgn').html('Логин');
			error_lgn = 0;
		}
		//Пароль
		if(regex.test(psw) == false || psw.length < 9){
			$('#rg_psw').css('color', 'var(--errorfont)');
			error_psw++;
		}
		else{
			$('#rg_psw').css('color', 'var(--ffont)');
			$('#rg_psw').html('Пароль');
			error_psw = 0;
		}
		//Проверка пароля
		if (psw != pswd) {
			$('#rg_pswd').css('color', 'var(--errorfont)');
			$('#rg_pswd').html('Пароли не совпадают');
			error_pswd++;
		}
		else{
			$('#rg_pswd').css('color', 'var(--ffont)');
			$('#rg_pswd').html('Повторите пароль');
			error_pswd = 0;
		}

		if ($('#cbx').is(':checked')){
			$('#text-app').css('color', 'var(--ffont)');
			error_sogl = 0;
		} 
		else {
			$('#text-app').css('color', 'var(--errorfont)');
			error_sogl++;
		}

		error_check = error_sogl + error_pswd + error_psw + error_lgn + error_mil + error_phn + error_ptrnm + error_snm + error_srnm;

		if(error_check == 0){
			let rl = 0;
			if ($('#rg-roll').is(':checked')) {
				rl = 4;
			}
			else{
				rl = 3;
			}
			//alert();
			let dates = {
				Roll: rl,
				Surname: $('#rg-surname').val(),
				Name: $('#rg-name').val(),
				Patronymic: $('#rg-patronymic').val(),
				Mail: $('#rg-mail').val(),
				Phone: $('#rg-phone').val(),
				Login: $('#rg-login').val(),
				Password: $('#rg-password').val(),
				Logo: null,
				IsActivity: -1,
				CountAdvertisement: 0,
				RegistrationDate: new Date(),
			};
			let json = JSON.stringify(dates);
			console.log(json);

			$.ajax({
				type: 'POST',
				url: "files/php/registration.php",
				dataType: 'json',
				cache: false,
				data: {myData: json, Mail: $('#rg-mail').val(), Login: $('#rg-login').val()},
				success: rr()
			});
		}
	});
	function rr(){
		alert("Для продолжения регистрации пройдите по ссылке в письме, которое мы отправили вам на вашу почту: " + $('#rg-mail').val());
	}

	/*if(screen.width > 1500) { // Animate navigation
		$(document).ready(function() {
			$(window).scroll(function(){
				var distanceTop = $('#back').offset().top;
				if($(window).scrollTop() >= distanceTop)
				{
					$ ('#nav').attr ("id", "fixed");
				}
				else
				{
					$ ('#nav').attr ("id", "nav");
				}
			});
		});
	};*/

});

function ShowBand(){
	$('#cookies-band').slideDown(475);
	$("html,body").css("overflow","hidden");
	$('#fog').show();
	$('#cookie_base').slideUp(475);
}

function HideBand(){
	$('#cookies-band').slideUp(475);
	$("html,body").css("overflow","");
	$('#fog').hide();
	$('#cookie_base').slideDown(475);
}

function HideNav(){
	hideAbout();
	hideCooperation();
	hideNews();
}

function showLk3(){
	if ($('#ls3').is(':hidden')) {
		$('#ls3').slideDown(475);
		hideAbout();
		hideCooperation();
		hideNews();
	}
	else{hideLk3();}
}

function hideLk3(){
	if ($('#ls3').is(':visible')) {
		$('#ls3').slideUp(475);
	}
}

function showLk4(){
	if ($('#ls4').is(':hidden')) {
		$('#ls4').slideDown(475);
		hideAbout();
		hideCooperation();
		hideNews();
	}
	else{hideLk4();}
}

function hideLk4(){
	if ($('#ls4').is(':visible')) {
		$('#ls4').slideUp(475);
	}
}

function showNews(){
	if ($('#news_list').is(':hidden')) {
		$('#news_list').slideDown(475);
		hideAbout();
		hideCooperation();
		hideLk3();
		hideLk4();
	}
	else{hideNews();}
}

function hideNews(){
	if ($('#news_list').is(':visible')) {
		$('#news_list').slideUp(475);
	}
}

function showAbout(){
	if ($('#about_list').is(':hidden')) {
		$('#about_list').slideDown(475);
		hideNews();
		hideCooperation();
		hideLk3();
		hideLk4();
	}
	else{hideAbout();}
}

function hideAbout(){
	if ($('#about_list').is(':visible')) {
		$('#about_list').slideUp(475);
	}
}

function showCooperation(){
	if ($('#cooperation_list').is(':hidden')) {
		$('#cooperation_list').slideDown(475);
		hideNews();
		hideAbout();
		hideLk3();
		hideLk4();
	}
	else{hideCooperation();}
}

function hideCooperation(){
	if ($('#cooperation_list').is(':visible')) {
		$('#cooperation_list').slideUp(475);
	}
}

function showautorizvis() {
	window.scrollTo({
		top: 0,
		behavior: "smooth"
	});
	if ($('#autorise-block').is(':hidden')) {
		$('#autorise-block').css('height', '440px');
		$('#autorise-block').slideDown(475);
		$("html,body").css("overflow","hidden");
		$('#fog').show();
		formV();
		hideAbout();
		hideCooperation();
		hideNews();
	}
}

function showautorizhid() {
	if ($('#autorise-block').is(':visible')) {
		$('#autorise-block').slideUp(475);
		$("html,body").css("overflow","");
		$('#fog').hide();
	}
}

function formV(){
	$('#formV').show();
	$('#formR').hide();
	$('#text_btnR').css('color', 'var(--sfont)');
	$('#text_btnV').css('color', 'var(--ffont)');
	$('#autorise-block').css('height', '460px');
	$('#autorise-block').css('top', '180px');
}

function formR(){
	$('#formR').show();
	$('#formV').hide();
	$('#text_btnV').css('color', 'var(--sfont)');
	$('#text_btnR').css('color', 'var(--ffont)');
	$('#autorise-block').css('height', '965px');
	$('#autorise-block').css('top', '0px');
}

/*$('body').on('click', '.password-control', function(){
	if ($('#password-input').attr('type') == 'password'){
		$(this).addClass('view');
		$('#password-input').attr('type', 'text');
	} else {
		$(this).removeClass('view');
		$('#password-input').attr('type', 'password');
	}
	return false;
});*/