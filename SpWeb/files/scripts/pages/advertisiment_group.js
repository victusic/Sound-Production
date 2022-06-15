$(document).ready(function(){
	$.getJSON('../php/adver_groups.php', function(data) {
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
					'<div class="lv_photos" id="lv_photos'+ i +'"></div>' +
					'<div class="lv_links" id="lv_links'+ i +'"></div>' +
					'<div class="lv_time" id="lv_time'+ i +'"></div>' +
					'<div class="lv_visible" id="lv_visible'+ i +'"></div>' +
				'</div>';
		}
		$('#livi_plateS').html(tags);
		for (let i = 0; i < data.Count; i++) {
			$('#lv_name' + i).html('&nbsp&nbsp' + data[i]['Name']);
			$('#lv_group' + i).html(data[i]['Description']);
			$('#lv_area' + i).html(data[i]['DescriptionAreas']);
			$('#lv_phone' + i).html(data[i]['Phone']);
			$('#lv_mail' + i).html(data[i]['Mail']);
			let genres = '';
			if(data[i]['Genre'] == 1){genres = 'Rock'}
			else if(data[i]['Genre'] == 2){genres = 'Metall'}
			else if(data[i]['Genre'] == 3){genres = 'Rap'}
			else if(data[i]['Genre'] == 4){genres = 'Pop'}
			else if(data[i]['Genre'] == 5){genres = 'K-pop'}
			else if(data[i]['Genre'] == 6){genres = 'Alternative'}
			else if(data[i]['Genre'] == 7){genres = 'Instrumental'}
			else if(data[i]['Genre'] == 8){genres = 'Classical'}
			else if(data[i]['Genre'] == 9){genres = 'Jazz'}
			else if(data[i]['Genre'] == 10){genres = 'Blues'}
			else if(data[i]['Genre'] == 11){genres = 'Autors Song'}
			else if(data[i]['Genre'] == 12){genres = 'Indie'}
			else if(data[i]['Genre'] == 13){genres = 'Another'}

			$('#lv_genre' + i).html(genres);

			//$('#lv_genres' + i).html('state');
			if(data[i]['PhotoLogo'] == null){
				$('#lv_img'+ i).addClass('avatar-none-big2');
			}
			else{
				$('#lv_img'+ i).html('<img id="imgElem' + i +'" class="logo_img" src = data:image/jpg;base64,'+ data[i]['PhotoLogo'] +'></img>');
			}
			let ht = '';
			let countS = 0;
			if(data[i]['SpotifyLink'] != null){
				ht += '<div id="link_spotify'+ i +'" class="links link_spotify"></div>';
				countS++;
			}
			if(data[i]['AppleMusicLink'] != null){
				ht += '<div id="link_apple'+ i +'" class="links link_apple"></div>';
				countS++;
			}
			if(data[i]['YandexMusicLink'] != null){
				ht += '<div id="link_yandex'+ i +'" class="links link_yandex"></div>';
				countS++;
			}
			if(data[i]['DeezerLink'] != null){
				ht += '<div id="link_deezer'+ i +'" class="links link_deezer"></div>';
				countS++;
			}
			if(data[i]['YouTubeMusicLink'] != null){
				ht += '<div id="link_youtubemusic'+ i +'" class="links link_youtubemusic"></div>';
				countS++;
			}
			if(data[i]['YouTubeLink'] != null){
				ht += '<div id="link_youtube'+ i +'" class="links link_youtube"></div>';
				countS++;
			}
			for (let i = 0; i < 6-countS; i++) {
				ht += '<div class="links"></div>';
			}
			$('#lv_links' + i).html(ht);

			let hti = '';
			let countI = 0;
			if(data[i]['Photo1'] != null){
				hti += '<div class="links link_img"></div>';
				countI++;
			}
			if(data[i]['Photo2'] != null){
				hti += '<div class="links link_img"></div>';
				countI++;
			}
			if(data[i]['Photo3'] != null){
				hti += '<div class="links link_img"></div>';
				countI++;
			}
			if(data[i]['Photo4'] != null){
				hti += '<div class="links link_img"></div>';
				countI++;
			}
			if(data[i]['Photo5'] != null){
				hti += '<div class="links link_img"></div>';
				countI++;
			}
			if(data[i]['Photo6'] != null){
				hti += '<div class="links link_img"></div>';
				countI++;
			}
			for (let i = 0; i < 6-countI; i++) {
				hti += '<div class="links"></div>';
			}
			$('#lv_photos' + i).html(hti);



			sessionStorage.setItem('UserId', data[i]['Producer']);

			$.get('../php/get-status-group.php', {text: data[i]['BandId']}, function(data){
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

			//console.log(data[sessionStorage.getItem('GroupId')]['Photo4']);
			$.get('../php/get-status-group.php', {text: data[sessionStorage.getItem('GroupId')]['BandId']}, function(data){
				sessionStorage.setItem('AdvId', data.Id);
			});
			google.charts.load('current', {'packages':['corechart']});
			//1
			google.charts.setOnLoadCallback(drawChart);
			function drawChart() {
				$.get('../php/get-adver-status-device.php', {text: sessionStorage.getItem('AdvId')}, function(data){
					//alert(data['WebDesktop'] + data['WebMobile'] + data['MobileApp']);
					if((data['WebDesktop'] + data['WebMobile'] + data['MobileApp']) == 0){
						var data = new google.visualization.DataTable();
						data.addColumn('string', 'Topping');
						data.addColumn('number', 'Slices');
						data.addRows([
							['Нет просмотров', 1]
						]);
						var options = {
							width: 482.5, 
							height: 200, 
							backgroundColor: {
								fillOpacity: 0
							}

						};
						var chart = new google.visualization.PieChart(document.getElementById('chart_round'));
						chart.draw(data, options);
					}
					else{
						let webP = data['WebDesktop'];
						let webM = data['WebMobile'];
						let AppM = data['MobileApp'];
						var data = new google.visualization.DataTable();
						data.addColumn('string', 'Topping');
						data.addColumn('number', 'Slices');
						data.addRows([
							['Desktop', webP],
							['Mobile device', webM],
							['Mobile app', AppM]
						]);
						var options = {
							width: 482.5, 
							height: 200, 
							backgroundColor: {
								fillOpacity: 0
							}

						};
						var chart = new google.visualization.PieChart(document.getElementById('chart_round'));
						chart.draw(data, options);
					}
					
				});
			}
			//2
			google.charts.load('current', {'packages':['corechart']});
			google.charts.setOnLoadCallback(drawChart1);
			
			function drawChart1() {
				$.get('../php/get-adver-status-visit-count.php', {text: sessionStorage.getItem('AdvId')}, function(data){
					let arrdate = [];
					for (var i = 7; i >= 1; i--) {
						var dateOffset = (24*60*60*1000);
						var myDate = new Date();
						var Offset = dateOffset * i;
						myDate.setTime(myDate.getTime() - Offset);
						let date = ('0' + myDate.getDate()).slice(-2) + '.' + ('0' + (myDate.getMonth() + 1)).slice(-2);
						arrdate.push(date);
					}
					var data = google.visualization.arrayToDataTable([
						['', ''],
						[arrdate[0], data[7]],
						[arrdate[1], data[6]],
						[arrdate[2], data[5]],
						[arrdate[3], data[4]],
						[arrdate[4], data[3]],
						[arrdate[5], data[2]],
						[arrdate[6], data[1]]
					]);
					var options = {
						width: 482.5, 
						height: 200, 
						backgroundColor: {
							fillOpacity: 0
						}
					}
					var chart1 = new google.visualization.ColumnChart(document.getElementById('chart_column'));
					chart1.draw(data, options);
				});
			}
			//3
			google.charts.load('current', {'packages':['corechart']});
			google.charts.setOnLoadCallback(drawChart2);
			function drawChart2() {
				$.get('../php/get-adver-status-time.php', {text: sessionStorage.getItem('AdvId')}, function(data){
					let arrdate = [];
					for (var i = 7; i >= 1; i--) {
						var dateOffset = (24*60*60*1000);
						var myDate = new Date();
						var Offset = dateOffset * i;
						myDate.setTime(myDate.getTime() - Offset);
						let date = ('0' + myDate.getDate()).slice(-2) + '.' + ('0' + (myDate.getMonth() + 1)).slice(-2);
						arrdate.push(date);
					}
					var data = google.visualization.arrayToDataTable([
						['', ''],
						[arrdate[0], data[7]],
						[arrdate[1], data[6]],
						[arrdate[2], data[5]],
						[arrdate[3], data[4]],
						[arrdate[4], data[3]],
						[arrdate[5], data[2]],
						[arrdate[6], data[1]]
					]);
					var options = {
						width: 482.5, 
						height: 200, 
						backgroundColor: {
							fillOpacity: 0
						}
					};
					var chart2 = new google.visualization.LineChart(document.getElementById('chart_line'));
					chart2.draw(data, options);
				});
			}
			$('#listr').css('display', 'none');
			$('#list2').css('display', 'block');
			$('#list3').css('display', 'block')
			$('#back').height(1620);
			$('#base').height(2030);

			$('#list2_name').html('&nbsp&nbsp' + data[sessionStorage.getItem('GroupId')]['Name']);
			$('#list2_genre').html(data[sessionStorage.getItem('GroupId')]['Genre']);
			$('#list2_group').html(data[sessionStorage.getItem('GroupId')]['Description']);
			$('#list2_about_area').html(data[sessionStorage.getItem('GroupId')]['DescriptionAreas']);
			$('#listn').css('display', 'block');
			$('#list2_mail').html(data[sessionStorage.getItem('GroupId')]['Mail']);
			$('#list2_phone').html(data[sessionStorage.getItem('GroupId')]['Phone']);

		

			let link_h = '';

			if(data[sessionStorage.getItem('GroupId')]['SpotifyLink'] != null){
				link_h += '<div class="link2base"><a href="'+ data[sessionStorage.getItem('GroupId')]['SpotifyLink'] + '" class="link2plate"><div class="link2S link_spotify"></div><div class="link2Text">Spotify</div></a></div>';
			}
			if(data[sessionStorage.getItem('GroupId')]['AppleMusicLink'] != null){
				link_h += '<div class="link2base"><a href="' + data[sessionStorage.getItem('GroupId')]['AppleMusicLink'] + '" class="link2plate"><div class="link2S link_apple"></div><div class="link2Text">Apple music</div></a></div>';
			}
			if(data[sessionStorage.getItem('GroupId')]['YandexMusicLink'] != null){
				link_h += '<div class="link2base"><a href="' + data[sessionStorage.getItem('GroupId')]['YandexMusicLink'] + '" class="link2plate"><div class="link2S link_yandex"></div><div class="link2Text">Yandex music</div></a></div>';
			}
			if(data[sessionStorage.getItem('GroupId')]['DeezerLink'] != null){
				link_h += '<div class="link2base"><a href="' + data[sessionStorage.getItem('GroupId')]['DeezerLink'] + '" class="link2plate"><div class="link2S link_deezer"></div><div class="link2Text">Deezer</div></a></div>';
			}
			if(data[sessionStorage.getItem('GroupId')]['YouTubeLink'] != null){
				link_h += '<div class="link2base"><a href="' + data[sessionStorage.getItem('GroupId')]['YouTubeLink'] + '" class="link2plate"><div class="link2S link_youtube"></div><div class="link2Text">YouTube</div></a></div>';
			}
			if(data[sessionStorage.getItem('GroupId')]['YouTubeMusicLink'] != null){
				link_h += '<div class="link2base"><a href="' + data[sessionStorage.getItem('GroupId')]['YouTubeMusicLink'] + '" class="link2plate"><div class="link2S link_youtubemusic"></div><div class="link2Text">YouTube Music</div></a></div>';
			}
			
			$('#list2_spotify').html(link_h);

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
			let genres = '';
			if(data[sessionStorage.getItem('GroupId')]['Genre'] == 1){genres = 'Rock'}
			else if(data[sessionStorage.getItem('GroupId')]['Genre'] == 2){genres = 'Metall'}
			else if(data[sessionStorage.getItem('GroupId')]['Genre'] == 3){genres = 'Rap'}
			else if(data[sessionStorage.getItem('GroupId')]['Genre'] == 4){genres = 'Pop'}
			else if(data[sessionStorage.getItem('GroupId')]['Genre'] == 5){genres = 'K-pop'}
			else if(data[sessionStorage.getItem('GroupId')]['Genre'] == 6){genres = 'Alternative'}
			else if(data[sessionStorage.getItem('GroupId')]['Genre'] == 7){genres = 'Instrumental'}
			else if(data[sessionStorage.getItem('GroupId')]['Genre'] == 8){genres = 'Classical'}
			else if(data[sessionStorage.getItem('GroupId')]['Genre'] == 9){genres = 'Jazz'}
			else if(data[sessionStorage.getItem('GroupId')]['Genre'] == 10){genres = 'Blues'}
			else if(data[sessionStorage.getItem('GroupId')]['Genre'] == 11){genres = 'Autors Song'}
			else if(data[sessionStorage.getItem('GroupId')]['Genre'] == 12){genres = 'Indie'}
			else if(data[sessionStorage.getItem('GroupId')]['Genre'] == 13){genres = 'Another'}

			$('#list2_genre').html(genres);


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
			let genres = '';
			if(data[sessionStorage.getItem('GroupId')]['Genre'] == 1){genres = 'Rock'}
			else if(data[sessionStorage.getItem('GroupId')]['Genre'] == 2){genres = 'Metall'}
			else if(data[sessionStorage.getItem('GroupId')]['Genre'] == 3){genres = 'Rap'}
			else if(data[sessionStorage.getItem('GroupId')]['Genre'] == 4){genres = 'Pop'}
			else if(data[sessionStorage.getItem('GroupId')]['Genre'] == 5){genres = 'K-pop'}
			else if(data[sessionStorage.getItem('GroupId')]['Genre'] == 6){genres = 'Alternative'}
			else if(data[sessionStorage.getItem('GroupId')]['Genre'] == 7){genres = 'Instrumental'}
			else if(data[sessionStorage.getItem('GroupId')]['Genre'] == 8){genres = 'Classical'}
			else if(data[sessionStorage.getItem('GroupId')]['Genre'] == 9){genres = 'Jazz'}
			else if(data[sessionStorage.getItem('GroupId')]['Genre'] == 10){genres = 'Blues'}
			else if(data[sessionStorage.getItem('GroupId')]['Genre'] == 11){genres = 'Autors Song'}
			else if(data[sessionStorage.getItem('GroupId')]['Genre'] == 12){genres = 'Indie'}
			else if(data[sessionStorage.getItem('GroupId')]['Genre'] == 13){genres = 'Another'}
			tadsa4 += '<div class="a4_genre">'+ genres +'</div><div class="a4_descriptionD"><b>Описание рекомендуемой площадки:</b> '+ data[sessionStorage.getItem('GroupId')]['DescriptionAreas'] +'</div><div class="a4_mail">' + data[sessionStorage.getItem('GroupId')]['Mail'] + '</div><div class="a4_phone">'+ data[sessionStorage.getItem('GroupId')]['Phone'] +'</div><div class="a4_descriptionB"><b>Описание группы: </b>'+ data[sessionStorage.getItem('GroupId')]['Description'] +'</div><div class="a4_outro">Designed by Sound Production</div></div>';
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
			let countLi = 0;
			if(data[sessionStorage.getItem('GroupId')]['SpotifyLink'] != null){
				countLi += 1;
			}
			if(data[sessionStorage.getItem('GroupId')]['AppleMusicLink'] != null){
				countLi += 1;
			}
			if(data[sessionStorage.getItem('GroupId')]['YandexMusicLink'] != null){
				countLi += 1;
			}
			if(data[sessionStorage.getItem('GroupId')]['DeezerLink'] != null){
				countLi += 1;
			}
			if(data[sessionStorage.getItem('GroupId')]['YouTubeLink'] != null){
				countLi += 1;
			}
			if(data[sessionStorage.getItem('GroupId')]['YouTubeMusicLink'] != null){
				countLi += 1;
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

			let slideX = 1;
			let slideY = 0;

			if (countLi != 0){
				slideX++;
				slideY = countLi;
			}
			if (countImage != 0){
				slideX++;
			}

			//let posX = slideX * 100;
			let posX = 300;

			$('.pr_base').css('display', 'block');
			$('.pr_base').css('height', posX+'%');
			$('.pr_base').html('<div class="slide1"></div><div class="slide2"></div><div class="slide3"></div>');

			let posY = 1950;

			if(slideY != 0){
				posY *= slideY;
				$('.slide2').width(posY);
			}

			posY -= 1950;

			$('.slide3').css('margin-left', posY+'px');

			//slide 1

			let genres = '';
			if(data[sessionStorage.getItem('GroupId')]['Genre'] == 1){genres = 'Rock'}
			else if(data[sessionStorage.getItem('GroupId')]['Genre'] == 2){genres = 'Metall'}
			else if(data[sessionStorage.getItem('GroupId')]['Genre'] == 3){genres = 'Rap'}
			else if(data[sessionStorage.getItem('GroupId')]['Genre'] == 4){genres = 'Pop'}
			else if(data[sessionStorage.getItem('GroupId')]['Genre'] == 5){genres = 'K-pop'}
			else if(data[sessionStorage.getItem('GroupId')]['Genre'] == 6){genres = 'Alternative'}
			else if(data[sessionStorage.getItem('GroupId')]['Genre'] == 7){genres = 'Instrumental'}
			else if(data[sessionStorage.getItem('GroupId')]['Genre'] == 8){genres = 'Classical'}
			else if(data[sessionStorage.getItem('GroupId')]['Genre'] == 9){genres = 'Jazz'}
			else if(data[sessionStorage.getItem('GroupId')]['Genre'] == 10){genres = 'Blues'}
			else if(data[sessionStorage.getItem('GroupId')]['Genre'] == 11){genres = 'Autors Song'}
			else if(data[sessionStorage.getItem('GroupId')]['Genre'] == 12){genres = 'Indie'}
			else if(data[sessionStorage.getItem('GroupId')]['Genre'] == 13){genres = 'Another'}

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
				slide1Content += '<div class="pr_genre">'+ genres +'</div>';
				slide1Content += '<div class="pr_desc">'+ data[sessionStorage.getItem('GroupId')]['Description'] +'</div>';
				slide1Content += '<div class="pr_desc_areas">'+ data[sessionStorage.getItem('GroupId')]['DescriptionAreas'] +'</div>';
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
				slide1Content += '<img class="pr_img" src="../img/avatar/group.png"></img>';
				slide1Content += '<div class="pr_genre">'+ genres +'</div>';
				slide1Content += '<div class="pr_desc">'+ data[sessionStorage.getItem('GroupId')]['Description'] +'</div>';
				slide1Content += '<div class="pr_desc_areas">'+ data[sessionStorage.getItem('GroupId')]['DescriptionAreas'] +'</div>';
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
				}
			}

			slide2Content = '';

			if(data[sessionStorage.getItem('GroupId')]['SpotifyLink'] != null){
				slide2Content += '<div class="listSpotify animeLink"><img class="link_sp_img" src = data:image/jpg;base64,'+ data[sessionStorage.getItem('GroupId')]['PhotoLogo'] +'></img><a class="link_sp_bage" href="'+ data[sessionStorage.getItem('GroupId')]['SpotifyLink'] +'"></a><div class="link_sp_logo"></div></div>';
			}
			if(data[sessionStorage.getItem('GroupId')]['AppleMusicLink'] != null){
				slide2Content += '<div class="listApple animeLink"><img class="link_ap_img" src = data:image/jpg;base64,'+ data[sessionStorage.getItem('GroupId')]['PhotoLogo'] +'></img><a class="link_ap_bage" href="'+ data[sessionStorage.getItem('GroupId')]['AppleMusicLink'] +'"></a><div class="link_ap_logo"></div><div class="link_ap_name">'+ data[sessionStorage.getItem('GroupId')]['Name'] +'</div></div>';
			}
			if(data[sessionStorage.getItem('GroupId')]['YandexMusicLink'] != null){
				slide2Content += '<div class="listYandex animeLink"><img class="link_yap_img" src = data:image/jpg;base64,'+ data[sessionStorage.getItem('GroupId')]['PhotoLogo'] +'></img><a class="link_yap_bage" href="'+ data[sessionStorage.getItem('GroupId')]['YandexMusicLink'] +'"></a><div class="link_yap_logo"></div><div class="link_yap_name">'+ data[sessionStorage.getItem('GroupId')]['Name'] +'</div></div>';
			}
			if(data[sessionStorage.getItem('GroupId')]['DeezerLink'] != null){
				slide2Content += '<div class="listDeezer animeLink"><a class="link_dp_bage" href="'+ data[sessionStorage.getItem('GroupId')]['DeezerLink'] +'"></a></div>';
			}
			if(data[sessionStorage.getItem('GroupId')]['YouTubeLink'] != null){
				slide2Content += '<div class="listYouTube animeLink"><div class="link_playa_y"><img class="link_y_img" src = data:image/jpg;base64,'+ data[sessionStorage.getItem('GroupId')]['PhotoLogo'] +'></img><a class="link_y_bage" href="'+ data[sessionStorage.getItem('GroupId')]['YouTubeLink'] +'"></a></div></div>';
			}
			if(data[sessionStorage.getItem('GroupId')]['YouTubeMusicLink'] != null){
				slide2Content += '<div class="listYouTubeMusic animeLink"><div class="link_ytb_img"></div><a class="link_ytb_bage" href="'+ data[sessionStorage.getItem('GroupId')]['YouTubeMusicLink'] +'"></a><div class="link_ytb_name">'+ data[sessionStorage.getItem('GroupId')]['Name'] +'</div></div>';
			}

			$('.slide2').html(slide2Content);

			//поиск последнего
			if(data[sessionStorage.getItem('GroupId')]['YouTubeMusicLink'] != null){
				$('.listYouTubeMusic').removeClass('animeLink').addClass('animeLinkEnd');
			}
			else{
				if(data[sessionStorage.getItem('GroupId')]['YouTubeLink'] != null){
					$('.listYouTube').removeClass('animeLink').addClass('animeLinkEnd');
				}
				else{
					if(data[sessionStorage.getItem('GroupId')]['DeezerLink'] != null){
						$('.listDeezer').removeClass('animeLink').addClass('animeLinkEnd');
					}
					else{
						if(data[sessionStorage.getItem('GroupId')]['YandexMusicLink'] != null){
							$('.listYandex').removeClass('animeLink').addClass('animeLinkEnd');
						}
						else{
							if(data[sessionStorage.getItem('GroupId')]['AppleMusicLink'] != null){
								$('.listApple').removeClass('animeLink').addClass('animeLinkEnd');
							}
							else{
								$('.listSpotify').removeClass('animeLink').addClass('animeLinkEnd');
							}
						}
					}
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
			
			$('.slide3base').html(imgtags);

			let NavY = 0;

			$('.animeLink').bind('click', function(){
				NavY += 1950;
				$(".animate-block-exit").animate({opacity: "0",}, 1000);
				window.scrollTo({
					left: NavY,
					behavior: "smooth"
				});
				$(".animate-block-exit").animate({opacity: "0.4",}, 1000);
			})

			$('.animeLinkEnd').bind('click', function(){
				$(".animate-block-exit").animate({opacity: "0",}, 1000);
				window.scrollTo({
					top: 1970,
					behavior: "smooth"
				});
				$(".slide3base").addClass('scaleSl3');
				$(".pr_ad2").animate({opacity: "1",}, 1000);
				$(".animate-block-exit").animate({opacity: "0.4",}, 1000);
			})

			$('.animate-block-exit').bind('click', function(){
				closeAnime();
			});

			$('.slide3').bind('click', function(){
				closeAnime();
			})
			$('.slide2').bind('click', function(){
				if(countLi == 0){
					closeAnime();
				}
			})
			$(document).keyup(function(e) {
				if (e.key === "Escape") {
					closeAnime();
			   }
		   });
		});
	});
});