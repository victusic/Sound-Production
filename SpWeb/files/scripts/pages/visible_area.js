$(document).ready(function(){
	$.getJSON('../php/visit_areas.php', function(data) {
		var sec = 0;
		sessionStorage.setItem('secstop', 1);
		// 1 - можно, 0 нельзя
		function EndVis(){
			$.get('../php/get-status-area.php', {text: data[sessionStorage.getItem('GroupId')]['AreaId']}, function(data){
				sessionStorage.setItem('AdvId', data.Id);
			});
			sessionStorage.setItem('secstop', 0);
			var timestamp = sec;

			var hours = Math.floor(timestamp / 60 / 60);
			var minutes = Math.floor(timestamp / 60) - (hours * 60);
			var seconds = timestamp % 60;

			var formatted = hours + ':' + minutes + ':' + seconds;
			let dev = 0;
			if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
				dev = 2;
			  } else {
				dev = 1;
			}
			let dates = {
				Date: new Date().toLocaleDateString(),
				Time: formatted,
				Device: dev,
				Advertisiment: sessionStorage.getItem('AdvId'),
			};

			//alert(sessionStorage.getItem('AdvId'));

			let json = JSON.stringify(dates);
			$.ajax({
				type: 'POST',
				url: "../php/visit.php",
				dataType: 'json',
				cache: false,
				data: {myData: json}
			});

			//alert(formatted );
		}

		//console.log(data);
		$('#livi_plateS').height((data.Count * 315) + 30);
		$('#livi_plateS').css('display', 'block');
		$('#preloader_group').css('display', 'none');
		let tags = '';
		if (data.Count > 3) {
			$('#back').height(1075 + ((data.Count - 3) * 315));
			$('#base').height(1480 + ((data.Count - 3) * 315));
			$('#listr').height(985 + ((data.Count - 3) * 315));
		}
		if (data.Count == 0) {
			$('.listview_plus').css('margin-top', '680px');
			$('.null-group').css('display', 'block');
		}
		for (let i = 0; i < data.Count; i++) {
			tags += '<div class="listview" id="listview' + i + '" onclick="sessionStorage.setItem(`GroupId`, ' + i +');">' + 
					'<div class="lv_img" id="lv_img'+ i +'"></div>' +
					'<div class="lv_name" id="lv_name' + i +'"></div>' +
					'<div class="lv_group" id="lv_group' + i +'"></div>' +
					'<div class="lv_area" id="lv_area'+ i +'"></div>' +
					'<div class="lv_state" id="lv_state'+ i +'"></div>' +
					'<div class="lv_phone" id="lv_phone'+ i +'"></div>' +
					'<div class="lv_mail" id="lv_mail'+ i +'"></div>' +
					'<div class="lv_genre" id="lv_genre'+ i +'"></div>' +
					'<div class="lv_time" id="lv_time'+ i +'"></div>' +
					'<div class="lv_visible" id="lv_visible'+ i +'"></div>' +
				'</div>';
		}
		$('#livi_plateS').html(tags);
		for (let i = 0; i < data.Count; i++) {
			$('#lv_name' + i).html('&nbsp&nbsp' + data[i]['Name']);
			$('#lv_group' + i).html(data[i]['Description']);
			$('#lv_area' + i).html(data[i]['DescriptionGroups']);
			$('#lv_phone' + i).html(data[i]['Phone']);
			$('#lv_mail' + i).html(data[i]['Mail']);
			$('#lv_genre' + i).html(data[i]['Capacity']);
			
			if(data[i]['PhotoLogo'] == null){
				$('#lv_img'+ i).addClass('avatar-none-big2');
			}
			else{
				$('#lv_img'+ i).html('<img id="imgElem' + i +'" class="logo_img" src = data:image/jpg;base64,'+ data[i]['PhotoLogo'] +'></img>');
			}
			
			sessionStorage.setItem('UserId', data[i]['Representative']);

			$.get('../php/get-status-area.php', {text: data[i]['AreaId']}, function(data){
				//console.log(data);
				if (data.status == 0) {
					$('#lv_state' + i).html('Статус объявления: проходит проверку');
				}
				else if (data.status == 1) {
					$('#lv_state' + i).html('Статус объявления: опубликовано');
				}

				$.get('../php/get-adver-status-visit.php', {text: data.Id}, function(data1){
					if (data1.count == "+") {
						$('#lv_visible' + i).html('<div class="preview_statistic preview_statistic_count_plus"></div>');
					}
					else if(data1.count == "-"){
						$('#lv_visible' + i).html('<div class="preview_statistic preview_statistic_count_minus"></div>');
					}
					else if(data1.count == "="){
						$('#lv_visible' + i).html('<div class="preview_statistic preview_statistic_count_equal"></div>');
					}
					else{
						$('#lv_visible' + i).html('<div class="preview_statistic preview_statistic_count_0"></div>');
					}

					if (data1.time == "+") {
						$('#lv_time' + i).html('<div class="preview_statistic preview_statistic_time_plus"></div>');
					}
					else if(data1.time == "-"){
						$('#lv_time' + i).html('<div class="preview_statistic preview_statistic_time_minus"></div>');
					}
					else if(data1.time == "="){
						$('#lv_time' + i).html('<div class="preview_statistic preview_statistic_time_equal"></div>');
					}
					else{
						$('#lv_time' + i).html('<div class="preview_statistic preview_statistic_time_0"></div>');
					}
				});
			});
		}
		

		$('.listview').bind('click', function(){
			if(sec != 0){
				sec = 0;
			}
			var timer = setTimeout(function tick() {
				if (sessionStorage.getItem('secstop') == 0){
					sessionStorage.setItem('secstop', 1);
					return;
				}
				secstop = 1;
				sec++;
				timer = setTimeout(tick, 1000);
			}, 1000);
			$.get('../php/get-status-area.php', {text: data[sessionStorage.getItem('GroupId')]['AreaId']}, function(data){
				sessionStorage.setItem('AdvId', data.Id);
			});
			
			$('#listr').css('display', 'none');
			$('#list2').css('display', 'block');
			$('#list3').css('display', 'block')
			$('#back').height(1620);
			$('#base').height(2030);

			$('#list2_name').html('&nbsp&nbsp' + data[sessionStorage.getItem('GroupId')]['Name']);
			$('#list2_genre').html(data[sessionStorage.getItem('GroupId')]['Capacity']);
			$('#list2_group').html(data[sessionStorage.getItem('GroupId')]['Description']);
			$('#list2_about_area').html(data[sessionStorage.getItem('GroupId')]['DescriptionGroups']);
			$('#listn').css('display', 'block');
			$('#list2_mail').html(data[sessionStorage.getItem('GroupId')]['Mail']);
			$('#list2_phone').html(data[sessionStorage.getItem('GroupId')]['Phone']);
			$('#list2_spotify').html(data[sessionStorage.getItem('GroupId')]['Equipment']);
			$('#list2_location').html(data[sessionStorage.getItem('GroupId')]['Location']);

			if(data[sessionStorage.getItem('GroupId')]['PhotoLogo'] == null){
				$('.list2_img').html('<div class="avatar-none-big"></div>');
			}
			else{
				//console.log(data[sessionStorage.getItem('GroupId')]['PhotoLogo']);
				$('.list2_img').html('<img class="logo_img_list" src = data:image/jpg;base64,'+ data[sessionStorage.getItem('GroupId')]['PhotoLogo'] +'></img>');
			}

			let countImage = 0;
			if(data[sessionStorage.getItem('GroupId')]['Photo1'] != null){
				countImage++;
			}
			if(data[sessionStorage.getItem('GroupId')]['Photo2'] != null){
				countImage++;
			}
			if(data[sessionStorage.getItem('GroupId')]['Photo3'] != null){
				countImage++;
			}
			if(data[sessionStorage.getItem('GroupId')]['Photo4'] != null){
				countImage++;
			}
			if(data[sessionStorage.getItem('GroupId')]['Photo5'] != null){
				countImage++;
			}
			if(data[sessionStorage.getItem('GroupId')]['Photo6'] != null){
				countImage++;
			}
			let imgtags = '';
			if(countImage == 0){
				imgtags = '<div class="img_null">Изображения не были добавленны</div>'
			}
			else if(countImage == 1){
				imgtags = '<img class="img_1" src = data:image/jpg;base64,'+ data[sessionStorage.getItem('GroupId')]['Photo1'] +'></img>'
			}
			else if(countImage == 2){
				imgtags = '<img class="img_2" id="img21"src = data:image/jpg;base64,'+ data[sessionStorage.getItem('GroupId')]['Photo1'] +'></img><img class="img_2" id="img22" src = data:image/jpg;base64,'+ data[sessionStorage.getItem('GroupId')]['Photo2'] +'></img>'
			}
			else if(countImage == 3){
				imgtags = '<img class="img_31" src = data:image/jpg;base64,'+ data[sessionStorage.getItem('GroupId')]['Photo1'] +'></img><img class="img_32" id="img32" src = data:image/jpg;base64,'+ data[sessionStorage.getItem('GroupId')]['Photo2'] +'></img><img class="img_32" id="img33" src = data:image/jpg;base64,'+ data[sessionStorage.getItem('GroupId')]['Photo3'] +'></img>'
			}
			else if(countImage == 4){
				imgtags = '<img class="img_4" id="img41" src = data:image/jpg;base64,'+ data[sessionStorage.getItem('GroupId')]['Photo1'] +'></img><img class="img_4" id="img42" src = data:image/jpg;base64,'+ data[sessionStorage.getItem('GroupId')]['Photo2'] +'></img><img class="img_4" id="img43" src = data:image/jpg;base64,'+ data[sessionStorage.getItem('GroupId')]['Photo3'] +'></img><img class="img_4" id="img44" src = data:image/jpg;base64,'+ data[sessionStorage.getItem('GroupId')]['Photo4'] +'></img>'
			}
			else if(countImage == 5){
				imgtags = '<img class="img_51" id="img51" src = data:image/jpg;base64,'+ data[sessionStorage.getItem('GroupId')]['Photo1'] +'></img><img class="img_51" id="img52" src = data:image/jpg;base64,'+ data[sessionStorage.getItem('GroupId')]['Photo2'] +'></img><img class="img_51" id="img53" src = data:image/jpg;base64,'+ data[sessionStorage.getItem('GroupId')]['Photo3'] +'></img><img class="img_52" id="img54" src = data:image/jpg;base64,'+ data[sessionStorage.getItem('GroupId')]['Photo4'] +'></img><img class="img_52" id="img55"src = data:image/jpg;base64,'+ data[sessionStorage.getItem('GroupId')]['Photo5'] +'></img>'
			}
			else if(countImage == 6){
				imgtags = '<img class="img_61" id="img61" src = data:image/jpg;base64,'+ data[sessionStorage.getItem('GroupId')]['Photo1'] +'></img><img class="img_62" id="img62" src = data:image/jpg;base64,'+ data[sessionStorage.getItem('GroupId')]['Photo2'] +'></img><img class="img_62" id="img63" src = data:image/jpg;base64,'+ data[sessionStorage.getItem('GroupId')]['Photo3'] +'></img><img class="img_62" id="img64" src = data:image/jpg;base64,'+ data[sessionStorage.getItem('GroupId')]['Photo4'] +'></img><img class="img_62" id="img65" src = data:image/jpg;base64,'+ data[sessionStorage.getItem('GroupId')]['Photo5'] +'></img><img class="img_62" id="img66"src = data:image/jpg;base64,'+ data[sessionStorage.getItem('GroupId')]['Photo6'] +'></img>'
			}

			$('#l2_list').html(imgtags);
			
		});

		$('#list2_end').bind('click', function(){
			//$('#livi_plateS').height((data.Count * 315) + 30);
			$('#list3').css('display', 'none');
			$('#list2').css('display', 'none');
			$('#listr').css('display', 'block');
			$('#livi_plateS').height((data.Count * 315) + 30);
			if (data.Count > 3) {
				$('#back').height(1065 + ((data.Count - 3) * 315));
				$('#base').height(1470 + ((data.Count - 3) * 315));
				$('#listr').height(980 + ((data.Count - 3) * 315));
				$('#livi_plateS').height((data.Count * 315) + 30);
			}
			else if (data.Count == 0) {
				$('.listview_plus').css('margin-top', '680px');
				$('.null-group').css('display', 'block');
			}
			else{
				$('#back').height(1065);
				$('#base').height(1470);
				$('#listr').height(980);
				//$('#livi_plateS').height((data.Count * 315) + 30);
			}

			EndVis();
			
		});
		$('#list2_print').bind('click', function(){
			$('#a4base').show();
			let tadsa4 = '<div class="a4" id="a4"><div class="a4_name"><b>&nbsp&nbsp' + data[sessionStorage.getItem('GroupId')]['Name'] + '</b></div>';
			if(data[sessionStorage.getItem('GroupId')]['PhotoLogo'] == null){
				tadsa4 += '<div class="a4_img_none"></div>';
			}
			else{
				tadsa4 += '<img class="a4_img" src = data:image/jpg;base64,'+ data[sessionStorage.getItem('GroupId')]['PhotoLogo'] +'></img>';
			}
			tadsa4 += '<div class="a4_genre">'+ data[sessionStorage.getItem('GroupId')]['Capacity'] +'</div><div class="a4_descriptionD"><b>Описание группы:</b> '+ data[sessionStorage.getItem('GroupId')]['DescriptionGroups'] +'</div><div class="a4_mail">' + data[sessionStorage.getItem('GroupId')]['Mail'] + '</div><div class="a4_phone">'+ data[sessionStorage.getItem('GroupId')]['Phone'] +'</div><div class="a4_descriptionB"><b>Описание площадки: </b>'+ data[sessionStorage.getItem('GroupId')]['Description'] +'</div><div class="a4_equipment">' + data[sessionStorage.getItem('GroupId')]['Equipment'] + '</div><div class="a4_location">' + data[sessionStorage.getItem('GroupId')]['Location'] + '</div><div class="a4_outro">Designed by Sound Production</div></div>';
			$('#a4base').html(tadsa4);
			var pdf = new jsPDF('p', 'pt', 'a4');
			pdf.addHTML($('#a4')[0], function () {
				pdf.save(data[sessionStorage.getItem('GroupId')]['Name'] + '.pdf');
			});
			$('#a4base').hide();
		});
		$('#list2_show').bind('click', function(){
			document.body.style.overflow = 'hidden';
			window.scrollTo({
				top: 0
			});
			let countImage = 0;
			if(data[sessionStorage.getItem('GroupId')]['Photo1'] != null){
				countImage++;
			}
			if(data[sessionStorage.getItem('GroupId')]['Photo2'] != null){
				countImage++;
			}
			if(data[sessionStorage.getItem('GroupId')]['Photo3'] != null){
				countImage++;
			}
			if(data[sessionStorage.getItem('GroupId')]['Photo4'] != null){
				countImage++;
			}
			if(data[sessionStorage.getItem('GroupId')]['Photo5'] != null){
				countImage++;
			}
			if(data[sessionStorage.getItem('GroupId')]['Photo6'] != null){
				countImage++;
			}

			if (countImage != 0){
				slideX++;
			}

			let posX = 200;

			$('.pr_base').css('display', 'block');
			$('.pr_base').css('height', 1950);
			$('.pr_base').html('<div class="slide1"></div><div class="slide3"></div>');

			//slide 1

			let slide1Content = '<div class="pr_name">This is '+ data[sessionStorage.getItem('GroupId')]['Name'] +'</div>';

			function closeAnime(){
				document.body.style.overflow = 'visible';
				window.scrollTo({
					top: 0,
					behavior: "smooth"
				});
				$('.pr_base').hide(1000);
			}
			
			if(data[sessionStorage.getItem('GroupId')]['PhotoLogo'] != null){
				
				slide1Content += '<img class="pr_img"  src = data:image/jpg;base64,'+ data[sessionStorage.getItem('GroupId')]['PhotoLogo'] +'></img>';
				slide1Content += '<div class="pr_genre">'+ data[sessionStorage.getItem('GroupId')]['Capacity'] +'</div>';
				slide1Content += '<div class="pr_desc">'+ data[sessionStorage.getItem('GroupId')]['Description'] +'</div>';
				slide1Content += '<div class="pr_desc_areas">'+ data[sessionStorage.getItem('GroupId')]['DescriptionGroups'] +'</div>';
				slide1Content += '<div class="animate-block-exit" id="animate-close">&#10006</div><div class="pr_ad">Designed by Sound Production</div>';
				
				$('.slide1').html(slide1Content);

				$(".pr_name").animate({opacity: "1",}, 1000)
					.animate({top: "180px", fontSize: "64px"}, 400, animateImg);
				function animateImg() {
					$(".pr_img").animate({left: "380px"}, 400, animateImgrotate);
				}
				function animateImgrotate() {
					$(".pr_img").addClass('rotate360').delay(1000);
					animateImgrotateStop();
				}
				function animateImgrotateStop() {
					$(".pr_img").addClass('rotate12');
					animateGenre();
				}
				
			}

			else{
				slide1Content += '<img class="pr_img" src="../img/avatar/area.png"></img>';
				slide1Content += '<div class="pr_genre">'+ data[sessionStorage.getItem('GroupId')]['Capacity'] +'</div>';
				slide1Content += '<div class="pr_desc">'+ data[sessionStorage.getItem('GroupId')]['Description'] +'</div>';
				slide1Content += '<div class="pr_desc_areas">'+ data[sessionStorage.getItem('GroupId')]['DescriptionGroups'] +'</div>';
				slide1Content += '<div class="animate-block-exit" id="animate-close">&#10006</div><div class="pr_ad">Designed by Sound Production</div>';
				
				$('.slide1').html(slide1Content);

				$(".pr_name").animate({opacity: "1",}, 1000)
					.animate({top: "180px", fontSize: "64px"}, 400, animateImg);
				function animateImg() {
					$(".pr_img").animate({left: "380px"}, 400, animateImgrotate);
				}
				function animateImgrotate() {
					$(".pr_img").addClass('rotate360').delay(1000);
					animateImgrotateStop();
				}
				function animateImgrotateStop() {
					$(".pr_img").addClass('rotate12');
					animateGenre();
				}
			}

			function animateGenre() {
				$(".pr_genre").animate({right: "450px"}, 400, animateGenrerotate);
			}
			function animateGenrerotate() {
				$(".pr_genre").addClass('rotate360').delay(1000);
				animateGenrerotateStop();
			}
			function animateGenrerotateStop() {
				$(".pr_genre").addClass('rotate90');
				animateEnd1()
			}
			function animateEnd1() {
				$(".pr_ad").animate({opacity: "1",}, 1000);
				$(".animate-block-exit").animate({opacity: "0.4",}, 1000);
			}

			let CountClick = 0;

			$('.slide1').bind('click', function(){
				CountClick++;
				Slide1Nav();
			})

			function Slide1Nav(){
				if(CountClick == 1){
					$(".pr_genre").animate({top: "1000px"}, 500, animateGenreHide);
					function animateGenreHide() {
						$(".pr_genre").hide();
						$(".pr_desc").animate({right: "350px"}, 500);
					}
				}
				else if(CountClick == 2){
					$(".pr_desc").animate({top: "1000px"}, 500, animateGenreHide);
					function animateGenreHide() {
						$(".pr_desc").hide();
						$(".pr_desc_areas").animate({right: "350px"}, 500);
					}
				}
				else if(CountClick == 3){
					$(".pr_name").css('text-align', 'left');
					$(".pr_name").width(10000);
					$(".pr_name").css('top', '-1000px');
					$(".pr_name").css('left', '-1100px');
					$(".pr_name").css('font-size', '420px');
					$(".pr_name").css('opacity', '0.4');
					$(".pr_name").animate({top: "-300px",}, 500)
					$(".pr_name").css('position', 'fixed');
					$(".animate-block-exit").animate({opacity: "0",}, 1000);
					window.scrollTo({
						top: 985,
						behavior: "smooth"
					});
					$(".animate-block-exit").animate({opacity: "0.4",}, 1000);
					$(".slide3base").addClass('scaleSl3');
				}
			}

			
			let imgtags = '';
			if(countImage == 0){
				imgtags = '<div class="img_null">Изображения не были добавленны</div>'
			}
			else if(countImage == 1){
				imgtags = '<img class="img_1" src = data:image/jpg;base64,'+ data[sessionStorage.getItem('GroupId')]['Photo1'] +'></img>'
			}
			else if(countImage == 2){
				imgtags = '<img class="img_2" id="img21"src = data:image/jpg;base64,'+ data[sessionStorage.getItem('GroupId')]['Photo1'] +'></img><img class="img_2" id="img22" src = data:image/jpg;base64,'+ data[sessionStorage.getItem('GroupId')]['Photo2'] +'></img>'
			}
			else if(countImage == 3){
				imgtags = '<img class="img_31" src = data:image/jpg;base64,'+ data[sessionStorage.getItem('GroupId')]['Photo1'] +'></img><img class="img_32" id="img32" src = data:image/jpg;base64,'+ data[sessionStorage.getItem('GroupId')]['Photo2'] +'></img><img class="img_32" id="img33" src = data:image/jpg;base64,'+ data[sessionStorage.getItem('GroupId')]['Photo3'] +'></img>'
			}
			else if(countImage == 4){
				imgtags = '<img class="img_4" id="img41" src = data:image/jpg;base64,'+ data[sessionStorage.getItem('GroupId')]['Photo1'] +'></img><img class="img_4" id="img42" src = data:image/jpg;base64,'+ data[sessionStorage.getItem('GroupId')]['Photo2'] +'></img><img class="img_4" id="img43" src = data:image/jpg;base64,'+ data[sessionStorage.getItem('GroupId')]['Photo3'] +'></img><img class="img_4" id="img44" src = data:image/jpg;base64,'+ data[sessionStorage.getItem('GroupId')]['Photo4'] +'></img>'
			}
			else if(countImage == 5){
				imgtags = '<img class="img_51" id="img51" src = data:image/jpg;base64,'+ data[sessionStorage.getItem('GroupId')]['Photo1'] +'></img><img class="img_51" id="img52" src = data:image/jpg;base64,'+ data[sessionStorage.getItem('GroupId')]['Photo2'] +'></img><img class="img_51" id="img53" src = data:image/jpg;base64,'+ data[sessionStorage.getItem('GroupId')]['Photo3'] +'></img><img class="img_52" id="img54" src = data:image/jpg;base64,'+ data[sessionStorage.getItem('GroupId')]['Photo4'] +'></img><img class="img_52" id="img55"src = data:image/jpg;base64,'+ data[sessionStorage.getItem('GroupId')]['Photo5'] +'></img>'
			}
			else if(countImage == 6){
				imgtags = '<img class="img_61" id="img61" src = data:image/jpg;base64,'+ data[sessionStorage.getItem('GroupId')]['Photo1'] +'></img><img class="img_62" id="img62" src = data:image/jpg;base64,'+ data[sessionStorage.getItem('GroupId')]['Photo2'] +'></img><img class="img_62" id="img63" src = data:image/jpg;base64,'+ data[sessionStorage.getItem('GroupId')]['Photo3'] +'></img><img class="img_62" id="img64" src = data:image/jpg;base64,'+ data[sessionStorage.getItem('GroupId')]['Photo4'] +'></img><img class="img_62" id="img65" src = data:image/jpg;base64,'+ data[sessionStorage.getItem('GroupId')]['Photo5'] +'></img><img class="img_62" id="img66"src = data:image/jpg;base64,'+ data[sessionStorage.getItem('GroupId')]['Photo6'] +'></img>'
			}
			if (countImage != 0){
				$('.slide3').html('<div class="slide3base"></div><div class="pr_ad2">Designed by Sound Production</div>');
			}
			else{
				$('.slide3').html('<div class="pr_ad2">Designed by Sound Production</div>');
			}
			
			$('.slide3').html(imgtags);

			$('.slide3').bind('click', function(){
				closeAnime();
			})
			$(document).keyup(function(e) {
				if (e.key === "Escape") {
					closeAnime();
			   }
		   });
		});
	});
});