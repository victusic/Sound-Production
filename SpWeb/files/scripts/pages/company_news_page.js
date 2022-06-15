$(document).ready( function(){

	var date_news4 = new Date(2022, 0, 3)
	var date_news3 = new Date(2022, 0, 1)
	var date_news2 = new Date(2021, 11, 15)
	var date_news1 = new Date(2021, 7, 29)

	$('#dt_text4').html(date_news4.toLocaleDateString());
	$('#dt_text3').html(date_news3.toLocaleDateString());
	$('#dt_text2').html(date_news2.toLocaleDateString());
	$('#dt_text1').html(date_news1.toLocaleDateString());

	$('#dt_text04').html(date_news4.toISOString());
	$('#dt_text03').html(date_news3.toISOString());
	$('#dt_text02').html(date_news2.toISOString());
	$('#dt_text01').html(date_news1.toISOString());

	$('#fback').bind('click', function(){
		//сброс фильтров через обновление страницы)))
		location.reload();
	})

	//Sort 
	let newsT1 = 0;
	let newsT2 = 0;
	let newsT3 = 0;
	let newsT4 = 0;
	let newsD1 = 0;
	let newsD2 = 0;
	let newsD3 = 0;
	let newsD4 = 0;

	//today
	$('.timeB1').bind('click', function(){
		cleanDates();
		var date_now = new Date();
		var date = new Date(date_now.setDate(date_now.getDate() - 0)).toLocaleDateString();
		$('.timeB1').css('background-color', 'var(--purple)');
		for (let i=1; 5>i; i++) {
			if ($('#dt_text' + i).html() == date) {
				if (i == 1) {newsD1 += 1}
				else if (i == 2) {newsD2 += 1}
				else if (i == 3) {newsD3 += 1}
				else {newsD4 += 1}
			}
			else{
				if (i == 1) {newsD1 -= 5}
				else if (i == 2) {newsD2 -= 5}
				else if (i == 3) {newsD3 -= 5}
				else {newsD4 -= 5}
			}
		}
		resize();
	})
	//yesterday
	$('.timeB2').bind('click', function(){
		cleanDates();
		var date_now = new Date();
		var date = new Date(date_now.setDate(date_now.getDate() - 1)).toISOString();
		$('.timeB2').css('background-color', 'var(--purple)');
		for (let i=1; 5>i; i++) {
			if ($('#dt_text0' + i).html() > date) {
				if (i == 1) {newsD1 += 1}
				else if (i == 2) {newsD2 += 1}
				else if (i == 3) {newsD3 += 1}
				else {newsD4 += 1}
			}
			else{
				if (i == 1) {newsD1 -= 5}
				else if (i == 2) {newsD2 -= 5}
				else if (i == 3) {newsD3 -= 5}
				else {newsD4 -= 5}
			}
		}
		resize();
	})
	//3 day ago
	$('.timeB3').bind('click', function(){
		cleanDates();
		var date_now = new Date();
		var date = new Date(date_now.setDate(date_now.getDate() - 3)).toISOString();
		$('.timeB3').css('background-color', 'var(--purple)');
		for (let i=1; 5>i; i++) {
			if ($('#dt_text0' + i).html() > date) {
				if (i == 1) {newsD1 += 1}
				else if (i == 2) {newsD2 += 1}
				else if (i == 3) {newsD3 += 1}
				else {newsD4 += 1}
			}
			else{
				if (i == 1) {newsD1 -= 5}
				else if (i == 2) {newsD2 -= 5}
				else if (i == 3) {newsD3 -= 5}
				else {newsD4 -= 5}
			}
		}
		resize();
	})
	//last week
	$('.timeB4').bind('click', function(){
		cleanDates();
		var date_now = new Date();
		var date = new Date(date_now.setDate(date_now.getDate() - 7)).toISOString();
		$('.timeB4').css('background-color', 'var(--purple)');
		for (let i=1; 5>i; i++) {
			if ($('#dt_text0' + i).html() > date) {
				if (i == 1) {newsD1 += 1}
				else if (i == 2) {newsD2 += 1}
				else if (i == 3) {newsD3 += 1}
				else {newsD4 += 1}
			}
			else{
				if (i == 1) {newsD1 -= 5}
				else if (i == 2) {newsD2 -= 5}
				else if (i == 3) {newsD3 -= 5}
				else {newsD4 -= 5}
			}
		}
		resize();
	})
	//last month
	$('.timeB5').bind('click', function(){
		cleanDates();
		var date_now = new Date();
		var date = new Date(date_now.setDate(date_now.getDate() - 30)).toISOString();
		$('.timeB5').css('background-color', 'var(--purple)');
		for (let i=1; 5>i; i++) {
			if ($('#dt_text0' + i).html() > date) {
				if (i == 1) {newsD1 += 1}
				else if (i == 2) {newsD2 += 1}
				else if (i == 3) {newsD3 += 1}
				else {newsD4 += 1}
			}
			else{
				if (i == 1) {newsD1 -= 5}
				else if (i == 2) {newsD2 -= 5}
				else if (i == 3) {newsD3 -= 5}
				else {newsD4 -= 5}
			}
		}
		resize();
	})
	//last year
	$('.timeB6').bind('click', function(){
		cleanDates();
		var date_now = new Date();
		var date = new Date(date_now.setDate(date_now.getDate() - 365)).toISOString();
		$('.timeB6').css('background-color', 'var(--purple)');
		for (let i=1; 5>i; i++) {
			if ($('#dt_text0' + i).html() > date) {
				if (i == 1) {newsD1 += 1}
				else if (i == 2) {newsD2 += 1}
				else if (i == 3) {newsD3 += 1}
				else {newsD4 += 1}
			}
			else{
				if (i == 1) {newsD1 -= 5}
				else if (i == 2) {newsD2 -= 5}
				else if (i == 3) {newsD3 -= 5}
				else {newsD4 -= 5}
			}
		}
		resize();
	})

	$('.tag_web').bind('click', function(){
		cleanTags();
		newsT1 += 1;
		newsT2 -= 5;
		newsT3 -= 5;
		newsT4 -= 5;
		$('.tag_web').css('background-color', 'var(--purple)');
		resize();
	})
	$('.tag_patсh').bind('click', function(){
		cleanTags();
		newsT1 += 1;
		newsT2 -= 5;
		newsT3 -= 5;
		newsT4 -= 5;
		$('.tag_patсh').css('background-color', 'var(--purple)');
		resize();
	})
	$('.tag_announce').bind('click', function(){
		cleanTags();
		newsT1 += 1;
		newsT2 -= 5;
		newsT3 -= 5;
		newsT4 += 1;
		$('.tag_announce').css('background-color', 'var(--purple)');
		resize();
	})
	$('.tag_tv').bind('click', function(){
		cleanTags();
		newsT1 += 1;
		newsT2 -= 5;
		newsT3 += 1;
		newsT4 += 1;
		$('.tag_tv').css('background-color', 'var(--purple)');
		resize();
	})
	$('.tag_Mobile').bind('click', function(){
		cleanTags();
		newsT1 += 1;
		newsT2 += 1;
		newsT3 -= 5;
		newsT4 -= 5;
		$('.tag_Mobile').css('background-color', 'var(--purple)');
		resize();
	})
	$('.tag_release').bind('click', function(){
		cleanTags();
		newsT1 += 1;
		newsT2 += 1;
		newsT3 += 1;
		newsT4 -= 5;
		$('.tag_release').css('background-color', 'var(--purple)');
		resize();
	})
	$('.tag_google').bind('click', function(){
		cleanTags();
		newsT1 -= 5;
		newsT2 += 1;
		newsT3 += 1;
		newsT4 -= 5;
		$('.tag_google').css('background-color', 'var(--purple)');
		resize();
	})
	$('.tag_apple').bind('click', function(){
		cleanTags();
		newsT1 -= 5;
		newsT2 += 1;
		newsT3 -= 5;
		newsT4 += 1;
		$('.tag_apple').css('background-color', 'var(--purple)');
		resize();
	})

	function resize(){
		$('.NoneBack').css('display', 'none');
		let rsize = 0;
		if (newsT4 + newsD4 > 0) {rsize ++;}
		else{$("#list4").hide();}
		if (newsT3 + newsD3 > 0) {rsize ++;}
		else{$("#list3").hide();}
		if (newsT2 + newsD2 > 0) {rsize ++;}
		else{$("#list2").hide();}
		if (newsT1 + newsD1 > 0) {rsize ++;}
		else{$("#list1").hide();}

		if (rsize == 1) {$('#back').css('height', '735px');$('#base').css('height', '1145px');}
		else if (rsize == 2) {$('#back').css('height', '875px');$('#base').css('height', '1285px');}
		else if (rsize == 3) {$('#back').css('height', '1285px');$('#base').css('height', '1695px');}
		else if (rsize == 4) {$('#back').css('height', '1695px');$('#base').css('height', '2105px');}
		else{
			$('#back').css('height', '735px');$('#base').css('height', '1145px');
			$('.NoneBack').css('display', 'block');
		}
	}

	function cleanTags(){
		newsT1 = 0;
		newsT2 = 0;
		newsT3 = 0;
		newsT4 = 0;
		$('.tag_web').css('background-color', 'var(--yellow)');
		$('.tag_patсh').css('background-color', 'var(--yellow)');
		$('.tag_announce').css('background-color', 'var(--yellow)');
		$('.tag_tv').css('background-color', 'var(--yellow)');
		$('.tag_Mobile').css('background-color', 'var(--yellow)');
		$('.tag_release').css('background-color', 'var(--yellow)');
		$('.tag_google').css('background-color', 'var(--yellow)');
		$('.tag_apple').css('background-color', 'var(--yellow)');
		$("#list1").show();
		$("#list2").show();
		$("#list3").show();
		$("#list4").show();
	}

	function cleanDates(){
		newsD1 = 0;
		newsD2 = 0;
		newsD3 = 0;
		newsD4 = 0;
		$('.timeB1').css('background-color', 'var(--blue)');
		$('.timeB2').css('background-color', 'var(--green)');
		$('.timeB3').css('background-color', 'var(--blue)');
		$('.timeB4').css('background-color', 'var(--green)');
		$('.timeB5').css('background-color', 'var(--blue)');
		$('.timeB6').css('background-color', 'var(--green)');
		$("#list1").show();
		$("#list2").show();
		$("#list3").show();
		$("#list4").show();
	}
	//

	$('#vc4').bind('click', function(){
		sessionStorage.news_head = $('#zg_text4').html();
		sessionStorage.news_text = '<img src="../img/company_news/tvos.png" style="width: 300px; float:right; margin-left: 20px;"/>Студия Krafton анонсировала выход приложения на TvOs по вселенной Playerunknown s Battlegrounds. Авторы продолжения королевской битвы перенесут игроков в недалекое будущее. Битвы будут происходить на новой карте «Трой» в 2051 году. Релиз PUBG: New State запланирован на мобильных устройствах с операционными системами iOS и Android в 2021 году.Разработчики рассказали, что новая часть франшизы должна расширить вселенную оригинальной игры и улучшить существующие механики по типу кастомизации оружия прямо на поле боя. Действие PUBG: New State происходит в 2051 году, а значит вооружение, транспорт и гаджеты будут соответствовать духу времени. По вселенной PUBG в следующем году выйдет еще одна игра. Всего планируется три проекта За новую игру отвечает PUBG Studio, которая разрабатывала и и поддерживала оригинальную королевскую битву для ПК и консолей. Разработчики планируют перенести в мобильный формат все особенности и механики геймплея из основной игры. Авторы PUBG Mobile, студия Tencent, не заявлена среди разработчиков. Все желающие уже могут оформить предварительную регистрацию в Google Play. В магазине приложений Apple ее обещают открыть позднее.';
		sessionStorage.news_img = '';
		sessionStorage.news_date = date_news4.toLocaleDateString();
	})
	$('#vc3').bind('click', function(){
		sessionStorage.news_head = $('#zg_text3').html();
		sessionStorage.news_text = '<img src="../img/company_news/androidtv.jpg" style="width: 300px; float:right; margin-left: 20px;"/>Студия Krafton анонсировала выход приложения на Android Tv по вселенной Playerunknowns Battlegrounds. Авторы продолжения королевской битвы перенесут игроков в недалекое будущее. Битвы будут происходить на новой карте «Трой» в 2051 году. Релиз PUBG: New State запланирован на мобильных устройствах с операционными системами iOS и Android в 2021 году. Разработчики рассказали, что новая часть франшизы должна расширить вселенную оригинальной игры и улучшить существующие механики по типу кастомизации оружия прямо на поле боя. Действие PUBG: New State происходит в 2051 году, а значит вооружение, транспорт и гаджеты будут соответствовать духу времени По вселенной PUBG в следующем году выйдет еще одна игра. Всего планируется три проекта За новую игру отвечает PUBG Studio, которая разрабатывала и и поддерживала оригинальную королевскую битву для ПК и консолей. Разработчики планируют перенести в мобильный формат все особенности и механики геймплея из основной игры. Авторы PUBG Mobile, студия Tencent, не заявлена среди разработчиков. Все желающие уже могут оформить предварительную регистрацию в Google Play. В магазине приложений Apple ее обещают открыть позднее.';
		sessionStorage.news_img = '';
		sessionStorage.news_date = date_news3.toLocaleDateString();
	})
	$('#vc2').bind('click', function(){
		sessionStorage.news_head = $('#zg_text2').html();
		sessionStorage.news_text = '<img src="../img/company_news/mobile.png" style="width: 300px; float:right; margin-left: 20px;"/>Студия Krafton анонсировала релиз на мобильных платформах. Авторы продолжения королевской битвы перенесут игроков в недалекое будущее. Битвы будут происходить на новой карте «Трой» в 2051 году. Релиз PUBG: New State запланирован на мобильных устройствах с операционными системами iOS и Android в 2021 году. Разработчики рассказали, что новая часть франшизы должна расширить вселенную оригинальной игры и улучшить существующие механики по типу кастомизации оружия прямо на поле боя. Действие PUBG: New State происходит в 2051 году, а значит вооружение, транспорт и гаджеты будут соответствовать духу времени. По вселенной PUBG в следующем году выйдет еще одна игра. Всего планируется три проекта За новую игру отвечает PUBG Studio, которая разрабатывала и и поддерживала оригинальную королевскую битву для ПК и консолей. Разработчики планируют перенести в мобильный формат все особенности и механики геймплея из основной игры. Авторы PUBG Mobile, студия Tencent, не заявлена среди разработчиков. Все желающие уже могут оформить предварительную регистрацию в Google Play. В магазине приложений Apple ее обещают открыть позднее.';
		sessionStorage.news_img = '';
		sessionStorage.news_date = date_news2.toLocaleDateString();
	})
	$('#vc1').bind('click', function(){
		sessionStorage.news_head = $('#zg_text1').html();
		sessionStorage.news_text = '<img src="../img/company_news/reliase.png" style="width: 300px; float:right; margin-left: 20px;"/>Студия Krafton анонсировала релиз проекта. Авторы продолжения королевской битвы перенесут игроков в недалекое будущее. Битвы будут происходить на новой карте «Трой» в 2051 году. Релиз PUBG: New State запланирован на мобильных устройствах с операционными системами iOS и Android в 2021 году. Разработчики рассказали, что новая часть франшизы должна расширить вселенную оригинальной игры и улучшить существующие механики по типу кастомизации оружия прямо на поле боя. Действие PUBG: New State происходит в 2051 году, а значит вооружение, транспорт и гаджеты будут соответствовать духу времени. По вселенной PUBG в следующем году выйдет еще одна игра. Всего планируется три проекта За новую игру отвечает PUBG Studio, которая разрабатывала и и поддерживала оригинальную королевскую битву для ПК и консолей. Разработчики планируют перенести в мобильный формат все особенности и механики геймплея из основной игры. Авторы PUBG Mobile, студия Tencent, не заявлена среди разработчиков. Все желающие уже могут оформить предварительную регистрацию в Google Play. В магазине приложений Apple ее обещают открыть позднее.';
		sessionStorage.news_img = '';
		sessionStorage.news_date = date_news1.toLocaleDateString();
	})
});