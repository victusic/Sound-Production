<?php 
	session_start();
	if (isset($_COOKIE["roll"])) {
		$_SESSION['id'] = $_COOKIE["id"];
		$_SESSION['roll'] = $_COOKIE["roll"];
		$_SESSION['login'] = $_COOKIE["login"];
		$_SESSION['mail'] = $_COOKIE["mail"];
		$_SESSION['phone'] = $_COOKIE["phone"];
	}
	//print_r($_SESSION);
	$_SESSION['TypePage'] = 1;

?>
<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8">
		<title>Sound Production</title>
		<link href="../css/pages/records_area_page.css" rel="stylesheet">
		<link href="../css/system/colors.css" rel="stylesheet">
		<link href="../css/system/reset.css" rel="stylesheet">
		<link href="../css/system/base.css" rel="stylesheet">
		<link href="../css/system/fonts.css" rel="stylesheet">

		<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
		<script src="https://cdn.jsdelivr.net/npm/jquery.maskedinput@1.4.1/src/jquery.maskedinput.min.js"></script>
		<script src="../scripts/system/base.js"></script>
		<script src="../scripts/pages/materials_page.js"></script>
		<script src="../scripts/pages/records_area_page.js"></script>

		<link type="image/x-icon" rel="shortcut icon" href="../img/icon/favicon.ico">
	</head>
	<body>
		<div class="base" id="base">
			<header>
				<div class="logoext" onclick="window.location.href ='../../index.php';">SOUND PRODUCTION</div>
				<!--<input type="button" class="btn auroriz-btn" id="autorise-btn" value="Войти">-->
			</header>
			<nav id="nav">
				<input type="button" id="glav" class="navbtn btn" value="Главная" onclick="window.location.href ='../../index.php';">
				<input type="button" id="news" class="navbtn btn" value="Новости">
					<div id="news_list" class="news_list doplist">
						<div class="nav_line"></div>
						<div class="listbtn" onclick="window.location.href ='news_industry.php';">Новости индустрии</div>
						<div class="nav_line"></div>
						<div class="listbtn" onclick="window.location.href ='news_company.php';">Новости компании</div>
						<div class="nav_line"></div>
					</div>
				<input type="button" id="about" class="navbtn btn" value="О нас">	
					<div id="about_list" class="about_list doplist">
						<div class="nav_line"></div>
						<div class="listbtn" onclick="window.location.href ='about_achievements.php';">Наши достижения</div>
						<div class="nav_line"></div>
						<div class="listbtn" onclick="window.location.href ='about_ethics.php';">Корпоративная этика</div>
						<div class="nav_line"></div>
					</div>
				<input type="button" id="coop" class="navbtn btn" value="Сотрудничество">
					<div id="cooperation_list" class="cooperation_list doplist">
						<div class="nav_line"></div>
						<div class="listbtn" onclick="window.location.href ='cooperation_jobs.php';">Вакансии</div>
						<div class="nav_line"></div>
						<div class="listbtn" onclick="window.location.href ='cooperation_policy.php';">Пользование сервисом</div>
						<div class="nav_line"></div>
					</div>

				<!--Вход-->
				<input type="button" id="autorise-btn" class="navbtn btn" value="Личный кабинет">
				<!--Продюссер-->
				<input type="button" id="prod" class="navbtn btn" value="Личный кабинет">
					<div id="ls3" class="lk_list doplist">
						<div class="nav_line"></div>
						<div class="listbtn" onclick="window.location.href ='../pages/records_group.php';">Ваши записи</div>
						<div class="nav_line"></div>
						<div class="listbtn" onclick="window.location.href ='../pages/advertisements_group.php';">Ваши объявления</div>
						<div class="nav_line"></div>
						<div class="listbtn" onclick="window.location.href ='../pages/visible_area.php';">Просмотр площадок</div>
						<div class="nav_line"></div>
						<div class="listbtn" onclick="window.location.href ='../pages/profile.php';">Управление аккаунтом</div>
						<div class="nav_line"></div>
						<form action="../php/exit.php">
							<button class="listbtn" id="prod_exit" style="border: none;">Выйти</button>
						</form>
						<div class="nav_line"></div>
					</div>
				<!--Менеджер-->
				<input type="button" id="manag" class="navbtn btn" value="Личный кабинет">
					<div id="ls4" class="lk_list doplist">
						<div class="nav_line"></div>
						<div class="listbtn" onclick="window.location.href ='../pages/records_area.php';">Ваши записи</div>
						<div class="nav_line"></div>
						<div class="listbtn" onclick="window.location.href ='../pages/advertisements_area.php';">Ваши объявления</div>
						<div class="nav_line"></div>
						<div class="listbtn" onclick="window.location.href ='../pages/visible_group.php';">Просмотр групп</div>
						<div class="nav_line"></div>
						<div class="listbtn" onclick="window.location.href ='../pages/profile.php';">Управление аккаунтом</div>
						<div class="nav_line"></div>
						<form action="../php/exit.php">
							<button class="listbtn" id="manag_exit" style="border: none;">Выйти</button>
						</form>
						<div class="nav_line"></div>
					</div>
			</nav>
			<div class="back" id="back">
				<div class="list0 lists">
					<div class="head_text"><b>Ваши записи (площадки)</b></div>
				</div>
				<div class="listr lists" id="listr">
					<div id="preloader_group">
						<div id="loader"></div>
					</div>
					<div class="null-group">↓&nbspУ вас ещё нет записей, создайте новую запись&nbsp↓</div>
					<div class="listview_plate" id="livi_plate">
						
					</div>
				</div>

				<div class="listn lists" id="listn">
					<div class="list2_panl_name">Панель управления</div>
					<div class="list2_panl_state" id="list2_panl_state">Статус объявления</div>
					<input type="button" class="l2_btns l2_btns_pub" id="l2_btns_shoot" value="Снять с публикации">
					<input type="button" class="l2_btns l2_btns_pub" id="l2_btns_pub" value="Опубликовать">
					<input type="button" class="l2_btns l2_btns_save" id="l2_btns_save" value="Сохранить">
					<input type="button" class="l2_btns l2_btns_del" id="l2_btns_del" value="Удалить">
				</div>

				<div class="listr lists" id="list2">
					<div class="list2_end" id="list2_end">❮</div>
					<div class="list2_name" id="list2_name"></div>
					<div class="list2_txt" id="l2_inp_name">Название площадки</div>
					<textarea class="list2_inp_name" id="list2_inp_name"></textarea>
					<div class="list2_txt" id="l2_genre">Вместимость</div>
					<textarea class="list2_genre" id="list2_capacity"></textarea>
					<div class="list2_txt" id="l2_group">Описание площадки</div>
					<textarea class="list2_group" id="list2_group"></textarea>
					<div class="list2_txt" id="l2_equipment">Оборудование</div>
					<textarea class="list2_equipment" id="list2_equipment"></textarea>
					<div class="list2_txt" id="l2_location">Местоположение</div>
					<textarea class="list2_location" id="list2_location"></textarea>
					<div class="list2_txt" id="l2_img">Изображение</div>
					<div class="list2_img" id="list2_img"></div>
					<div class="list2_img_blackout" id="list2_img_blackout">
						<input type="file" name="image" id="upload-file__inputOne" class="upload-file__inputOne" accept="image/jpeg,image/png,image/gif" onchange="imgROne();">
						<div class="list2_img_blackout_textOne" id="list2_img_blackout_textOne">Загрузить изображение</div>
						<script>
							function imgROne(){ 
								var file = document.getElementById('upload-file__inputOne').files[0]; 
								if (file) {
									//$('#list2_img_blackout_textOne').html(file.name);
									var file1 = $('#upload-file__inputOne').prop('files')[0];
			 
									var data1 = new FormData();
									data1.append('photo', file1);
								 
									$.ajax({
										type: "POST",
										url: "../php/group-create-logo.php",
										data: data1,
										processData: false,
										contentType: false, 
										dataType: 'json',
										success: rrtOne()
									});
								}
							}
							function rrtOne(){
								$.get('../php/group-reading-logo.php', {text: 'Текст'}, function(data2){
									$('#list2_img').html('<img class= "imgForLogo" src = data:image/jpg;base64,'+ data2 +'></img>');
									localStorage.setItem('logo' + sessionStorage.getItem('IdG'), data2);
								});
								//$('#list2_img').css('display','block');
								//console.log(localStorage.getItem('logo'));
							}
						</script>
					</div>
					<div class="list2_txt" id="l2_aarea">Описание площадки</div>
					<textarea class="list2_about_area" id="list2_about_area"></textarea>
					<div class="list2_txt" id="l2_mail">Адрес почты для связи</div>
					<textarea class="list2_mail" id="list2_mail"></textarea>
					<div class="paste_mail past_txt" id="paste_mail">⎀</div>
					<div class="list2_txt" id="l2_phone">Номер телефона для связи</div>
					<textarea class="list2_phone" id="list2_phone"></textarea>
					<div class="paste_phone past_txt" id="paste_phone">⎀</div>
					<div class="list2_txt" id="l2_dimg">Изображения площадки</div>
					<div class="list2_dimg">
						<div class="flex_dimg">
							<div class="dimg" id="dimg1"></div>
							<div class="dimg" id="dimg2"></div>
							<div class="dimg" id="dimg3"></div>
							<div class="dimg" id="dimg4"></div>
							<div class="dimg" id="dimg5"></div>
							<div class="dimg" id="dimg6"></div>
						</div>
						<div class="flex_dimg_btn">
							<input type="button" class="dimg_btn" id="dimg1_btn" value="Удалить">
							<input type="button" class="dimg_btn" id="dimg2_btn" value="Удалить">
							<input type="button" class="dimg_btn" id="dimg3_btn" value="Удалить">
							<input type="button" class="dimg_btn" id="dimg4_btn" value="Удалить">
							<input type="button" class="dimg_btn" id="dimg5_btn" value="Удалить">
							<input type="button" class="dimg_btn" id="dimg6_btn" value="Удалить">
						</div>
						<!--<form action="../php/create.php" method="post" enctype="multipart/form-data" class="ml">
							<div class="upload-file__wrapper">
								<input type="file" name="image" id="upload-file__input" class="upload-file__input" multiple accept="image/jpeg,image/png,image/gif">
								<label class="upload-file__label" for="upload-file__input">
									<span class="upload-file__text">Прикрепите или перенесите в эту область изображение</span>
								</label>
							</div>
							<button type="submit" class="uploads_image btn">Загрузить изображение</button>
						</form>-->
						<form enctype="multipart/form-data" class="ml" id="uploader">
							<div class="upload-file__wrapper">
								<input type="file" name="image" id="upload-file__input" class="upload-file__input" accept="image/jpeg,image/png,image/gif" onchange="imgR();">
								<label class="upload-file__label" for="upload-file__input">
									<span class="upload-file__text" id="upload-file__text">Нажмите, чтобы прикреприть изображение</span>
								</label>
							</div>
							<button type="submit" class="uploads_image btn" id="uplo">Загрузить изображение</button>
						</form>
						<script>
							function imgR(){ 
								var file = document.getElementById('upload-file__input').files[0]; 
								if (file) {
									$('#upload-file__text').html(file.name);
								}
							}
						</script>
					</div>
				</div>
				<!---->

				<div class="listn lists" id="listn3">
					<div class="list2_panl_name">Панель управления</div>
					<input type="button" class="l2_btns l2_btns_del" id="l3_btns_add" value="Создать">
				</div>
				<div class="listr lists" id="list3">
				<div class="list2_end" id="list3_end">❮</div>
					<div class="list2_name" id="list3_name">&nbsp&nbspНовая площадка</div>
					<div class="list2_txt" id="l3_inp_name">Название площадки</div>
					<textarea class="list2_inp_name" id="list3_inp_name"></textarea>
					<div class="list2_txt" id="l3_genre">Вместимость</div>
					<textarea class="list2_genre" id="list3_capacity"></textarea>
					<div class="list2_txt" id="l3_group">Описание площадки</div>
					<textarea class="list2_group" id="list3_group"></textarea>
					<div class="list2_txt" id="l3_equipment">Оборудование</div>
					<textarea class="list2_equipment" id="list3_equipment"></textarea>
					<div class="list2_txt" id="l3_location">Местоположение</div>
					<textarea class="list2_location" id="list3_location"></textarea>
					<div class="list2_txt" id="l3_img">Изображение</div>
					<div class="list3_img" id="list3_img"></div>
					<div class="list2_txt" id="l3_aarea">Описание площадки</div>
					<textarea class="list2_about_area" id="list3_about_area"></textarea>
					<div class="list2_txt" id="l3_mail">Адрес почты для связи</div>
					<textarea class="list2_mail" id="list3_mail"></textarea>
					<div class="paste_mail past_txt" id="paste_mail">⎀</div>
					<div class="list2_txt" id="l3_phone">Номер телефона для связи</div>
					<textarea class="list2_phone" id="list3_phone"></textarea>
					<div class="paste_phone past_txt" id="paste_phone">⎀</div>
					<div class="list2_img_blackout" id="list3_img_blackout">
						<input type="file" name="image" id="upload-file__inputOne3" class="upload-file__inputOne" accept="image/jpeg,image/png,image/gif" onchange="imgROne3();">
						<div class="list2_img_blackout_textOne" id="list3_img_blackout_textOne">Загрузить изображение</div>
						<script>
							function imgROne3(){ 
								var file = document.getElementById('upload-file__inputOne3').files[0]; 
								if (file) {
									//$('#list2_img_blackout_textOne').html(file.name);
									var file1 = $('#upload-file__inputOne3').prop('files')[0];
			 
									var data1 = new FormData();
									data1.append('photo', file1);
								 
									$.ajax({
										type: "POST",
										url: "../php/group-create-logo.php",
										data: data1,
										processData: false,
										contentType: false, 
										dataType: 'json',
										success: rrtOne3()
									});
								}
							}
							function rrtOne3(){
								$.get('../php/group-reading-logo.php', {text: 'Текст'}, function(data3){
									$('#list3_img').html('<img class= "imgForLogo" src = data:image/jpg;base64,'+ data3 +'></img>');
									localStorage.setItem('logo3', data3);
								});
								//$('#list2_img').css('display','block');
								//console.log(localStorage.getItem('logo'));
							}
						</script>
					</div>
					<div class="list2_txt" id="l3_dimg">Изображения площадки</div>
					<div class="list2_dimg">
						<div class="flex_dimg">
							<div class="dimg" id="dimg11"></div>
							<div class="dimg" id="dimg12"></div>
							<div class="dimg" id="dimg13"></div>
							<div class="dimg" id="dimg14"></div>
							<div class="dimg" id="dimg15"></div>
							<div class="dimg" id="dimg16"></div>
						</div>
						<div class="flex_dimg_btn">
							<input type="button" class="dimg_btn" id="dimg11_btn" value="Удалить">
							<input type="button" class="dimg_btn" id="dimg12_btn" value="Удалить">
							<input type="button" class="dimg_btn" id="dimg13_btn" value="Удалить">
							<input type="button" class="dimg_btn" id="dimg14_btn" value="Удалить">
							<input type="button" class="dimg_btn" id="dimg15_btn" value="Удалить">
							<input type="button" class="dimg_btn" id="dimg16_btn" value="Удалить">
						</div>
						<form enctype="multipart/form-data" class="ml" id="uploader3">
							<div class="upload-file__wrapper">
								<input type="file" name="image" id="upload-file__input3" class="upload-file__input" accept="image/jpeg,image/png,image/gif" onchange="imgR3();">
								<label class="upload-file__label" for="upload-file__input3">
									<span class="upload-file__text" id="upload-file__text3">Нажмите, чтобы прикреприть изображение</span>
								</label>
							</div>
							<button type="submit" class="uploads_image btn" id="uplo1">Загрузить изображение</button>
						</form>
						<script>
							function imgR3(){ 
								var file3 = document.getElementById('upload-file__input3').files[0]; 
								if (file3) {
									$('#upload-file__text3').html(file3.name);
								}
							}
						</script>
					</div>
				</div>
			</div>
			<footer>
				<div class="colmn"><div class="incolmn">
					<div class="ftext footer_text" onclick="window.location.href ='../../index.php';"><b>Главная</b></div>
					<div class="fline"></div>
				</div></div>
				<div class="colmn"><div class="incolmn"><div class="ftext footer_text" onclick="window.location.href ='news_head.php';"><b>Новости</b></div>
					<div class="fline"></div>
					<div class="stext footer_text" onclick="window.location.href ='news_industry.php';">Новости индустрии</div>
					<div class="stext footer_text" onclick="window.location.href ='news_company.php';">Новости компании</div>
				</div></div>
					<div class="colmn"><div class="incolmn"><div class="ftext footer_text" onclick="window.location.href ='about_head.php';"><b>О нас</b></div>
					<div class="fline"></div>
					<div class="stext footer_text" onclick="window.location.href ='about_achievements.php';">Наши достижения</div>
					<div class="stext footer_text" onclick="window.location.href ='about_ethics.php';">Корпоративная этика</div>
				</div></div>
					<div class="colmn"><div class="incolmn"><div class="ftext footer_text" onclick="window.location.href ='cooperation_head.php';"><b>Сотрудничество</b></div>
					<div class="fline"></div>
					<div class="stext footer_text" onclick="window.location.href ='cooperation_jobs.php';">Вакансии</div>
					<div class="stext footer_text" onclick="window.location.href ='cooperation_policy.php';">Пользование сервисом</div>
				</div></div>
					<div class="colmn"><div class="incolmn"><div class="ftext footer_text"><b>Личный кабинет</b></div>
					<div class="fline"></div>
					<div class="stext footer_text" id="f-autorise">Войти</div>
					<div class="stext footer_text" id="pr-z" onclick="window.location.href ='../pages/records_group.php';">Ваши записи</div>
					<div class="stext footer_text" id="pr-o" onclick="window.location.href ='../pages/advertisements_group.php';">Ваши объявления</div>
					<div class="stext footer_text" id="pr-p" onclick="window.location.href ='../pages/visible_area.php';">Просмотр площадок</div>
					<div class="stext footer_text" id="man-z" onclick="window.location.href ='../pages/records_area.php';">Ваши записи</div>
					<div class="stext footer_text" id="man-o" onclick="window.location.href ='../pages/advertisements_area.php';">Ваши объявления</div>
					<div class="stext footer_text" id="man-g" onclick="window.location.href ='../pages/visible_group.php';">Просмотр групп</div>
				</div></div>
			</footer>
			<div class="socialline">
				<div class="outro_text">© Sound production by Horoshilov corporation</div>
				<div class="bodys">
					<input type='checkbox' id='time'/>
					<label for='time' id="lb">Night</label>
				</div>
				<div class="link"><div class="linkimg" id="linkYoutube" 
					onclick="window.open('https://www.youtube.com/channel/UCxk-mBW7X4ZLu_J-wlPLe2A')"></div></div>
				<div class="link"><div class="linkimg" id="linkPinterest" 
					onclick="window.open('https://www.pinterest.ru/SoundProductionRu')"></div></div>
				<div class="link"><div class="linkimg" id="linkTelegram" 
					onclick="window.open('https://t.me/SoundProductionRu')"></div></div>
				<div class="link"><div class="linkimg" id="linkMail" onclick="window.location.href ='contact_form.php';"></div></div>
			</div>

			<!-- Непервоначальновизуальные объекты -->
			<div class="autorisation-block" id="autorise-block">
				<div class="inblok-relative" id="lg_bl">
					<div class="autorisation-block-exit" id="autorise-close">&#10006</div>
					<div class="autorisation-text-zagl-a autorisation-text-zagl" id="text_btnV">Вход</div>
					<div class="autorisation-text-zagl-s autorisation-text-zagl">&nbsp/&nbsp</div>
					<div class="autorisation-text-zagl-r autorisation-text-zagl" id="text_btnR">Регистрация</div>
					<form id="formV" action="../php/login.php" method="POST">
						<div class="auroriz-preview-text-login Vr-preview-text" id="lg_lg">Логин</div>
						<input type="text" name="login_login" id="login_login" class="V_input_login vr_input">
						<div class="auroriz-preview-text-password Vr-preview-text" id="lg_psw">Пароль</div>
						<input type="password" name="login_password" id="login_password" class="V_input_password vr_input">
						<div class="auroriz-captcha">
							<!--Капча-->
							<div class="text-app-lg" id="captcha-text">Подтвердите, что вы не робот</div>
							<div class="s-switch-lg" id="captcha-switch">
								<input class="inp-cbx" id="cbxlg" type="checkbox" style="display: none"/>
								<label class="cbx" for="cbxlg">
									<span>
										<svg width="8px" height="6px" viewbox="0 0 12 10">
											<polyline points="1.5 6 4.5 9 10.5 1"></polyline>
										</svg>
									</span>
								</label>
							</div>
							<!--Забыли пароль?-->
							<a class="forgot-password" id="fg-password">Забыли пароль?</a>
						</div>
						<button name="login_button" id="lgbutton" class="btn auroriz-btn-in-block" text="Войти">Войти</button>
						<div class="password-icon" id="password-icon"></div>
					</form>
					<form id="formR">
						<div class="reg-preview-text-surname Vr-preview-text" id="rg_srnm">Фамилия</div>
						<input type="text" name="" class="R_input_surname vr_input" id="rg-surname" maxlength="50">
						<div class="reg-preview-text-name Vr-preview-text" id="rg_snm">Имя</div>
						<input type="text" name="" class="R_input_name vr_input" id="rg-name" maxlength="50">
						<div class="reg-preview-text-patronymic Vr-preview-text" id="rg_ptrnm">Отчество</div>
						<input type="text" name="" class="R_input_patronymic vr_input" id="rg-patronymic" maxlength="50">
						<div class="reg-preview-text-phone Vr-preview-text" id="rg_phn">Телефон</div>
						<input type="text" name="" class="R_input_phone vr_input" id="rg-phone">
						<div class="reg-preview-text-mail Vr-preview-text" id="rg_mil">Почта</div>
						<input type="text" name="" class="R_input_mail vr_input" id="rg-mail" maxlength="70">
						<div class="reg-preview-text-login Vr-preview-text" id="rg_lgn">Логин</div>
						<input type="text" name="" class="R_input_login vr_input" id="rg-login" maxlength="70">
						<div class="reg-preview-text-password Vr-preview-text" id="rg_psw">Пароль</div>
						<input type="password" name="" class="R_input_password vr_input" id="rg-password" maxlength="70">
						<div class="reg-preview-text-password-double Vr-preview-text" id="rg_pswd">Повторите пароль</div>
						<input type="password" name="" class="R_input_password_double vr_input" id="rg-password-double" maxlength="70">
						<div class="reg-preview-text-roll Vr-preview-text">Роль</div>
						<div class="switch-box">
							<div class="switch-button">
								<input class="switch-button-checkbox" type="checkbox" id="rg-roll"></input>
								<label class="switch-button-label" for=""><span class="switch-button-label-span">Продюссер группы</span></label>
							</div>
						</div>
						<div class="text-app" id="text-app">Согласие на обработку персональных данных</div>
						<div class="s-switch">
							<input class="inp-cbx" id="cbx" type="checkbox" style="display: none"/>
							<label class="cbx" for="cbx">
								<span>
									<svg width="8px" height="6px" viewbox="0 0 12 10">
										<polyline points="1.5 6 4.5 9 10.5 1"></polyline>
									</svg>
								</span>
							</label>
						</div>
						<input type="button" class="btn reg-btn-in-block" id="prm" value="Зарегистрироваться"></input>
					</form>
				</div>
			</div>
		</div>
		<div id="fog"></div>
		<div id="cookie_base">
			<div class="cookies-block-exit" id="cookies-close">&#10006</div>
			<div class="cline">
				Мы используем файлы cookie для вашего удобства пользования сайтом и повышения качества рекомендаций.&nbsp
				<div id="about_cookie"><u>Подробнее</u></div>
				&nbsp&nbsp
				<input type="button" class="btn_cookie" id="btn_cookie" value="Я согласен"></input>
			</div>	
		</div>
		<div class="cookies-band" id="cookies-band">
			<div class="cookies-band-exit" id="cookies-band-close">&#10006</div>
			<div class="cookies-band-text">
				Продолжая использовать наш сайт, вы даете согласие на обработку файлов cookie (пользовательских данных, содержащих сведения о местоположении; версию ОС; тип и разрешение экрана устройства, с которого пользователь обращается к сайту; сведения о взаимодействии пользователя с web-интерфейсом) в целях аутентификации пользователя на сайте. Если вы не хотите, чтобы ваши данные обрабатывались, пожалуйста, покиньте сайт.
			</div>
		</div>
	</body>
