$(document).ready(function(){
	$.getJSON('../php/areas.php', function(data) {
		//console.log(data);
		$('#livi_plate').height((data.Count * 215) + 30);
		$('#livi_plate').css('display', 'block');
		$('#preloader_group').css('display', 'none');
		let tags = '';
		for (let i = 0; i < data.Count; i++) {
			tags += '<div class="listview" id="listview' + i + '" onclick="sessionStorage.setItem(`GroupId`, ' + i +');">' + 
					'<div class="lv_img" id="lv_img'+ i +'"></div>' +
					'<div class="lv_name" id="lv_name' + i +'"></div>' +
					'<div class="lv_group" id="lv_group' + i +'"></div>' +
					'<div class="lv_area" id="lv_area'+ i +'"></div>' +
					'<div class="lv_phone" id="lv_phone'+ i +'"></div>' +
					'<div class="lv_mail" id="lv_mail'+ i +'">Адрес почты</div>' +
					'<div class="lv_links" id="lv_links'+ i +'"></div>' +
				'</div>';
		}
		tags += '<div class="listview_plus" id="listview_plus"><div class="plus_center" Id="plus_center">Добавить запись</div></div>';
		$('#livi_plate').html(tags);
		for (let i = 0; i < data.Count; i++) {
			$('#lv_name' + i).html('&nbsp&nbsp' + data[i]['Name']);
			$('#lv_group' + i).html(data[i]['Description']);
			$('#lv_area' + i).html(data[i]['DescriptionGroups']);
			$('#lv_phone' + i).html(data[i]['Phone']);
			$('#lv_mail' + i).html(data[i]['Mail']);
			$('#lv_links' + i).html(data[i]['Capacity']);
			if(data[i]['PhotoLogo'] == null){
				$('#lv_img'+ i).addClass('avatar-none');
			}
			else{
				$('#lv_img'+ i).html('<img id="imgElem' + i +'" class="logo_img" src = data:image/jpg;base64,'+ data[i]['PhotoLogo'] +'></img>');
			}
			sessionStorage.setItem('UserId', data[i]['Representative']);
		}
		if (data.Count > 3) {
			$('#back').height(870 + ((data.Count - 3) * 215));
			$('#base').height(1275 + ((data.Count - 3) * 215));
			$('#listr').height(780 + ((data.Count - 3) * 215));
		}

		if (data.Count == 0) {
			$('.listview_plus').css('margin-top', '680px');
			$('.null-group').css('display', 'block');
			$.getJSON('../php/loading_data_profile.php', function(data) {
				sessionStorage.setItem('UserId', data.id);
			})
		}

		$('#plus_center').bind('click', function(){
			$('#back').height(1545);
			$('#base').height(1955);
			$('#listr').css('display', 'none');
			$('#list3').css('display', 'block');
			$('#listn3').css('display', 'block');
			//$('list3_end3').css('display', 'block');
		});

		$('.listview').bind('click', function(){
			

			$.get('../php/get-status-area.php', {text: data[sessionStorage.getItem('GroupId')]['AreaId']}, function(data){
				//console.log(data);
				sessionStorage.setItem('State', data.status);
				if (data.status == 0) {
					$('#list2_panl_state').html('Статус объявления: проходит проверку');
					$('#l2_btns_shoot').css('display', 'block');
				}
				else if (data.status == 1) {
					$('#list2_panl_state').html('Статус объявления: опубликовано');
					$('#l2_btns_shoot').css('display', 'block');
				}
				else if (data.status == null) {
					$('#list2_panl_state').html('Статус объявления: не опубликовано');
					$('#l2_btns_pub').css('display', 'block');
				}
			});

			sessionStorage.setItem('IdG', data[sessionStorage.getItem('GroupId')]['AreaId']);
			//alert(sessionStorage.getItem('IdG'));
			$('#listr').css('display', 'none');
			$('#list2').css('display', 'block');
			$('#back').height(1545);
			$('#base').height(1955);
			$('#list2_name').html('&nbsp&nbsp' + data[sessionStorage.getItem('GroupId')]['Name']);
			$('#list2_inp_name').val(data[sessionStorage.getItem('GroupId')]['Name']);
			$('#list2_group').val(data[sessionStorage.getItem('GroupId')]['Description']);
			$('#list2_about_area').val(data[sessionStorage.getItem('GroupId')]['DescriptionGroups']);
			$('#listn').css('display', 'block');
			$('#list2_mail').val(data[sessionStorage.getItem('GroupId')]['Mail']);
			$('#list2_phone').val(data[sessionStorage.getItem('GroupId')]['Phone']);
			$('#list2_capacity').val(data[sessionStorage.getItem('GroupId')]['Capacity']);
			$('#list2_equipment').val(data[sessionStorage.getItem('GroupId')]['Equipment']);
			$('#list2_location').val(data[sessionStorage.getItem('GroupId')]['Location']);
			if(data[sessionStorage.getItem('GroupId')]['PhotoLogo'] == null){
				$('.list2_img').html('<div class="avatar-none-big"></div>');
			}
			else{
				//console.log(data[sessionStorage.getItem('GroupId')]['PhotoLogo']);
				$('.list2_img').html('<img class="logo_img_list" src = data:image/jpg;base64,'+ data[sessionStorage.getItem('GroupId')]['PhotoLogo'] +'></img>');
			}

			for (var i = 1; i < 7; i++) {
				let rc = Math.floor(Math.random() * (6 - 1)) + 1;
				if (rc == 1) {
					$('#dimg' + i + '_btn').css('background-color', 'var(--pink)');
				}
				else if (rc == 2) {
					$('#dimg' + i + '_btn').css('background-color', 'var(--green)');
				}
				else if (rc == 3) {
					$('#dimg' + i + '_btn').css('background-color', 'var(--blue)');
				}
				else if (rc == 4) {
					$('#dimg' + i + '_btn').css('background-color', 'var(--purple)');
				}
				else if (rc == 5) {
					$('#dimg' + i + '_btn').css('background-color', 'var(--yellow)');
				}
			}

			for (var i = 1; i < 7; i++) {
				let rc = Math.floor(Math.random() * (6 - 1)) + 1;
				if (rc == 1) {
					$('#dimg1' + i + '_btn').css('background-color', 'var(--pink)');
				}
				else if (rc == 2) {
					$('#dimg1' + i + '_btn').css('background-color', 'var(--green)');
				}
				else if (rc == 3) {
					$('#dimg1' + i + '_btn').css('background-color', 'var(--blue)');
				}
				else if (rc == 4) {
					$('#dimg1' + i + '_btn').css('background-color', 'var(--purple)');
				}
				else if (rc == 5) {
					$('#dimg1' + i + '_btn').css('background-color', 'var(--yellow)');
				}
			}

			if(data[sessionStorage.getItem('GroupId')]['Photo1'] != null){
				$('#dimg1').html('<img class="img-photo" src = data:image/jpg;base64,'+ data[sessionStorage.getItem('GroupId')]['Photo1'] +'></img>');
				$('#dimg1_btn').css('display','block');
			}
			else{
				$('#dimg1').html('');
				$('#dimg1_btn').css('display','none');
			}
			if(data[sessionStorage.getItem('GroupId')]['Photo2'] != null){
				$('#dimg2').html('<img class="img-photo" src = data:image/jpg;base64,'+ data[sessionStorage.getItem('GroupId')]['Photo2'] +'></img>');
				$('#dimg2_btn').css('display','block');
			}
			else{
				$('#dimg2').html('');
				$('#dimg2_btn').css('display','none');
			}
			if(data[sessionStorage.getItem('GroupId')]['Photo3'] != null){
				$('#dimg3').html('<img class="img-photo" src = data:image/jpg;base64,'+ data[sessionStorage.getItem('GroupId')]['Photo3'] +'></img>');
				$('#dimg3_btn').css('display','block');
			}
			else{
				$('#dimg3').html('');
				$('#dimg3_btn').css('display','none');
			}
			if(data[sessionStorage.getItem('GroupId')]['Photo4'] != null){
				$('#dimg4').html('<img class="img-photo" src = data:image/jpg;base64,'+ data[sessionStorage.getItem('GroupId')]['Photo4'] +'></img>');
				$('#dimg4_btn').css('display','block');
			}
			else{
				$('#dimg4').html('');
				$('#dimg4_btn').css('display','none');
			}
			if(data[sessionStorage.getItem('GroupId')]['Photo5'] != null){
				$('#dimg5').html('<img class="img-photo" src = data:image/jpg;base64,'+ data[sessionStorage.getItem('GroupId')]['Photo5'] +'></img>');
				$('#dimg5_btn').css('display','block');
			}
			else{
				$('#dimg5').html('');
				$('#dimg5_btn').css('display','none');
			}
			if(data[sessionStorage.getItem('GroupId')]['Photo6'] != null){
				$('#dimg6').html('<img class="img-photo" src = data:image/jpg;base64,'+ data[sessionStorage.getItem('GroupId')]['Photo6'] +'></img>');
				$('#dimg6_btn').css('display','block');
			}
			else{
				$('#dimg6').html('');
				$('#dimg6_btn').css('display','none');
			}

			if (data[sessionStorage.getItem('GroupId')]['Photo1'] == null) {
				localStorage.setItem('img1' + sessionStorage.getItem('IdG'), null);
			}
			if(data[sessionStorage.getItem('GroupId')]['Photo2'] == null){
				localStorage.setItem('img2' + sessionStorage.getItem('IdG'), null);
			}
			if(data[sessionStorage.getItem('GroupId')]['Photo3'] == null){
				localStorage.setItem('img3' + sessionStorage.getItem('IdG'), null);
			}
			if(data[sessionStorage.getItem('GroupId')]['Photo4'] == null){
				localStorage.setItem('img4' + sessionStorage.getItem('IdG'), null);
			}
			if(data[sessionStorage.getItem('GroupId')]['Photo5'] == null){
				localStorage.setItem('img5' + sessionStorage.getItem('IdG'), null);
			}
			if(data[sessionStorage.getItem('GroupId')]['Photo6'] == null){
				localStorage.setItem('img6' + sessionStorage.getItem('IdG'), null);
			}


			//публикация записи
			$('#l2_btns_pub').bind('click', function() {
				$.get('../php/pub-areas.php', {BandId: sessionStorage.getItem('IdG')}, function(data){
					//console.log(sessionStorage.getItem('IdG'));
					location.reload();
				});
			});

			//снятие запись с публикации
			$('#l2_btns_shoot').bind('click', function() {
				$.get('../php/shoot-areas.php', {BandId: sessionStorage.getItem('IdG')}, function(data){
					location.reload();
				});
			});

			//редактирование записи
			$('#l2_btns_save').bind('click', function() {
				let wrng = 0;
				if ($('#list2_inp_name').val() == "") {
					wrng++;
					$('#l2_inp_name').css('color', 'var(--errorfont)');
				}
				if ($('#list2_mail').val() == "") {
					wrng++;
					$('#l2_mail').css('color', 'var(--errorfont)');
				}
				if ($('#list2_phone').val() == "") {
					wrng++;
					$('#l2_phone').css('color', 'var(--errorfont)');
				}
				if ($('#list2_group').val() == "") {
					wrng++;
					$('#l2_group').css('color', 'var(--errorfont)');
				}
				if ($('#list2_about_area').val() == "") {
					wrng++;
					$('#l2_aarea').css('color', 'var(--errorfont)');
				}
				if ($('#list2_capacity').val() == "") {
					wrng++;
					$('#l2_genre').css('color', 'var(--errorfont)');
				}
				if ($('#list2_equipment').val() == "") {
					wrng++;
					$('#l2_equipment').css('color', 'var(--errorfont)');
				}
				if ($('#list2_location').val() == "") {
					wrng++;
					$('#l2_location').css('color', 'var(--errorfont)');
				}
				
				if(wrng == 0){
					let dates = {
						AreaId: sessionStorage.getItem('IdG'),
						Name: $('#list2_inp_name').val(),
						Representative: sessionStorage.getItem('UserId'),
						Description: $('#list2_group').val(),
						DescriptionGroups: $('#list2_about_area').val(),
					};
					//console.log(localStorage.getItem('logo'));
					if (localStorage.getItem('logo' + sessionStorage.getItem('IdG')) != null) {
						data[sessionStorage.getItem('GroupId')]['PhotoLogo'] = localStorage.getItem('logo' + sessionStorage.getItem('IdG'));
						//alert(localStorage.getItem('logo'));
						//alert();
					}
					if (data[sessionStorage.getItem('GroupId')]['PhotoLogo'] == 'null') {
						//dates.push(PhotoLogo: null);
						dates['PhotoLogo'] = null;
					}
					else{
						dates['PhotoLogo'] = data[sessionStorage.getItem('GroupId')]['PhotoLogo'];
						//dates.push(PhotoLogo: data[sessionStorage.getItem('GroupId')]['PhotoLogo']);
					}


					if (localStorage.getItem('img1' + sessionStorage.getItem('IdG')) == 'null') {
						//dates.push(Photo1: null);
						dates['Photo1'] = null;
					}
					else{dates['Photo1'] =  localStorage.getItem('img1' + sessionStorage.getItem('IdG'));}
					if (localStorage.getItem('img2' + sessionStorage.getItem('IdG')) == 'null') {
						dates['Photo2'] = null;
					}
					else{dates['Photo2'] =  localStorage.getItem('img2' + sessionStorage.getItem('IdG'));}
					if (localStorage.getItem('img3' + sessionStorage.getItem('IdG')) == 'null') {
						dates['Photo3'] = null;
					}
					else{dates['Photo3'] =  localStorage.getItem('img3' + sessionStorage.getItem('IdG'));}
					if (localStorage.getItem('img4' + sessionStorage.getItem('IdG')) == 'null') {
						dates['Photo4'] = null;
					}
					else{dates['Photo4'] =  localStorage.getItem('img4' + sessionStorage.getItem('IdG'));}
					if (localStorage.getItem('img5' + sessionStorage.getItem('IdG')) == 'null') {
						dates['Photo5'] = null;
					}
					else{dates['Photo5'] =  localStorage.getItem('img5' + sessionStorage.getItem('IdG'));}
					if (localStorage.getItem('img6' + sessionStorage.getItem('IdG')) == 'null') {
						dates['Photo6'] = null;
					}
					else{dates['Photo6'] =  localStorage.getItem('img6' + sessionStorage.getItem('IdG'));}

					dates['Phone'] = $('#list2_phone').val();
					dates['Mail'] = $('#list2_mail').val();
					dates['Capacity'] = $('#list2_capacity').val();
					dates['Equipment'] = $('#list2_equipment').val();
					dates['Location'] = $('#list2_location').val();

					//console.log(dates);

					let json = JSON.stringify(dates);

					$.ajax({
						type: 'POST',
						url: "../php/save-areas.php",
						dataType: 'json',
						cache: false,
						data: {myData: json, id: data[sessionStorage.getItem('GroupId')]['BandId']},
						success: function(data) {
						}
					});
					location.reload();
				}
			});

			//удаление записи
			$('#l2_btns_del').bind('click', function() {
				if(sessionStorage.getItem('State') == 0 || sessionStorage.getItem('State') == 1){
					alert('Снимите объявление с публикации перед удалением');
				}
				else{
					$.get('../php/del-areas.php', {text: sessionStorage.getItem('IdG')}, function(data){
						location.reload();
					});
				}
			});
			

			function rrt(){
				$.get('../php/reading-img.php', {text: 'Текст'}, function(data){

					//console.log(localStorage.getItem('img1'  + sessionStorage.getItem('IdG')));
					if (localStorage.getItem('img1' + sessionStorage.getItem('IdG')) == 'null') {
						$('#dimg1').html('<img class="uplo_image" src = data:image/jpg;base64,'+ data +'></img>');
						$('#dimg1_btn').css('display','block');
						localStorage.setItem('img1' + sessionStorage.getItem('IdG'), data);
					}
					else{
						if (localStorage.getItem('img2' + sessionStorage.getItem('IdG')) == 'null') {
							$('#dimg2').html('<img class="uplo_image" src = data:image/jpg;base64,'+ data +'></img>');
							$('#dimg2_btn').css('display','block');
							localStorage.setItem('img2' + sessionStorage.getItem('IdG'), data);
						}
						else{
							if (localStorage.getItem('img3' + sessionStorage.getItem('IdG')) == 'null') {
								$('#dimg3').html('<img class="uplo_image" src = data:image/jpg;base64,'+ data +'></img>');
								$('#dimg3_btn').css('display','block');
								localStorage.setItem('img3' + sessionStorage.getItem('IdG'), data);
							}
							else{
								if (localStorage.getItem('img4' + sessionStorage.getItem('IdG')) == 'null') {
									$('#dimg4').html('<img class="uplo_image" src = data:image/jpg;base64,'+ data +'></img>');
									$('#dimg4_btn').css('display','block');
									localStorage.setItem('img4' + sessionStorage.getItem('IdG'), data);
								}
								else{
									if (localStorage.getItem('img5' + sessionStorage.getItem('IdG')) == 'null') {
										$('#dimg5').html('<img class="uplo_image" src = data:image/jpg;base64,'+ data +'></img>');
										$('#dimg5_btn').css('display','block');
										localStorage.setItem('img5' + sessionStorage.getItem('IdG'), data);
									}
									else{
										if (localStorage.getItem('img6' + sessionStorage.getItem('IdG')) == 'null') {
											$('#dimg6').html('<img class="uplo_image" src = data:image/jpg;base64,'+ data +'></img>');
											$('#dimg6_btn').css('display','block');
											localStorage.setItem('img6' + sessionStorage.getItem('IdG'), data);
										}
										else{
											alert('Закончилось место');
										}
									}
								}
							}
						}
					}
				});
			}
			function rrt3(){
				$.get('../php/reading-img.php', {text: 'Текст'}, function(data){

					if (localStorage.getItem('img1') == 'null') {
						$('#dimg11').html('<img class="uplo_image" src = data:image/jpg;base64,'+ data +'></img>');
						$('#dimg11_btn').css('display','block');
						localStorage.setItem('img1', data);
					}
					else{
						if (localStorage.getItem('img2') == 'null') {
							$('#dimg12').html('<img class="uplo_image" src = data:image/jpg;base64,'+ data +'></img>');
							$('#dimg12_btn').css('display','block');
							localStorage.setItem('img2', data);
						}
						else{
							if (localStorage.getItem('img3') == 'null') {
								$('#dimg13').html('<img class="uplo_image" src = data:image/jpg;base64,'+ data +'></img>');
								$('#dimg13_btn').css('display','block');
								localStorage.setItem('img3', data);
							}
							else{
								if (localStorage.getItem('img4') == 'null') {
									$('#dimg14').html('<img class="uplo_image" src = data:image/jpg;base64,'+ data +'></img>');
									$('#dimg14_btn').css('display','block');
									localStorage.setItem('img4', data);
								}
								else{
									if (localStorage.getItem('img5') == 'null') {
										$('#dimg15').html('<img class="uplo_image" src = data:image/jpg;base64,'+ data +'></img>');
										$('#dimg15_btn').css('display','block');
										localStorage.setItem('img5', data);
									}
									else{
										if (localStorage.getItem('img6') == 'null') {
											$('#dimg16').html('<img class="uplo_image" src = data:image/jpg;base64,'+ data +'></img>');
											$('#dimg16_btn').css('display','block');
											localStorage.setItem('img6', data);
										}
										else{
											alert('Закончилось место');
										}
									}
								}
							}
						}
					}
				});
			}
			//загрузка изображения2
			$('#uploader').submit(function(e){
				e.preventDefault();
			 
				var file = $('#upload-file__input').prop('files')[0];
			 
				var data = new FormData();
				data.append('photo', file);
			 
				$.ajax({
					type: "POST",
					url: "../php/create-img.php",
					data: data,
					processData: false, // не преобразовывать данные
					contentType: false, // не устанавливать заголовок, браузер умнее ;)
					dataType: 'json', // ждем в ответе от сервера JSON
					success: rrt()
				});
				
			});

			//загрузка изображения2(3)
			$('#uploader3').submit(function(e){
				e.preventDefault();
			 
				var file = $('#upload-file__input3').prop('files')[0];
			 
				var data = new FormData();
				data.append('photo', file);
			 
				$.ajax({
					type: "POST",
					url: "../php/create-img.php",
					data: data,
					processData: false,
					contentType: false,
					dataType: 'json', 
					success: rrt3()
				});
				
			});

			$('#dimg1_btn').bind('click', function(){
				dimg1();
				dimg2();
				dimg3();
				dimg4();
				dimg5();
				dimg6();
			});
			$('#dimg2_btn').bind('click', function(){
				dimg2();
				dimg3();
				dimg4();
				dimg5();
				dimg6();
			});

			$('#dimg3_btn').bind('click', function(){
				dimg3();
				dimg4();
				dimg5();
				dimg6();
			});

			$('#dimg4_btn').bind('click', function(){
				dimg4();
				dimg5();
				dimg6();
			});

			$('#dimg5_btn').bind('click', function(){
				dimg5();
				dimg6();
			});

			$('#dimg6_btn').bind('click', function(){
				dimg6();
			});


			function dimg1(){
				localStorage.setItem('img1' + sessionStorage.getItem('IdG'), localStorage.getItem('img2' + sessionStorage.getItem('IdG')));
				if (localStorage.getItem('img1' + sessionStorage.getItem('IdG')) != 'null') {
					$('#dimg1').html('<img class="uplo_image" src = data:image/jpg;base64,'+ localStorage.getItem('img1' + sessionStorage.getItem('IdG')) +'></img>');
				}
				else{
					$('#dimg1').html('');
					$('#dimg1_btn').css('display','none');
				}
			}
			function dimg2(){
				localStorage.setItem('img2' + sessionStorage.getItem('IdG'), localStorage.getItem('img3' + sessionStorage.getItem('IdG')));
				if (localStorage.getItem('img2' + sessionStorage.getItem('IdG')) != 'null') {
					$('#dimg2').html('<img class="uplo_image" src = data:image/jpg;base64,'+ localStorage.getItem('img2' + sessionStorage.getItem('IdG')) +'></img>');
				}
				else{
					$('#dimg2').html('');
					$('#dimg2_btn').css('display','none');
				}
			}
			function dimg3(){
				localStorage.setItem('img3' + sessionStorage.getItem('IdG'), localStorage.getItem('img4' + sessionStorage.getItem('IdG')));
				if (localStorage.getItem('img3' + sessionStorage.getItem('IdG')) != 'null') {
					$('#dimg3').html('<img class="uplo_image" src = data:image/jpg;base64,'+ localStorage.getItem('img3' + sessionStorage.getItem('IdG')) +'></img>');
				}
				else{
					$('#dimg3').html('');
					$('#dimg3_btn').css('display','none');
				}
			}
			function dimg4(){
				localStorage.setItem('img4' + sessionStorage.getItem('IdG'), localStorage.getItem('img5' + sessionStorage.getItem('IdG')));
				if (localStorage.getItem('img4' + sessionStorage.getItem('IdG')) != 'null') {
					$('#dimg4').html('<img class="uplo_image" src = data:image/jpg;base64,'+ localStorage.getItem('img4' + sessionStorage.getItem('IdG')) +'></img>');
				}
				else{
					$('#dimg4').html('');
					$('#dimg4_btn').css('display','none');
				}
			}
			function dimg5(){
				localStorage.setItem('img5' + sessionStorage.getItem('IdG'), localStorage.getItem('img6' + sessionStorage.getItem('IdG')));
				if (localStorage.getItem('img5' + sessionStorage.getItem('IdG')) != 'null') {
					$('#dimg5').html('<img class="uplo_image" src = data:image/jpg;base64,'+ localStorage.getItem('img5' + sessionStorage.getItem('IdG')) +'></img>');
				}
				else{
					$('#dimg5').html('');
					$('#dimg5_btn').css('display','none');
				}
			}
			function dimg6(){
				localStorage.setItem('img6' + sessionStorage.getItem('IdG'), null);
				if (localStorage.getItem('img6' + sessionStorage.getItem('IdG')) != 'null') {
					$('#dimg6').html('<img class="uplo_image" src = data:image/jpg;base64,'+ localStorage.getItem('img6' + sessionStorage.getItem('IdG')) +'></img>');
				}
				else{
					$('#dimg6').html('');
					$('#dimg6_btn').css('display','none');
				}
			}

			$('#dimg11_btn').bind('click', function(){
				dimg11();
				dimg12();
				dimg13();
				dimg14();
				dimg15();
				dimg16();
			});
			$('#dimg12_btn').bind('click', function(){
				dimg12();
				dimg13();
				dimg14();
				dimg15();
				dimg16();
			});

			$('#dimg13_btn').bind('click', function(){
				dimg13();
				dimg14();
				dimg15();
				dimg16();
			});

			$('#dimg14_btn').bind('click', function(){
				dimg14();
				dimg15();
				dimg16();
			});

			$('#dimg15_btn').bind('click', function(){
				dimg15();
				dimg16();
			});

			$('#dimg16_btn').bind('click', function(){
				dimg16();
			});


			function dimg11(){
				localStorage.setItem('img1', localStorage.getItem('img2'));
				if (localStorage.getItem('img1') != 'null') {
					$('#dimg11').html('<img class="uplo_image" src = data:image/jpg;base64,'+ localStorage.getItem('img1') +'></img>');
				}
				else{
					$('#dimg11').html('');
					$('#dimg11_btn').css('display','none');
				}
			}
			function dimg12(){
				localStorage.setItem('img2', localStorage.getItem('img3'));
				if (localStorage.getItem('img2') != 'null') {
					$('#dimg12').html('<img class="uplo_image" src = data:image/jpg;base64,'+ localStorage.getItem('img2') +'></img>');
				}
				else{
					$('#dimg12').html('');
					$('#dimg12_btn').css('display','none');
				}
			}
			function dimg13(){
				localStorage.setItem('img3', localStorage.getItem('img4'));
				if (localStorage.getItem('img3') != 'null') {
					$('#dimg13').html('<img class="uplo_image" src = data:image/jpg;base64,'+ localStorage.getItem('img3') +'></img>');
				}
				else{
					$('#dimg13').html('');
					$('#dimg13_btn').css('display','none');
				}
			}
			function dimg14(){
				localStorage.setItem('img4', localStorage.getItem('img5'));
				if (localStorage.getItem('img4') != 'null') {
					$('#dimg14').html('<img class="uplo_image" src = data:image/jpg;base64,'+ localStorage.getItem('img4') +'></img>');
				}
				else{
					$('#dimg14').html('');
					$('#dimg14_btn').css('display','none');
				}
			}
			function dimg15(){
				localStorage.setItem('img5', localStorage.getItem('img6'));
				if (localStorage.getItem('img5') != 'null') {
					$('#dimg15').html('<img class="uplo_image" src = data:image/jpg;base64,'+ localStorage.getItem('img5') +'></img>');
				}
				else{
					$('#dimg15').html('');
					$('#dimg15_btn').css('display','none');
				}
			}
			function dimg16(){
				localStorage.setItem('img6', null);
				if (localStorage.getItem('img6') != 'null') {
					$('#dimg16').html('<img class="uplo_image" src = data:image/jpg;base64,'+ localStorage.getItem('img6') +'></img>');
				}
				else{
					$('#dimg16').html('');
					$('#dimg16_btn').css('display','none');
				}
			}


			/*$('#l2_btns_pub').bind('click', function(){
				console.log(localStorage.getItem('img1'));
				console.log(localStorage.getItem('img2'));
				console.log(localStorage.getItem('img3'));
				console.log(localStorage.getItem('img4'));
				console.log(localStorage.getItem('img5'));
				console.log(localStorage.getItem('img6'));
			});*/

		});

		$('#paste_mail').bind('click', function(){
			$('#list2_mail').val(sessionStorage.getItem('PasteMail'));
		});

		$('#paste_phone').bind('click', function(){
			$('#list2_phone').val(sessionStorage.getItem('PastePhone'));
		});

		$('#list2_end').bind('click', function(){
			$('#listn').css('display', 'none');
			$('#list2').css('display', 'none');
			$('#listr').css('display', 'block');
			if (data.Count > 3) {
				$('#back').height(870 + ((data.Count - 3) * 215));
				$('#base').height(1275 + ((data.Count - 3) * 215));
				$('#listr').height(780 + ((data.Count - 3) * 215));
			}
			else{
				$('#back').height(870);
				$('#base').height(1275);
				$('#listr').height(780);
			}
		});

		$('#list3_end').bind('click', function(){
			$('#listn3').css('display', 'none');
			$('#list3').css('display', 'none');
			$('#listr').css('display', 'block');
			if (data.Count > 3) {
				$('#back').height(870 + ((data.Count - 3) * 215));
				$('#base').height(1275 + ((data.Count - 3) * 215));
				$('#listr').height(780 + ((data.Count - 3) * 215));
			}
			else{
				$('#back').height(870);
				$('#base').height(1275);
				$('#listr').height(780);
			}
		});

		$('#paste_mail3').bind('click', function(){
			$('#list3_mail').val(sessionStorage.getItem('PasteMail'));
		});

		$('#paste_phone3').bind('click', function(){
			$('#list3_phone').val(sessionStorage.getItem('PastePhone'));
		});

		//добавление группы
		$('#l3_btns_add').bind('click', function() {
			let wrng = 0;
			if ($('#list3_inp_name').val() == "") {
				wrng++;
				$('#l3_inp_name').css('color', 'var(--errorfont)');
			}
			if ($('#list3_genre').val() == "Выберите жанр") {
				wrng++;
				$('#l3_genre').css('color', 'var(--errorfont)');
			}
			if ($('#list3_mail').val() == "") {
				wrng++;
				$('#l3_mail').css('color', 'var(--errorfont)');
			}
			if ($('#list3_phone').val() == "") {
				wrng++;
				$('#l3_phone').css('color', 'var(--errorfont)');
			}
			if ($('#list3_group').val() == "") {
				wrng++;
				$('#l3_group').css('color', 'var(--errorfont)');
			}
			if ($('#list3_about_area').val() == "") {
				wrng++;
				$('#l3_aarea').css('color', 'var(--errorfont)');
			}
			if ($('#list3_capacity').val() == "") {
				wrng++;
				$('#l3_genre').css('color', 'var(--errorfont)');
			}
			if ($('#list3_equipment').val() == "") {
				wrng++;
				$('#l3_equipment').css('color', 'var(--errorfont)');
			}
			if ($('#list3_location').val() == "") {
				wrng++;
				$('#l3_location').css('color', 'var(--errorfont)');
			}
			
			if(wrng == 0){
				let dates = {
					//BandId: data[sessionStorage.getItem('GroupId')]['BandId'],
					Name: $('#list3_inp_name').val(),
					Representative: sessionStorage.getItem('UserId'),
					Description: $('#list3_group').val(),
					DescriptionGroups: $('#list3_about_area').val(),
				};
				dates['PhotoLogo'] = localStorage.getItem('logo');
				if (localStorage.getItem('img1') == 'null') {
					//dates.push(Photo1: null);
					dates['Photo1'] = null;
				}
				else{dates['Photo1'] =  localStorage.getItem('img1');}
				if (localStorage.getItem('img3') == 'null') {
					dates['Photo3'] = null;
				}
				else{dates['Photo3'] =  localStorage.getItem('img2');}
				if (localStorage.getItem('img3') == 'null') {
					dates['Photo3'] = null;
				}
				else{dates['Photo3'] =  localStorage.getItem('img3');}
				if (localStorage.getItem('img4') == 'null') {
					dates['Photo4'] = null;
				}
				else{dates['Photo4'] =  localStorage.getItem('img4');}
				if (localStorage.getItem('img5') == 'null') {
					dates['Photo5'] = null;
				}
				else{dates['Photo5'] =  localStorage.getItem('img5');}
				if (localStorage.getItem('img6') == 'null') {
					dates['Photo6'] = null;
				}
				else{dates['Photo6'] =  localStorage.getItem('img6');}

				dates['Phone'] = $('#list3_phone').val();
				dates['Mail'] = $('#list3_mail').val();
				dates['Capacity'] = $('#list3_capacity').val();
				dates['Equipment'] = $('#list3_equipment').val();
				dates['Location'] = $('#list3_location').val();

				//console.log(dates);

				let json = JSON.stringify(dates);

				$.ajax({
					type: 'POST',
					url: "../php/add-areas.php",
					dataType: 'json',
					cache: false,
					data: {myData: json},
					success: function(data) {
						
					}
					
				});
				location.reload();
			}
		});
	});
})