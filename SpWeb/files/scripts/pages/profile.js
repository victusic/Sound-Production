$(document).ready(function(){
	$.getJSON('../php/loading_data_profile.php', function(data) {
		$("#inpPhone").mask("8(999)999-99-99");
		//console.log(data);
		$('#prof_name').html('&nbsp&nbsp' + data.name);

		if (data.img==null){
			$('#avatar').removeClass('load');
			$('#avatar').removeClass('logo_load');
			$('#avatar').addClass('avatar-none');
			$('#avatar').html('');
		}
		else{
			$('#avatar').html('<img class="imgForLogo" style="margin-top: -64px;" src=data:image/jpg;base64,'+ data.img +'></img>');
			$('#avatar').removeClass('load');
		}
		if (data.roll == 3) {
			$('#prof_roll').html('Продюссер');
		}
		else {
			$('#prof_roll').html('Менеджер');
		}
		$('#prof_roll').removeClass('load');
		if (data.status == 0) {
			$('#prof_status').html('Активный');
		}
		$('#prof_status').removeClass('load');
		$('#prof_count').html(data.count);
		$('#prof_count').removeClass('load');
		$('#prof_reg').html(new Date(data.reg).toLocaleDateString());
		$('#prof_reg').removeClass('load');

		$('#b21_login').html(data.login);
		$('#b21_login').removeClass('load');
		$('#b21_mail').html(data.mail);
		$('#b21_mail').removeClass('load');
		$('#b21_phone').html(data.phone);
		$('#b21_phone').removeClass('load');
		$('#b21_pass').html(data.pass);
		$('#b21_pass').removeClass('load');

		$('#save_btn').bind('click', function(){
			if( $('#inpLog').val() == '' && $('#inpMail').val() == '' && $('#inpPhone').val() == '' && $('#inpPass').val() == '' && $('#inpPass').val().length  >  8 && (localStorage.getItem('logo' + sessionStorage.getItem('IdG')) == null)){
				$('.banck3').css('color', 'var(--errorfont)');
			}
			else{
				var result = '';
				var words = '0123456789qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM';
				var max_position = words.length - 1;
				for(i = 0; i < 9; i++) {
					position = Math.floor ( Math.random() * max_position );
					result = result + words.substring(position, position + 1);
				}

				if (localStorage.getItem('logo' + sessionStorage.getItem('IdG')) != null) {
					data.img = localStorage.getItem('logo' + sessionStorage.getItem('IdG'));
					//alert(localStorage.getItem('logo'));
					//alert();
				}
				
				let dates = {
					Code: result,
					Mail: data.mail,
				};
				let json = JSON.stringify(dates);
				$.ajax({
					type: 'POST',
					url: "../php/mail-code.php",
					dataType: 'json',
					cache: false,
					data: {data: json},
					success: open()
				});
				function open() {
				 	$('#mbox-code').css('display', 'block');
					$("html,body").css("overflow","hidden");
					$('#fog').show();
				}

				//alert(result);
				$('#mbox-exit').bind('click', function(){
					$('#mbox-code').css('display', 'none');
					$("html,body").css("overflow","");
					$('#fog').hide();
				});
				$('#mbox-btn').bind('click', function(){
					if($('#mbox-inp').val() == result) {
						//запрос
						if ($('#inpLog').val() != ''){
							data.login = $('#inpLog').val();
						}
						if ($('#inpMail').val() != ''){
							data.mail = $('#inpMail').val();
						}
						if ($('#inpPhone').val() != ''){
							data.phone = $('#inpPhone').val();
						}
						if ($('#inpPass').val() != ''){
							data.pass = $('#inpPass').val();
						}
						let dates = {
							UserId: data.id,
							Roll: data.roll,
							Surname: data.surname,
							Name: data.name2,
							Patronymic: data.patronymic,
							Mail: data.mail,
							Phone: data.phone,
							Login: data.login,
							Password: data.passShow,
							Logo: data.img,
							IsActivity: data.status,
							CountAdvertisement: data.count,
							RegistrationDate: data.reg
						};
						
						let json = JSON.stringify(dates);
						//console.log(json);
						//alert();
						$.ajax({
							type: 'POST',
							url: "../php/save-profile.php",
							dataType: 'json',
							cache: false,
							data: {myData: json, id: data.id},
							success: open()
						});
						function open() {
							location.reload();
						}
						
					}
					else{
						$('#mbox-txt').css('color', 'var(--errorfont)')
					}
				});
			}
		});
	});

	$('#lock-profile').bind('click', function(){
		$('#lock-profile').hide();
	});
})