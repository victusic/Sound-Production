$(document).ready( function(){

	var date_news14 = new Date(2022, 0, 5);
	var date_news13 = new Date(2021, 11, 27);
	var date_news12 = new Date(2021, 11, 26);
	var date_news11 = new Date(2021, 11, 21);
	var date_news10 = new Date(2021, 11, 16);
	var date_news9 = new Date(2021, 11, 15);
	var date_news8 = new Date(2021, 11, 6);
	var date_news7 = new Date(2021, 11, 4);
	var date_news6 = new Date(2021, 10, 28);
	var date_news5 = new Date(2021, 10, 22);
	var date_news4 = new Date(2021, 10, 10);
	var date_news3 = new Date(2021, 10, 5);
	var date_news2 = new Date(2021, 10, 1);
	var date_news1 = new Date(2021, 9, 29);

	$('#dt_text14').html(date_news14.toLocaleDateString());
	$('#dt_text13').html(date_news13.toLocaleDateString());
	$('#dt_text12').html(date_news12.toLocaleDateString());
	$('#dt_text11').html(date_news11.toLocaleDateString());
	$('#dt_text10').html(date_news10.toLocaleDateString());
	$('#dt_text9').html(date_news9.toLocaleDateString());
	$('#dt_text8').html(date_news8.toLocaleDateString());
	$('#dt_text7').html(date_news7.toLocaleDateString());
	$('#dt_text6').html(date_news6.toLocaleDateString());
	$('#dt_text5').html(date_news5.toLocaleDateString());
	$('#dt_text4').html(date_news4.toLocaleDateString());
	$('#dt_text3').html(date_news3.toLocaleDateString());
	$('#dt_text2').html(date_news2.toLocaleDateString());
	$('#dt_text1').html(date_news1.toLocaleDateString());

	$('#dt_text014').html(date_news14.toISOString());
	$('#dt_text013').html(date_news13.toISOString());
	$('#dt_text012').html(date_news12.toISOString());
	$('#dt_text011').html(date_news11.toISOString());
	$('#dt_text010').html(date_news10.toISOString());
	$('#dt_text09').html(date_news9.toISOString());
	$('#dt_text08').html(date_news8.toISOString());
	$('#dt_text07').html(date_news7.toISOString());
	$('#dt_text06').html(date_news6.toISOString());
	$('#dt_text05').html(date_news5.toISOString());
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
	let newsT5 = 0;
	let newsT6 = 0;
	let newsT7 = 0;
	let newsT8 = 0;
	let newsT9 = 0;
	let newsT10 = 0;
	let newsT11 = 0;
	let newsT12 = 0;
	let newsT13 = 0;
	let newsT14 = 0;
	let newsD1 = 0;
	let newsD2 = 0;
	let newsD3 = 0;
	let newsD4 = 0;
	let newsD5 = 0;
	let newsD6 = 0;
	let newsD7 = 0;
	let newsD8 = 0;
	let newsD9 = 0;
	let newsD10 = 0;
	let newsD11 = 0;
	let newsD12 = 0;
	let newsD13 = 0;
	let newsD14 = 0;

	//today
	$('.timeB1').bind('click', function(){
		cleanDates();
		var date_now = new Date();
		var date = new Date(date_now.setDate(date_now.getDate() - 0)).toLocaleDateString();
		$('.timeB1').css('background-color', 'var(--purple)');
		for (let i=1; 15>i; i++) {
			if ($('#dt_text' + i).html() == date) {
				if (i == 1) {newsD1 += 1}
				else if (i == 2) {newsD2 += 1}
				else if (i == 3) {newsD3 += 1}
				else if (i == 4) {newsD4 += 1}
				else if (i == 5) {newsD5 += 1}
				else if (i == 6) {newsD6 += 1}
				else if (i == 7) {newsD7 += 1}
				else if (i == 8) {newsD8 += 1}
				else if (i == 9) {newsD9 += 1}
				else if (i == 10) {newsD10 += 1}
				else if (i == 11) {newsD11 += 1}
				else if (i == 12) {newsD12 += 1}
				else if (i == 13) {newsD13 += 1}
				else {newsD14 += 1}
			}
			else{
				if (i == 1) {newsD1 -= 5}
				else if (i == 2) {newsD2 -= 5}
				else if (i == 3) {newsD3 -= 5}
				else if (i == 4) {newsD4 -= 5}
				else if (i == 5) {newsD5 -= 5}
				else if (i == 6) {newsD6 -= 5}
				else if (i == 7) {newsD7 -= 5}
				else if (i == 8) {newsD8 -= 5}
				else if (i == 9) {newsD9 -= 5}
				else if (i == 10) {newsD10 -= 5}
				else if (i == 11) {newsD11 -= 5}
				else if (i == 12) {newsD12 -= 5}
				else if (i == 13) {newsD13 -= 5}
				else {newsD14 -= 5}
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
		for (let i=1; 15>i; i++) {
			if ($('#dt_text0' + i).html() > date) {
				if (i == 1) {newsD1 += 1}
				else if (i == 2) {newsD2 += 1}
				else if (i == 3) {newsD3 += 1}
				else if (i == 4) {newsD4 += 1}
				else if (i == 5) {newsD5 += 1}
				else if (i == 6) {newsD6 += 1}
				else if (i == 7) {newsD7 += 1}
				else if (i == 8) {newsD8 += 1}
				else if (i == 9) {newsD9 += 1}
				else if (i == 10) {newsD10 += 1}
				else if (i == 11) {newsD11 += 1}
				else if (i == 12) {newsD12 += 1}
				else if (i == 13) {newsD13 += 1}
				else {newsD14 += 1}
			}
			else{
				if (i == 1) {newsD1 -= 5}
				else if (i == 2) {newsD2 -= 5}
				else if (i == 3) {newsD3 -= 5}
				else if (i == 4) {newsD4 -= 5}
				else if (i == 5) {newsD5 -= 5}
				else if (i == 6) {newsD6 -= 5}
				else if (i == 7) {newsD7 -= 5}
				else if (i == 8) {newsD8 -= 5}
				else if (i == 9) {newsD9 -= 5}
				else if (i == 10) {newsD10 -= 5}
				else if (i == 11) {newsD11 -= 5}
				else if (i == 12) {newsD12 -= 5}
				else if (i == 13) {newsD13 -= 5}
				else {newsD14 -= 5}
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
		for (let i=1; 15>i; i++) {
			if ($('#dt_text0' + i).html() > date) {
				if (i == 1) {newsD1 += 1}
				else if (i == 2) {newsD2 += 1}
				else if (i == 3) {newsD3 += 1}
				else if (i == 4) {newsD4 += 1}
				else if (i == 5) {newsD5 += 1}
				else if (i == 6) {newsD6 += 1}
				else if (i == 7) {newsD7 += 1}
				else if (i == 8) {newsD8 += 1}
				else if (i == 9) {newsD9 += 1}
				else if (i == 10) {newsD10 += 1}
				else if (i == 11) {newsD11 += 1}
				else if (i == 12) {newsD12 += 1}
				else if (i == 13) {newsD13 += 1}
				else {newsD14 += 1}
			}
			else{
				if (i == 1) {newsD1 -= 5}
				else if (i == 2) {newsD2 -= 5}
				else if (i == 3) {newsD3 -= 5}
				else if (i == 4) {newsD4 -= 5}
				else if (i == 5) {newsD5 -= 5}
				else if (i == 6) {newsD6 -= 5}
				else if (i == 7) {newsD7 -= 5}
				else if (i == 8) {newsD8 -= 5}
				else if (i == 9) {newsD9 -= 5}
				else if (i == 10) {newsD10 -= 5}
				else if (i == 11) {newsD11 -= 5}
				else if (i == 12) {newsD12 -= 5}
				else if (i == 13) {newsD13 -= 5}
				else {newsD14 -= 5}
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
		for (let i=1; 15>i; i++) {
			if ($('#dt_text0' + i).html() > date) {
				if (i == 1) {newsD1 += 1}
				else if (i == 2) {newsD2 += 1}
				else if (i == 3) {newsD3 += 1}
				else if (i == 4) {newsD4 += 1}
				else if (i == 5) {newsD5 += 1}
				else if (i == 6) {newsD6 += 1}
				else if (i == 7) {newsD7 += 1}
				else if (i == 8) {newsD8 += 1}
				else if (i == 9) {newsD9 += 1}
				else if (i == 10) {newsD10 += 1}
				else if (i == 11) {newsD11 += 1}
				else if (i == 12) {newsD12 += 1}
				else if (i == 13) {newsD13 += 1}
				else {newsD14 += 1}
			}
			else{
				if (i == 1) {newsD1 -= 5}
				else if (i == 2) {newsD2 -= 5}
				else if (i == 3) {newsD3 -= 5}
				else if (i == 4) {newsD4 -= 5}
				else if (i == 5) {newsD5 -= 5}
				else if (i == 6) {newsD6 -= 5}
				else if (i == 7) {newsD7 -= 5}
				else if (i == 8) {newsD8 -= 5}
				else if (i == 9) {newsD9 -= 5}
				else if (i == 10) {newsD10 -= 5}
				else if (i == 11) {newsD11 -= 5}
				else if (i == 12) {newsD12 -= 5}
				else if (i == 13) {newsD13 -= 5}
				else {newsD14 -= 5}
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
		for (let i=1; 15>i; i++) {
			if ($('#dt_text0' + i).html() > date) {
				if (i == 1) {newsD1 += 1}
				else if (i == 2) {newsD2 += 1}
				else if (i == 3) {newsD3 += 1}
				else if (i == 4) {newsD4 += 1}
				else if (i == 5) {newsD5 += 1}
				else if (i == 6) {newsD6 += 1}
				else if (i == 7) {newsD7 += 1}
				else if (i == 8) {newsD8 += 1}
				else if (i == 9) {newsD9 += 1}
				else if (i == 10) {newsD10 += 1}
				else if (i == 11) {newsD11 += 1}
				else if (i == 12) {newsD12 += 1}
				else if (i == 13) {newsD13 += 1}
				else {newsD14 += 1}
			}
			else{
				if (i == 1) {newsD1 -= 5}
				else if (i == 2) {newsD2 -= 5}
				else if (i == 3) {newsD3 -= 5}
				else if (i == 4) {newsD4 -= 5}
				else if (i == 5) {newsD5 -= 5}
				else if (i == 6) {newsD6 -= 5}
				else if (i == 7) {newsD7 -= 5}
				else if (i == 8) {newsD8 -= 5}
				else if (i == 9) {newsD9 -= 5}
				else if (i == 10) {newsD10 -= 5}
				else if (i == 11) {newsD11 -= 5}
				else if (i == 12) {newsD12 -= 5}
				else if (i == 13) {newsD13 -= 5}
				else {newsD14 -= 5}
			}
		}
		resize();
		//alert($('#dt_text' + i).html());
	})
	//last year
	$('.timeB6').bind('click', function(){
		cleanDates();
		var date_now = new Date();
		var date = new Date(date_now.setDate(date_now.getDate() - 365)).toISOString();
		$('.timeB6').css('background-color', 'var(--purple)');
		for (let i=1; 15>i; i++) {
			if ($('#dt_text0' + i).html() > date) {
				if (i == 1) {newsD1 += 1}
				else if (i == 2) {newsD2 += 1}
				else if (i == 3) {newsD3 += 1}
				else if (i == 4) {newsD4 += 1}
				else if (i == 5) {newsD5 += 1}
				else if (i == 6) {newsD6 += 1}
				else if (i == 7) {newsD7 += 1}
				else if (i == 8) {newsD8 += 1}
				else if (i == 9) {newsD9 += 1}
				else if (i == 10) {newsD10 += 1}
				else if (i == 11) {newsD11 += 1}
				else if (i == 12) {newsD12 += 1}
				else if (i == 13) {newsD13 += 1}
				else {newsD14 += 1}
			}
			else{
				if (i == 1) {newsD1 -= 5}
				else if (i == 2) {newsD2 -= 5}
				else if (i == 3) {newsD3 -= 5}
				else if (i == 4) {newsD4 -= 5}
				else if (i == 5) {newsD5 -= 5}
				else if (i == 6) {newsD6 -= 5}
				else if (i == 7) {newsD7 -= 5}
				else if (i == 8) {newsD8 -= 5}
				else if (i == 9) {newsD9 -= 5}
				else if (i == 10) {newsD10 -= 5}
				else if (i == 11) {newsD11 -= 5}
				else if (i == 12) {newsD12 -= 5}
				else if (i == 13) {newsD13 -= 5}
				else {newsD14 -= 5}
			}
		}
		resize();
	})

	$('.tag_great_britain').bind('click', function(){
		cleanTags();
		newsT1 += 1;
		newsT2 -= 5;
		newsT3 -= 5;
		newsT4 += 1;
		newsT5 += 1;
		newsT6 -= 5;
		newsT7 += 1;
		newsT8 -= 5;
		newsT9 -= 5;
		newsT10 -= 5;
		newsT11 -= 5;
		newsT12 -= 5;
		newsT13 -= 5;
		newsT14 -= 5;
		$('.tag_great_britain').css('background-color', 'var(--purple)');
		resize();
	})

	$('.tag_usa').bind('click', function(){
		cleanTags();
		newsT1 -= 5;
		newsT2 += 1;
		newsT3 -= 5;
		newsT4 -= 5;
		newsT5 -= 5;
		newsT6 -= 5;
		newsT7 -= 5;
		newsT8 -= 5;
		newsT9 -= 5;
		newsT10 += 1;
		newsT11 -= 5;
		newsT12 -= 5;
		newsT13 -= 5;
		newsT14 -= 5;
		$('.tag_usa').css('background-color', 'var(--purple)');
		resize();
	})

	$('.tag_sweden').bind('click', function(){
		cleanTags();
		newsT1 -= 5;
		newsT2 -= 5;
		newsT3 += 1;
		newsT4 -= 5;
		newsT5 -= 5;
		newsT6 -= 5;
		newsT7 -= 5;
		newsT8 -= 5;
		newsT9 -= 5;
		newsT10 -= 5;
		newsT11 -= 5;
		newsT12 -= 5;
		newsT13 -= 5;
		newsT14 -= 5;
		$('.tag_sweden').css('background-color', 'var(--purple)');
		resize();
	})

	$('.tag_korea').bind('click', function(){
		cleanTags();
		newsT1 -= 5;
		newsT2 -= 5;
		newsT3 -= 5;
		newsT4 -= 5;
		newsT5 -= 5;
		newsT6 -= 5;
		newsT7 -= 5;
		newsT8 -= 5;
		newsT9 -= 5;
		newsT10 -= 5;
		newsT11 -= 5;
		newsT12 -= 5;
		newsT13 += 1;
		newsT14 -= 5;
		$('.tag_korea').css('background-color', 'var(--purple)');
		resize();
	})

	$('.tag_russia').bind('click', function(){
		cleanTags();
		newsT1 -= 5;
		newsT2 -= 5;
		newsT3 -= 5;
		newsT4 -= 5;
		newsT5 -= 5;
		newsT6 += 1;
		newsT7 -= 5;
		newsT8 += 1;
		newsT9 -= 5;
		newsT10 += 1;
		newsT11 += 1;
		newsT12 += 1;
		newsT13 -= 5;
		newsT14 += 1;
		$('.tag_russia').css('background-color', 'var(--purple)');
		resize();
	})

	$('.tag_group').bind('click', function(){
		cleanTags();
		newsT1 -= 5;
		newsT2 -= 5;
		newsT3 -= 5;
		newsT4 -= 5;
		newsT5 -= 5;
		newsT6 -= 5;
		newsT7 -= 5;
		newsT8 -= 5;
		newsT9 -= 5;
		newsT10 -= 5;
		newsT11 -= 5;
		newsT12 -= 5;
		newsT13 += 1;
		newsT14 -= 5;
		$('.tag_group').css('background-color', 'var(--purple)');
		resize();
	})

	$('.tag_album').bind('click', function(){
		cleanTags();
		newsT1 += 1;
		newsT2 += 1;
		newsT3 += 1;
		newsT4 -= 5;
		newsT5 += 1;
		newsT6 -= 5;
		newsT7 -= 5;
		newsT8 -= 5;
		newsT9 -= 5;
		newsT10 -= 5;
		newsT11 -= 5;
		newsT12 -= 5;
		newsT13 -= 5;
		newsT14 += 1;
		$('.tag_album').css('background-color', 'var(--purple)');
		resize();
	})

	$('.tag_song').bind('click', function(){
		cleanTags();
		newsT1 -= 5;
		newsT2 -= 5;
		newsT3 -= 5;
		newsT4 += 1;
		newsT5 -= 5;
		newsT6 -= 5;
		newsT7 -= 5;
		newsT8 -= 5;
		newsT9 -= 5;
		newsT10 -= 5;
		newsT11 -= 5;
		newsT12 += 1;
		newsT13 -= 5;
		newsT14 -= 5;
		$('.tag_song').css('background-color', 'var(--purple)');
		resize();
	})

	$('.tag_tour').bind('click', function(){
		cleanTags();
		newsT1 -= 5;
		newsT2 -= 5;
		newsT3 -= 5;
		newsT4 -= 5;
		newsT5 -= 5;
		newsT6 -= 5;
		newsT7 -= 5;
		newsT8 -= 5;
		newsT9 -= 5;
		newsT10 -= 5;
		newsT11 += 1;
		newsT12 -= 5;
		newsT13 -= 5;
		newsT14 -= 5;
		$('.tag_tour').css('background-color', 'var(--purple)');
		resize();
	})

	$('.tag_clip').bind('click', function(){
		cleanTags();
		newsT1 -= 5;
		newsT2 -= 5;
		newsT3 -= 5;
		newsT4 -= 5;
		newsT5 -= 5;
		newsT6 -= 5;
		newsT7 += 1;
		newsT8 -= 5;
		newsT9 -= 5;
		newsT10 -= 5;
		newsT11 -= 5;
		newsT12 -= 5;
		newsT13 -= 5;
		newsT14 -= 5;
		$('.tag_clip').css('background-color', 'var(--purple)');
		resize();
	})

	$('.tag_release').bind('click', function(){
		cleanTags();
		newsT1 += 1;
		newsT2 += 1;
		newsT3 += 1;
		newsT4 -= 5;
		newsT5 -= 5;
		newsT6 -= 5;
		newsT7 += 1;
		newsT8 -= 5;
		newsT9 -= 5;
		newsT10 -= 5;
		newsT11 -= 5;
		newsT12 += 1;
		newsT13 -= 5;
		newsT14 += 1;
		$('.tag_release').css('background-color', 'var(--purple)');
		resize();
	})

	$('.tag_anniversary').bind('click', function(){
		cleanTags();
		newsT1 -= 5;
		newsT2 -= 5;
		newsT3 -= 5;
		newsT4 -= 5;
		newsT5 -= 5;
		newsT6 -= 5;
		newsT7 -= 5;
		newsT8 -= 5;
		newsT9 -= 5;
		newsT10 += 10;
		newsT11 -= 5;
		newsT12 -= 5;
		newsT13 -= 5;
		newsT14 -= 5;
		$('.tag_anniversary').css('background-color', 'var(--purple)');
		resize();
	})

	$('.tag_spotify').bind('click', function(){
		cleanTags();
		newsT1 -= 5;
		newsT2 -= 5;
		newsT3 -= 5;
		newsT4 -= 5;
		newsT5 += 1;
		newsT6 -= 5;
		newsT7 -= 5;
		newsT8 -= 5;
		newsT9 += 1;
		newsT10 -= 5;
		newsT11 -= 5;
		newsT12 -= 5;
		newsT13 -= 5;
		newsT14 -= 5;
		$('.tag_spotify').css('background-color', 'var(--purple)');
		resize();
	})

	$('.tag_top').bind('click', function(){
		cleanTags();
		newsT1 -= 5;
		newsT2 -= 5;
		newsT3 -= 5;
		newsT4 -= 5;
		newsT5 -= 5;
		newsT6 -= 5;
		newsT7 -= 5;
		newsT8 -= 5;
		newsT9 += 1;
		newsT10 -= 5;
		newsT11 -= 5;
		newsT12 -= 5;
		newsT13 -= 5;
		newsT14 -= 5;
		$('.tag_top').css('background-color', 'var(--purple)');
		resize();
	})

	$('.tag_dead').bind('click', function(){
		cleanTags();
		newsT1 -= 5;
		newsT2 -= 5;
		newsT3 -= 5;
		newsT4 -= 5;
		newsT5 -= 5;
		newsT6 += 1;
		newsT7 -= 5;
		newsT8 += 1;
		newsT9 -= 5;
		newsT10 -= 5;
		newsT11 -= 5;
		newsT12 -= 5;
		newsT13 -= 5;
		newsT14 -= 5;
		$('.tag_dead').css('background-color', 'var(--purple)');
		resize();
	})
	

	function resize(){
		$('.NoneBack').css('display', 'none');
		let rsize = 0;
		if (newsT14 + newsD14 > 0) {rsize ++;}
		else{$("#list14").hide();}
		if (newsT13 + newsD13 > 0) {rsize ++;}
		else{$("#list13").hide();}
		if (newsT12 + newsD12 > 0) {rsize ++;}
		else{$("#list12").hide();}
		if (newsT11 + newsD11 > 0) {rsize ++;}
		else{$("#list11").hide();}
		if (newsT10 + newsD10 > 0) {rsize ++;}
		else{$("#list10").hide();}
		if (newsT9 + newsD9 > 0) {rsize ++;}
		else{$("#list9").hide();}
		if (newsT8 + newsD8 > 0) {rsize ++;}
		else{$("#list8").hide();}
		if (newsT7 + newsD7 > 0) {rsize ++;}
		else{$("#list7").hide();}
		if (newsT6 + newsD6 > 0) {rsize ++;}
		else{$("#list6").hide();}
		if (newsT5 + newsD5 > 0) {rsize ++;}
		else{$("#list5").hide();}
		if (newsT4 + newsD4 > 0) {rsize ++;}
		else{$("#list4").hide();}
		if (newsT3 + newsD3 > 0) {rsize ++;}
		else{$("#list3").hide();}
		if (newsT2 + newsD2 > 0) {rsize ++;}
		else{$("#list2").hide();}
		if (newsT1 + newsD1 > 0) {rsize ++;}
		else{$("#list1").hide();}

		if (rsize == 1) {$('#back').css('height', '775px');$('#base').css('height', '1185px');}
		else if (rsize == 2) {$('#back').css('height', '875px');$('#base').css('height', '1285px');}
		else if (rsize == 3) {$('#back').css('height', '1285px');$('#base').css('height', '1695px');}
		else if (rsize == 4) {$('#back').css('height', '1695px');$('#base').css('height', '2105px');}
		else if (rsize == 5) {$('#back').css('height', '2105px');$('#base').css('height', '2515px');}
		else if (rsize == 6) {$('#back').css('height', '2515px');$('#base').css('height', '2925px');}
		else if (rsize == 7) {$('#back').css('height', '2925px');$('#base').css('height', '3335px');}
		else if (rsize == 8) {$('#back').css('height', '3335px');$('#base').css('height', '3745px');}
		else if (rsize == 9) {$('#back').css('height', '3745px');$('#base').css('height', '4155px');}
		else if (rsize == 10) {$('#back').css('height', '4155px');$('#base').css('height', '4565px');}
		else if (rsize == 11) {$('#back').css('height', '4565px');$('#base').css('height', '4975px');}
		else if (rsize == 12) {$('#back').css('height', '4975px');$('#base').css('height', '5385px');}
		else if (rsize == 13) {$('#back').css('height', '5385px');$('#base').css('height', '5795px');}
		else if (rsize == 14) {$('#back').css('height', '5795px');$('#base').css('height', '6205px');}
		else{
			$('#back').css('height', '785px');$('#base').css('height', '1185px');
			$('.NoneBack').css('display', 'block');
		}
	}

	function cleanTags(){
		newsT1 = 0;
		newsT2 = 0;
		newsT3 = 0;
		newsT4 = 0;
		newsT5 = 0;
		newsT6 = 0;
		newsT7 = 0;
		newsT8 = 0;
		newsT9 = 0;
		newsT10 = 0;
		newsT11 = 0;
		newsT12 = 0;
		newsT13 = 0;
		newsT14 = 0;
		$('.tag_great_britain').css('background-color', 'var(--yellow)');
		$('.tag_usa').css('background-color', 'var(--yellow)');
		$('.tag_sweden').css('background-color', 'var(--yellow)');
		$('.tag_korea').css('background-color', 'var(--yellow)');
		$('.tag_russia').css('background-color', 'var(--yellow)');
		$('.tag_group').css('background-color', 'var(--yellow)');
		$('.tag_album').css('background-color', 'var(--yellow)');
		$('.tag_song').css('background-color', 'var(--yellow)');
		$('.tag_tour').css('background-color', 'var(--yellow)');
		$('.tag_clip').css('background-color', 'var(--yellow)');
		$('.tag_release').css('background-color', 'var(--yellow)');
		$('.tag_anniversary').css('background-color', 'var(--yellow)');
		$('.tag_spotify').css('background-color', 'var(--yellow)');
		$('.tag_top').css('background-color', 'var(--yellow)');
		$('.tag_dead').css('background-color', 'var(--yellow)');
		$("#list1").show();
		$("#list2").show();
		$("#list3").show();
		$("#list4").show();
		$("#list5").show();
		$("#list6").show();
		$("#list7").show();
		$("#list8").show();
		$("#list9").show();
		$("#list10").show();
		$("#list11").show();
		$("#list12").show();
		$("#list13").show();
		$("#list14").show();
	}

	function cleanDates(){
		newsD1 = 0;
		newsD2 = 0;
		newsD3 = 0;
		newsD4 = 0;
		newsD5 = 0;
		newsD6 = 0;
		newsD7 = 0;
		newsD8 = 0;
		newsD9 = 0;
		newsD10 = 0;
		newsD11 = 0;
		newsD12 = 0;
		newsD13 = 0;
		newsD14 = 0;
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
		$("#list5").show();
		$("#list6").show();
		$("#list7").show();
		$("#list8").show();
		$("#list9").show();
		$("#list10").show();
		$("#list11").show();
		$("#list12").show();
		$("#list13").show();
		$("#list14").show();
	}
	//

	$('#vc14').bind('click', function(){
		sessionStorage.news_head = $('#zg_text14').html();
		sessionStorage.news_text = '<img src="../img/industry_news/sibir.png" style="width: 300px; float:right; margin-left: 20px;"/>В Приволжье вышел аудиовизуальный альбом со звуками рельефа регионов округа<br><br>Премьера аудиовизуального альбома "Музыка Приволжья", позволяющего услышать, как звучит рельеф местных регионов, состоялась 27 декабря в Приволжском федеральном округе, сообщает пресс-служба полпреда президента РФ в ПФО.Основой мелодии стали преобразованные специалистами Роскартографии в звуковые колебания значения высот географических объектов регионов округа - холмов, низменностей, рек и гор ПФО.<br><br>"В итоге каждый регион нашего округа – от Кировской до Оренбургской области, от поймы Волги до предгорий Урала в Пермском крае – "зазвучал". Графики перепада высот легли в основу тектонической музыки… Всю красоту музыки и ландшафтов родной земли можно оценить, посмотрев видеоклип проекта на сайте аппарата полномочного представителя в ПФО. Релиз альбома "Музыка Приволжья" намечен на начало 2022 года на площадках Яндекс.Музыка и Apple Music", - говорится в сообщении.<br><br>По словам генерального директора Роскартографии Сергея Карутина, музыкальный проект родился в процессе выполнения работ по актуализации рельефа России. "Мы выбрали для него Приволжский федеральный округ, где, действительно, уникальный ландшафт. Результатом эксперимента стало сотрудничество Роскартографии с композитором Михаилом Мищенко и аппаратом полномочного представителя президента РФ в ПФО", - сказал Карутин.<br><br>Приволжский федеральный округ стал первым в стране, где создали свою уникальную мелодию. "В ПФО удивительная природа. Нас связывает великая Волга, издавна вдохновлявшая музыкантов, художников и поэтов.';
		sessionStorage.news_date = date_news14.toLocaleDateString();
	})
	$('#vc13').bind('click', function(){
		sessionStorage.news_head = $('#zg_text13').html();
		sessionStorage.news_text = '<img src="../img/industry_news/got.png" style="width: 300px; float:right; margin-left: 20px;"/>Корейские звезды объединились в новую музыкальную группу GOT the beat <br><br>Крупнейшая развлекательная южнокорейская компания SM Entertainment запустила новую музыкальную группу GOT the beat, сообщает TheKoreaTimes.<br><br>В нее вошли только звезды. Среди них певица БоА, которую называют "Королевой K-pop" и участницы популярной команды Girls Generation — Ким Хёён и Ким Тхэён. Из другой знаменитой корейской группы Red Velvet в новой коллаборации представлены Сыльги и Венди. Из команды aespa в GOT the beat будут выступать Карина и Винтер. У SM есть проект "Girls On Top (GOT)". Его цель — создание новых женских групп, в состав которых будут входить ведущие артисты компании. GOT the beat — первая такая команда.<br><br>Дебютирует семерка на бесплатном онлайн-концерте под названием "SMTOWN Live 2022: SMCU Express@Kwangya" в субботу. А третьего января они уже выпустят свой первый трек. Других подробностей о супергруппе пока нет.';
		sessionStorage.news_date = date_news13.toLocaleDateString();
	})
	$('#vc12').bind('click', function(){
		sessionStorage.news_head = $('#zg_text12').html();
		sessionStorage.news_text = '<img src="../img/industry_news/splean.png" style="width: 300px; float:right; margin-left: 20px;"/>Участники группы "Сплин" представили новый трек "Топай!"<br><br>Участники российской рок-группы "Сплин" представили в Сети новый трек "Топай".<br><br>"Мы провожаем пандемийный 2021 год песней "Топай!". Это слово адресовано не сколько самому вирусу, сколько его возможному носителю. Топать, двигаться, не сидеть на месте. Подпрыгивать, чтобы увидеть будущее. Верить. И встретиться по окончании карантина", — написали музыканты в Instagram. <br><br>В комментариях под постом слушатели заявили, что новая песня "Сплин" — "глоток свежего воздуха". "Шикарная песня. Хоть какая-то радость под конец года", "Благодарю от всей души. Как всегда — лучшая поддержка в самое сложное время!" — поделились впечатлениями пользователи.Послушать или скачать трек можно на многих цифровых платформах.';
		sessionStorage.news_date = date_news12.toLocaleDateString();
	})
	$('#vc11').bind('click', function(){
		sessionStorage.news_head = $('#zg_text11').html();
		sessionStorage.news_text = '<img src="../img/industry_news/zemfira.png" style="width: 300px; float:right; margin-left: 20px;"/>Земфира объявила о концертах в Москве 24 и 26 февраля<br><br>Земфира сообщила, что 24 и 26 февраля даст сольные концерты в Music Media Dome в Москве.Прошлый концертный тур певицы "Маленький человек" состоялся в 2016 году.<br><br>"Концерты в Москве 24 и 26 февраля 2022 — Music Media Dome", – говорится в сообщении в Instagram. Отмечается, что мероприятия пройдут в формате COVID-free.<br><br>В феврале Земфира после восьмилетнего перерыва выпустила альбом "Бордерлайн", состоящий из 12 треков. В июле певица выпустила мини-альбом "Ах", в который вошли четыре песни. Ранее суд отказал певице в иске к Гришковцу c требованием взыскать с писателя 1,5 миллиона рублей компенсации морального вреда.';
		sessionStorage.news_date = date_news11.toLocaleDateString();
	})
	$('#vc10').bind('click', function(){
		sessionStorage.news_head = $('#zg_text10').html();
		sessionStorage.news_text = '<img src="../img/industry_news/tsoi.png" style="width: 300px; float:right; margin-left: 20px;"/>Певица Джоанна Стингрей в 2022 г выпустит книгу к 60-летию со дня рождения Виктора Цоя<br><br>Продюсер и писательница Джоанна Стингрей рассказала в интервью РИА Новости о том, что в 2022 году планирует выпустить свою шестую книгу, посвященную 60-летию со дня рождения музыканта Виктора Цоя.<br><br>В данный момент в России вышло пять ее книг: "Стингрей в Стране Чудес", "Стингрей в Зазеркалье", "Русский рок. История. Фотографии. Интервью. Документы", "Подлинная история русского рока", а также "Русский рок: Конец андеграунда". Примечательно, что певица выпускает книги в хронологическом порядке истории ее приключений в СССР. <br><br>"Я сделаю отступление от хронологического порядка выпуска моих книг ввиду того, что в следующем году, в июне, 60 лет могло бы исполниться Цою. Моя следующая книга будет полностью посвящена Виктору, я хочу отдать ему дать уважения как моему замечательному другу", - рассказала Стингрей РИА Новости. <br><br>Виктор Цой погиб в автокатастрофе под Ригой 15 августа 1990 года. По официальной версии, Цой уснул за рулем, и его "Москвич" выехал на встречную полосу, где столкнулся с автобусом.';
		sessionStorage.news_date = date_news10.toLocaleDateString();
	})
	$('#vc9').bind('click', function(){
		sessionStorage.news_head = $('#zg_text9').html();
		sessionStorage.news_text = '<img src="../img/industry_news/kiss.png" style="width: 300px; float:right; margin-left: 20px;"/>Spotify рассказал, что у российских слушателей популярны KISS, Queen, Кино и Linkin Park <br><br>Стриминговый сервис Spotify выяснил, какой музыкальный жанр прошлых десятилетий чаще всего слушают россияне — им оказался рок, а среди любимых групп — KISS, Queen, Кино и Linkin Park. <br><br>"Spotify проанализировал песни 1970-х, 80-х, 90-х и нулевых и выяснил, какая музыка прошлого пользуются наибольшим успехом сегодня. В топе каждого десятилетия преобладает рок-звучание", — рассказали в пресс-службе сервиса.<br><br>Среди многообразия музыки 1970-х российских слушателей привлекает рок, причем исключительно иностранный. В топ-10 нет ни одной песни на русском языке. На первой строчке — хит американских рокеров KISS "I Was Made For Lovin’ You". Британцы Queen отметились сразу двумя работами – "Bohemian Rhapsody" и "Dont Stop Me Now". Целых три трэка австралийской рок-группы AC/DC вошли в список (это "Back in Black", "Highway to Hell" и "Thunderstruck").<br><br>Разбавляют жанр шведская поп-группа ABBA с "Gimme! Gimme! Gimme! (A Man After Midnight)", Майкл Джексон с "Billie Jean". Также в десятке оказались британские рокеры Black Sabbath с треком "Paranoid" и американский рок-коллектив Fleetwood Mac с песней "The Chain". В списке популярной музыки 1980-х все также доминирует рок, при этом первые четыре строчки занимает группа Кино ("Хочу перемен", "Пачка сигарет", "Звезда по имени Солнце" и "Группа крови"). Также в списке (на 10 месте) Nautilus Pompilius со "Скованные одной цепью". В топе оказались и "Another One Bites The Dust" Queen, "Where Is My Mind?" американской альтернативной команды Pixies.<br><br>За поп "отвечают" немцы Modern Talking ("Cheri Cheri Lady") и норвежцы a-ha ("Take On Me").Оказалось, что рок-музыка определила и 1990-е. Топ-3 занимает Король и Шут ("Кукла колдуна", "Дурак и молния" и "Прыгну со скалы"). Следом идут мастера гранж-рока Nirvana ("Smells Like Teen Spirit"), а также Мумий Тролль ("Владивосток 2000") и Сплин ("Выхода нет").<br><br>Среди композиций 2000-х рок остается главным жанром, лидерство у русскоязычных и англоязычных исполнителей.';
		sessionStorage.news_date = date_news9.toLocaleDateString();
	})
	$('#vc8').bind('click', function(){
		sessionStorage.news_head = $('#zg_text8').html();
		sessionStorage.news_text = '<img src="../img/industry_news/emirov.png" style="width: 300px; float:right; margin-left: 20px;"/>Умер композитор и музыкант групп "Сплин" и "Колибри" Олег Эмиров<br><br>Российский композитор и музыкант, участник групп "Сплин" и "Колибри" Олег Эмиров умер на 52-м году жизни. Об этом сообщается на официальной странице "Колибри" в фейсбуке.<br><br>"Музыкант редкого и большого дара, высочайшего уровня культуры, мудрый друг, надежный товарищ. Человек", — заявили представители коллектива.<br><br>По информации СМИ, причиной смерти стали проблемы с сердцем.<br><br>Эмиров родился в 1970 году в Ленинграде. Среди прочего известен как саунд-продюсер и аранжировщик телеканала НТВ, написал музыкальные темы к таким передачам, как "Намедни", "Программа максимум", "Школа злословия", "Большой брат". Также Эмиров работал над альбомами "Резонанс. Часть первая" группы "Сплин".';
		sessionStorage.news_date = date_news8.toLocaleDateString();
	})
	$('#vc7').bind('click', function(){
		sessionStorage.news_head = $('#zg_text7').html();
		sessionStorage.news_text = '<img src="../img/industry_news/elton.png" style="width: 300px; float:right; margin-left: 20px;"/>Эд Ширан и Элтон Джон представили совместный клип "Merry Christmas"<br><br>Эд Ширан и Элтон Джон выпустили совместный трек "Merry Christmas". О выходе новой песни и клипе они рассказали в личных микроблогах. "Мы хорошо повеселились, когда снимали ролик", — написали музыканты в соцсетях.<br><br>В видео показано, как компания друзей встречает Рождество. Ширан в коротких штанах в стиле Санты неловко, но самозабвенно танцует, а Элтон Джон как всегда играет на рояле. Исполнители давно знакомы, но только сейчас решили поработать вместе, говорится на сайте NME.<br><br>"Элтон позвонил мне как-то на Рождество, чтобы поздравить с праздником. Он вообще набирает мой номер практически каждый день. Тогда он сказал мне: "Моя песня "Step Into Christmas" под номером шесть в чартах. Я хочу выпустить еще одну рождественскую композицию. Ты в деле?" — вспоминает Ширан.<br><br>"Лучше просто не может быть", "Это все, что я хочу на Рождество", "Официально: это моя любимая рождественская песня", "Потрясающая песня", — оценили трек пользователи.';
		sessionStorage.news_date = date_news7.toLocaleDateString();
	})
	$('#vc6').bind('click', function(){
		sessionStorage.news_head = $('#zg_text6').html();
		sessionStorage.news_text = '<img src="../img/industry_news/gradskie.png" style="width: 300px; float:right; margin-left: 20px;"/> Про Александра Градского можно с уверенностью сказать: "легенда" — однако даже это слово все равно недостаточно отражает, что именно он значил для нашей культуры. Казалось, ему все время было тесно в любом жанре, но при этом он с одинаковой легкостью мог творить, невзирая на стили и направления. Музыка была его стихией, он ею жил, он ею дышал, он без нее не мог.<br><br>От природы наделенный фантастическими вокальными данными, он, конечно же, как и все молодые люди конца 60-х, увлекся рок-музыкой. И вскоре организовал одну из первых отечественных рок-групп — "Славяне".<br><br>А уже через год, в 1966-м, появились легендарные "Скоморохи", о которых говорили с придыханием: "Там поет такой парень, он может спеть все — от Пресли до Led Zeppelin". Этим самым парнем был Градский, который не только пел и играл, но и сочинял музыку (даже написал рок-оперу "Муха-цокотуха" по мотивам сказки Чуковского).<br><br>В историю вошел знаменитый концерт "Скоморохов", на который пришло столько зрителей, что ДК, где играла группа, не смог вместить всех. Движение на улице из-за собравшейся толпы было перекрыто, случился даже инцидент с милицией, который удалось замять.';
		sessionStorage.news_date = date_news6.toLocaleDateString();
	})
	$('#vc5').bind('click', function(){
		sessionStorage.news_head = $('#zg_text5').html();
		sessionStorage.news_text = '<img src="../img/industry_news/adele.png" style="width: 300px; float:right; margin-left: 20px;"/>Адель попросила Spotify не менять местами песни на ее новом альбоме "30"<br><br>Стриминговая платформа Spotify после просьбы британской певицы Адель не менять порядок треков на ее новом альбоме отключила функцию случайного воспроизведения композиций. Первая за шесть лет новая пластинка Адель "30", которую еще до выхода окрестили "альбомом развода", вышла в свет 19 ноября. В анонсе Адель писала, что эти годы были самым "турбулентным периодом" в ее жизни, который включал и расставание с мужем.<br><br>"Это был единственный запрос, который я когда-либо сделала в нашей постоянно меняющейся индустрии. Мы не без причин создаем наши альбомы с такой тщательностью и продумываем трек-листы. Наше искусство рассказывает истории, и их следует слушать так, как мы задумали. Спасибо, Spotify, что вы прислушались", – написала Адель в Twitter.<br><br>Платформа Spotify в свою очередь поделилась публикацией Адель на своей странице в Twitter c комментарием: "Все для тебя". Тем не менее у слушателей по-прежнему есть возможность перемешать треки и слушать их в произвольном порядке, платформа лишь отключила эту функцию по умолчанию.<br><br>Это четвертый альбом Адель. Предыдущий – "25" – вышел в 2015 году. Музыкальные критики считают, что "30", вероятно, будет самым сильным и лучшим альбомом авторства певицы. В конце 2018 года звезда заявила, что пение и гастроли не приносят ей удовольствия, и подала заявку на закрытие своего музыкального бизнеса. Причиной называлось желание певицы почаще быть с детьми и мужем, но фанаты не смогли с этим смириться и запустили в социальных сетях флешмоб под названием #AdeleChallenge.<br><br>В апреле 2019 года Адель после трех лет брака с бизнесменом Саймоном Конекки подала на развод. Во время развода супруги договорились о совместной опеке над сыном Анжело. Адель – лауреат 15 премий "Грэмми" и первый музыкант, сумевший выиграть в номинациях "Альбом года", "Запись года" и "Песня года" дважды. Песня Skyfall в ее исполнении получила премии "Оскар" и "Золотой глобус".';
		sessionStorage.news_date = date_news5.toLocaleDateString();
	})
	$('#vc4').bind('click', function(){
		sessionStorage.news_head = $('#zg_text4').html();
		sessionStorage.news_text = '<img src="../img/industry_news/beatles.png" style="width: 300px; float:right; margin-left: 20px;"/>На чердаке дома в Великобритании обнаружили кассету с неизвестной песней Radhe Shaam, в записи которой участвовали гитарист и барабанщик The Beatles Джордж Харрисон и Ринго Старр, сообщает издание Evening Standard.<br><br>Композитор Суреш Джоши записал Radhe Shaam вместе с музыкантами в 1968 году. По его словам, певец Аашиш Хан отвечал за вокальное исполнение, Харрисон играл на гитаре, а Старр аккомпанировал на барабанах. Однако композиция так и не вышла, поскольку все участники переключились на другие проекты.<br><br>Лишь спустя 53 года, во время карантина из-за COVID-19, Джоши нашел кассету на чердаке своего дома в Бирмингеме. Песня впервые прозвучала публично в музее The Beatles в Ливерпуле в среду. Как отмечает газета, в Сети запись появится позже.';
		sessionStorage.news_date = date_news4.toLocaleDateString();
	})
	$('#vc3').bind('click', function(){
		sessionStorage.news_head = $('#zg_text3').html();
		sessionStorage.news_text = '<img src="../img/industry_news/abba.png" style="width: 300px; float:right; margin-left: 20px;"/>У меломанов всего мира праздник: выходит "Voyage" — новый альбом группы ABBA, их первый релиз за 40 лет. О том, как великие шведы устроили шоу-революцию и сможем ли мы увидеть их молодыми, — в материале РИА Новости.<br><br>Формально ABBA никогда не распадалась, просто после выпуска пластинки "The Visitors" легендарная шведская четверка приостановила деятельность. Явной ссоры между участниками тоже не было — все внутренние конфликты с течением времени себя исчерпали.<br><br>Две самые красивые пары в поп-музыке расстались, каждый из участников квартета зажил собственной жизнью. При этом сотрудничать продолжали: например, Бьорн Ульвеус и Бенни Андерсон написали вместе мюзикл "Шахматы".<br><br>Все четверо избегали одновременно появляться на публике — сделали исключение лишь для шведской премьеры картины "Mamma Mia!", снятой по мотивам мюзикла, основанного на песнях группы. Бенни, Бьорн, Агнета и Фрида вышли на балкон кинотеатра вместе со звездами фильма — Пирсом Броснаном, Мерил Стрип и Амандой Сейфрид.<br><br>И после этого — снова молчание: от любых, даже самых смелых предложений собраться, пусть хотя бы ради одного телеэфира или специального появления на каком-нибудь юбилейном концерте, участники группы твердо отказывались.<br><br>Но в 2016-м табу оказалось преодолено. На закрытой вечеринке в честь 50-летия сотрудничества Бьорна и Бенни четверка наконец-то вышла на сцену, исполнив песню "Me and I". Слухи о возможном воссоединении усилились, и уже через два года ABBA официально объявила о совместной работе в студии над новыми песнями.';
		sessionStorage.news_date = date_news3.toLocaleDateString();
	})
	$('#vc2').bind('click', function(){
		sessionStorage.news_head = $('#zg_text2').html();
		sessionStorage.news_text = '<img src="../img/industry_news/limp_bizkit.png" style="width: 300px; float:right; margin-left: 20px;"/>Группа Limp Bizkit выпустила первый за десять лет альбом "Still sucks"<br><br>Группа Limp Bizkit выпустила первый за десять лет альбом — "Stil sucks". О его выходе музыканты сообщили в своем Instagram-аккаунте. Пластинка доступна на цифровых платформах.<br><br>Известно, что рокеры сначала хотели назвать новый сборник "Stampede of the Disco Elephants", однако в итоге его переименовали. В альбом вошло 12 песен, среди них трек "Dad vibes". Он был выпущен в качестве сингла в конце сентября. <br><br>Однако фанаты группы могли услышать его ранее — Limp Bizkit представила его в июле на фестивале Lollapalooza. Предыдущий диск "Gold Cobra" у команды вышел в 2011 году. Американская рэп-метал группа Limp Bizkit была основана в 1994 году. Команда трижды номинировалась на премию "Грэмми".';
		sessionStorage.news_date = date_news2.toLocaleDateString();
	})
	$('#vc1').bind('click', function(){
		sessionStorage.news_head = $('#zg_text1').html();
		sessionStorage.news_text = '<img src="../img/industry_news/sheeran.png" style="width: 300px; float:right; margin-left: 20px;"/>Эд Ширан выпустил новый альбом "="<br><br>Эд Ширан выпустил новый альбом "=" (произносится как Equals, "равно" — англ.). Об этом музыкант сообщил на своей странице в Instagram. На диске 14 треков, среди них вышедшие ранее синглы "Bad Habits", "Shivers" и "Visiting Hours".<br><br>"Это моя любимая пластинка. Я ею очень горжусь. Благодарю моих прекрасных коллег, с которыми я работал над этим проектом. Надеюсь, что он понравится моим фанатам так же сильно, как и мне", — поделился переживаниями музыкант. Новый альбом Эда Ширана доступен на цифровых платформах.';
		sessionStorage.news_date = date_news1.toLocaleDateString();
	})
});