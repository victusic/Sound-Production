<?php
	$url = ((!empty($_SERVER['HTTPS'])) ? 'https' : 'http') . '://' . $_SERVER['HTTP_HOST'] . $_SERVER['REQUEST_URI'];
	$str = parse_url($url, PHP_URL_QUERY);
	parse_str($str, $query);
	$login = $query['code'];

	$f = fopen('http://localhost:61315/api/getUsers?login='.$login, 'r');
	$data = stream_get_contents($f);
	 
	if ($data) {
		$msv = json_decode($data, true);
		//print_r($msv);
		if ($msv[0]['IsActivity'] == -1){
			$msv[0]['IsActivity'] = 0;
		}

		$newdate = $msv[0];
		//print_r($newdate);
		$result = json_encode($newdate, JSON_UNESCAPED_UNICODE);

		$idz = $msv[0]['UserId'];

		$url = 'http://localhost:61315/api/Users/'.$idz;
		
		$ch = curl_init();
		curl_setopt($ch, CURLOPT_URL, $url);
		curl_setopt($ch, CURLOPT_HTTPHEADER, array('Content-Type: application/json','Content-Length: ' . strlen($result)));
		curl_setopt($ch, CURLOPT_CUSTOMREQUEST, 'PUT');
		curl_setopt($ch, CURLOPT_POSTFIELDS, $result);
		curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
		$response  = curl_exec($ch);
		curl_close($ch);
	}
?>

<html>
	<head>
		<meta charset="utf-8">
		<title>Подтверждение аккаунта - Sound Production</title>
		<link href="../css/pages/maket_page.css" rel="stylesheet">
		<link href="../css/system/colors.css" rel="stylesheet">
		<link href="../css/system/reset.css" rel="stylesheet">
		<link href="../css/system/base.css" rel="stylesheet">
		<link href="../css/system/fonts.css" rel="stylesheet">

		<link type="image/x-icon" rel="shortcut icon" href="favicon.ico">
	</head>
	<body>
		<div class="intro">
			<div class="intro-text">Подтверждение аккаунта</div>
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
		<script>history.back();</script>
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
?>