</html>
<?php
	echo "<script>sessionStorage.setItem('PasteMail', '".$_SESSION['mail']."');</script>";
	echo "<script>sessionStorage.setItem('PastePhone', '".$_SESSION['phone']."');</script>";
	if ($_SESSION['roll'] == '3') {
		echo "<script src='../scripts/system/show_producer.js'></script>";
	}
	else if ($_SESSION['roll'] == '4') {
		echo "<script src='../scripts/system/show_manager.js'></script>";
	}
	else if ($_SESSION['roll'] == '000') {
		echo "<script src='../scripts/system/error_login.js'></script>";
		session_destroy();
	}
	else if ($_SESSION['roll'] != null){
		echo '<script>alert("Данный аккаунт не поддерживается сайтом, перезагрузите страницу и попробуйте войти с другого аккаунта, или создайте новый.");</script>';
		session_destroy();
	}

	if (isset($_COOKIE["inf_cookie"]) != null){
		if ($_COOKIE["inf_cookie"] == "1") {
			echo "<script src='../scripts/system/cookie_info.js'></script>";
		}
	}
	else{
		echo "<script src='../scripts/system/cookie_info.js'></script>";
	}

	if (isset($_COOKIE["themes"]) != null){
		if ($_COOKIE["themes"] == "black") {
			echo "<script src='../scripts/system/themdark.js'></script>";
		}
		if ($_COOKIE["themes"] == "white") {
			echo "<script src='../scripts/system/themwhite.js'></script>";
		}
	}
	else{
		echo "<script src='../scripts/system/cookie_info.js'></script>";
	}

	if (isset($_COOKIE["anti-bot"]) != null){
		if ($_COOKIE["anti-bot"] == "yes") {
			echo "<script>$('#cbxlg').prop('checked', true);</script>";
		}
	}
?>