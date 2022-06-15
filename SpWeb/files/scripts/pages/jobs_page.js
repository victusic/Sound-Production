$(document).ready( function(){

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
	
	$('#vc1').bind('click', function(){
		if($('#list1').height() == 350){
			$('#list1').animate({height: "970px"}, 400);
			//динамически увеличиваем высоту объекта
			$('#back').height(($('#back').height()) + 620);
			$('#base').height(($('#base').height()) + 620);
			$('#vc1').text("Свернуть ⇑");
		}
		else{
			$('#list1').animate({height: "350px"}, 400);
			$('#back').height(($('#back').height()) - 620);
			$('#base').height(($('#base').height()) - 620);
			$('#vc1').text("Подробнее ⇓");
		}
	});
	$('#vc2').bind('click', function(){
		if($('#list2').height() == 375){
			$('#list2').animate({height: "995px"}, 400);
			$('#back').height(($('#back').height()) + 620)
			$('#base').height(($('#base').height()) + 620);
			$('#vc2').text("Свернуть ⇑");
		}
		else{
			$('#list2').animate({height: "375px"}, 400);
			$('#back').height(($('#back').height()) - 620)
			$('#base').height(($('#base').height()) - 620);
			$('#vc2').text("Подробнее ⇓");
		}
	});
	$('#vc3').bind('click', function(){
		if($('#list3').height() == 350){
			$('#list3').animate({height: "1045px"}, 400);
			$('#back').height(($('#back').height()) + 695)
			$('#base').height(($('#base').height()) + 695)
			$('#vc3').text("Свернуть ⇑");
		}
		else{
			$('#list3').animate({height: "350px"}, 400);
			$('#back').height(($('#back').height()) - 695)
			$('#base').height(($('#base').height()) - 695)
			$('#vc3').text("Подробнее ⇓");
		}
	});
	$('#vc4').bind('click', function(){
		if($('#list4').height() == 350){
			$('#list4').animate({height: "920px"}, 400);
			$('#back').height(($('#back').height()) + 570)
			$('#base').height(($('#base').height()) + 570)
			$('#vc4').text("Свернуть ⇑");
		}
		else{
			$('#list4').animate({height: "350px"}, 400);
			$('#back').height(($('#back').height()) - 570)
			$('#base').height(($('#base').height()) - 570)
			$('#vc4').text("Подробнее ⇓");
		}
	});
	$('#vc5').bind('click', function(){
		if($('#list5').height() == 350){
			$('#list5').animate({height: "970px"}, 400);
			$('#back').height(($('#back').height()) + 570)
			$('#base').height(($('#base').height()) + 570)
			$('#vc5').text("Свернуть ⇑");
		}
		else{
			$('#list5').animate({height: "350px"}, 400);
			$('#back').height(($('#back').height()) - 570)
			$('#base').height(($('#base').height()) - 570)
			$('#vc5').text("Подробнее ⇓");
		}
	});
	$('#vc6').bind('click', function(){
		if($('#list6').height() == 400){
			$('#list6').animate({height: "1120px"}, 400);
			$('#back').height(($('#back').height()) + 720)
			$('#base').height(($('#base').height()) + 720)
			$('#vc6').text("Свернуть ⇑");
		}
		else{
			$('#list6').animate({height: "400px"}, 400);
			$('#back').height(($('#back').height()) - 720)
			$('#base').height(($('#base').height()) - 720)
			$('#vc6').text("Подробнее ⇓");
		}
	});
	$('#vc7').bind('click', function(){
		if($('#list7').height() == 375){
			$('#list7').animate({height: "970px"}, 400);
			$('#back').height(($('#back').height()) + 595)
			$('#base').height(($('#base').height()) + 595)
			$('#vc7').text("Свернуть ⇑");
		}
		else{
			$('#list7').animate({height: "375px"}, 400);
			$('#back').height(($('#back').height()) - 595)
			$('#base').height(($('#base').height()) - 595)
			$('#vc7').text("Подробнее ⇓");
		}
	});
	let rlt1 = 0;
	let rlt2 = 0;
	let rlt3 = 0;
	let rlt4 = 0;
	let rlt5 = 0;
	let rlt6 = 0;
	let rlt7 = 0;
	let rlt8 = 0;
	let rlt9 = 0;
	let rlt10 = 0;
	let rlt11 = 0;
	let rlt12 = 0;
	let rlt13 = 0;
	let rlt14 = 0;
	$('#rlt1').bind('click', function(){
		if (rlt1 == 0) {
			rlt1 = 1;
			$('#list1').css('background-color', 'var(--yellow)');
			$('#list2').css('background-color', 'var(--yellow)');
		}
		else{
			rlt1 = 0;
			$('#list1').css('background-color', 'var(--panl)');
			$('#list2').css('background-color', 'var(--panl)');
		}
	});
	$('#rlt2').bind('click', function(){
		if (rlt2 == 0) {
			rlt2 = 2;
			$('#list3').css('background-color', 'var(--yellow)');
		}
		else{
			rlt2 = 0;
			$('#list3').css('background-color', 'var(--panl)');
		}
	});
	$('#rlt3').bind('click', function(){
		if (rlt3 == 0) {
			rlt3 = 3;
			$('#list4').css('background-color', 'var(--yellow)');
			$('#list5').css('background-color', 'var(--yellow)');
		}
		else{
			rlt3 = 0;
			$('#list4').css('background-color', 'var(--panl)');
			$('#list5').css('background-color', 'var(--panl)');
		}
	});
	$('#rlt4').bind('click', function(){
		if (rlt4 == 0) {
			rlt4 = 4;
			$('#list6').css('background-color', 'var(--yellow)');
			$('#list7').css('background-color', 'var(--yellow)');
		}
		else{
			rlt4 = 0;
			$('#list6').css('background-color', 'var(--panl)');
			$('#list7').css('background-color', 'var(--panl)');
		}
	});
	$('#rlt5').bind('click', function(){
		if (rlt5 == 0) {
			rlt5 = 5;
			$('#list1').css('background-color', 'var(--yellow)');
			$('#list2').css('background-color', 'var(--yellow)');
			$('#list3').css('background-color', 'var(--yellow)');
			$('#list5').css('background-color', 'var(--yellow)');
		}
		else{
			rlt5 = 0;
			$('#list1').css('background-color', 'var(--panl)');
			$('#list2').css('background-color', 'var(--panl)');
			$('#list3').css('background-color', 'var(--panl)');
			$('#list5').css('background-color', 'var(--panl)');
		}
	});
	$('#rlt6').bind('click', function(){
		if (rlt6 == 0) {
			rlt6 = 6;
			$('#list6').css('background-color', 'var(--yellow)');
		}
		else{
			rlt6 = 0;
			$('#list6').css('background-color', 'var(--panl)');
		}
	});
	$('#rlt7').bind('click', function(){
		if (rlt7 == 0) {
			rlt7 = 7;
			$('#list4').css('background-color', 'var(--yellow)');
			$('#list7').css('background-color', 'var(--yellow)');
		}
		else{
			rlt7 = 0;
			$('#list4').css('background-color', 'var(--panl)');
			$('#list7').css('background-color', 'var(--panl)');
		}
	});
	$('#rlt8').bind('click', function(){
		if (rlt8 == 0) {
			rlt8 = 8;
			$('#list1').css('background-color', 'var(--yellow)');
			$('#list2').css('background-color', 'var(--yellow)');
			$('#list3').css('background-color', 'var(--yellow)');
			$('#list5').css('background-color', 'var(--yellow)');
			$('#list6').css('background-color', 'var(--yellow)');
			$('#list7').css('background-color', 'var(--yellow)');
		}
		else{
			rlt8 = 0;
			$('#list1').css('background-color', 'var(--panl)');
			$('#list2').css('background-color', 'var(--panl)');
			$('#list3').css('background-color', 'var(--panl)');
			$('#list5').css('background-color', 'var(--panl)');
			$('#list6').css('background-color', 'var(--panl)');
			$('#list7').css('background-color', 'var(--panl)');
		}
	});
	$('#rlt9').bind('click', function(){
		if (rlt9 == 0) {
			rlt9 = 9;
			$('#list1').css('background-color', 'var(--yellow)');
			$('#list2').css('background-color', 'var(--yellow)');
			$('#list3').css('background-color', 'var(--yellow)');
			$('#list5').css('background-color', 'var(--yellow)');
		}
		else{
			rlt9 = 0;
			$('#list1').css('background-color', 'var(--panl)');
			$('#list2').css('background-color', 'var(--panl)');
			$('#list3').css('background-color', 'var(--panl)');
			$('#list5').css('background-color', 'var(--panl)');
		}
	});
	$('#rlt10').bind('click', function(){
		if (rlt10 == 0) {
			rlt10 = 10;
			$('#list2').css('background-color', 'var(--yellow)');
			$('#list3').css('background-color', 'var(--yellow)');
			$('#list5').css('background-color', 'var(--yellow)');
		}
		else{
			rlt10 = 0;
			$('#list2').css('background-color', 'var(--panl)');
			$('#list3').css('background-color', 'var(--panl)');
			$('#list5').css('background-color', 'var(--panl)');
		}
	});
	$('#rlt11').bind('click', function(){
		if (rlt11 == 0) {
			rlt11 = 11;
			$('#list2').css('background-color', 'var(--yellow)');
			$('#list5').css('background-color', 'var(--yellow)');
		}
		else{
			rlt11 = 0;
			$('#list2').css('background-color', 'var(--panl)');
			$('#list5').css('background-color', 'var(--panl)');
		}
	});
	$('#rlt12').bind('click', function(){
		if (rlt12 == 0) {
			rlt12 = 12;
			$('#list1').css('background-color', 'var(--yellow)');
			$('#list2').css('background-color', 'var(--yellow)');
			$('#list3').css('background-color', 'var(--yellow)');
			$('#list6').css('background-color', 'var(--yellow)');
			$('#list7').css('background-color', 'var(--yellow)');
		}
		else{
			rlt12 = 0;
			$('#list1').css('background-color', 'var(--panl)');
			$('#list2').css('background-color', 'var(--panl)');
			$('#list3').css('background-color', 'var(--panl)');
			$('#list6').css('background-color', 'var(--panl)');
			$('#list7').css('background-color', 'var(--panl)');
		}
	});
	$('#rlt13').bind('click', function(){
		if (rlt13 == 0) {
			rlt13 = 13;
			$('#list1').css('background-color', 'var(--yellow)');
			$('#list2').css('background-color', 'var(--yellow)');
			$('#list3').css('background-color', 'var(--yellow)');
			$('#list4').css('background-color', 'var(--yellow)');
			$('#list5').css('background-color', 'var(--yellow)');
		}
		else{
			rlt13 = 0;
			$('#list1').css('background-color', 'var(--panl)');
			$('#list2').css('background-color', 'var(--panl)');
			$('#list3').css('background-color', 'var(--panl)');
			$('#list4').css('background-color', 'var(--panl)');
			$('#list5').css('background-color', 'var(--panl)');
		}
	});
	$('#rlt14').bind('click', function(){
		if (rlt14 == 0) {
			rlt14 = 14;
			$('#list1').css('background-color', 'var(--yellow)');
			$('#list2').css('background-color', 'var(--yellow)');
			$('#list3').css('background-color', 'var(--yellow)');
		}
		else{
			rlt14 = 0;
			$('#list1').css('background-color', 'var(--panl)');
			$('#list2').css('background-color', 'var(--panl)');
			$('#list3').css('background-color', 'var(--panl)');
		}
	});
	$('#fback').bind('click', function(){
		sessionStorage.cntct_inp = 'Вакансия ';
	})
});