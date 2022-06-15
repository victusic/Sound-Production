<?php
	session_start();
	if ($_SESSION['roll'] == '3') {
		echo "<script src='../scripts/system/hide_producer.js'></script>";
	}
	else if ($_SESSION['roll'] == '4') {
		echo "<script src='../scripts/system/hide_manager.js'></script>";
	}
	session_destroy();
	setcookie ("id", "", time() - 604800, '/');
	setcookie ("roll", "", time() - 604800, '/');
	setcookie ("login", "", time() - 604800, '/');
?>


<html>
	<head>
		<meta charset="utf-8">
		<title>Выход - Sound Production</title>
		<link href="../css/pages/maket_page.css" rel="stylesheet">
		<link href="../css/system/colors.css" rel="stylesheet">
		<link href="../css/system/reset.css" rel="stylesheet">
		<link href="../css/system/base.css" rel="stylesheet">
		<link href="../css/system/fonts.css" rel="stylesheet">

		<link type="image/x-icon" rel="shortcut icon" href="favicon.ico">
	</head>
	<body>
		<div class="intro">
			<div class="intro-text">Выход</div>
			<div id="preloader_login">
				<div id="loader"></div>
			</div>
		</div>
		<div class="base" id="base">
			<header>
				<div class="logoext">SOUND PRODUCTION</div>
			</header>
			<nav id="nav">
				<input type="button" id="glav" class="navbtn btn" value="Главная">
				<input type="button" id="news" class="navbtn btn" value="Новости">
				<input type="button" id="about" class="navbtn btn" value="О нас">	
				<input type="button" id="coop" class="navbtn btn" value="Сотрудничество">
				<input type="button" id="autorise-btn" class="navbtn btn" value="Личный кабинет">
			</nav>
			<div class="back" id="back"></div>
		</div>	
		<div id="fog" style="display: inherit; height: 100%;"></div>
		<!--<script>history.back();</script>-->
	</body>
</html>
<?php	
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
	if ($_SESSION['TypePage'] == 0) {
		echo "<script>history.back();</script>";
	}
	else
	{
		echo "<script>document.location.href ='../../index.php'</script>";
	}
?>