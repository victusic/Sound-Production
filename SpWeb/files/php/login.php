<?php
	session_start();
	$ilogin = "Не известно";
	$ipassword = "Не известно";
	$ilogin= $_POST['login_login']; 
	$ipassword = $_POST['login_password'];
	/*$serverName = "VICTUSIC"; //если instance и port стандартные, то можно не указывать
	$connectionInfo = array("Database"=>"MusicalBase");
	$conn = sqlsrv_connect( $serverName, $connectionInfo);
	if( $conn )
	{
		//echo "Connection established.\n";
	}
	else
	{
		//echo "Connection could not be established.\n";
		die(print_r( sqlsrv_errors(), true));
	}

	$vbr = "SELECT password FROM Users WHERE login='$ilogin'";
	$rvbr = sqlsrv_query($conn, $vbr);
	if($rvbr === false ) {
		die(print_r(sqlsrv_errors(), true));
	}
	while($row = sqlsrv_fetch_array($rvbr, SQLSRV_FETCH_ASSOC) ){
		$result[] = $row;
		//получение id
		$vbrid = "SELECT UserId FROM Users WHERE login='$ilogin'";
		$rvbrid = sqlsrv_query($conn, $vbrid);
		if($rvbrid === false ) {
			die(print_r(sqlsrv_errors(), true));
		}
		while($rowid = sqlsrv_fetch_array($rvbrid, SQLSRV_FETCH_ASSOC) ){
			$resultid[] = $rowid;
		}
		//получение роли
		$vbrroll = "SELECT roll FROM Users WHERE login='$ilogin'";
		$rvbrroll = sqlsrv_query($conn, $vbrroll);
		if($rvbrroll === false ) {
			die(print_r(sqlsrv_errors(), true));
		}
		while($rowroll = sqlsrv_fetch_array($rvbrroll, SQLSRV_FETCH_ASSOC) ){
			$resultroll[] = $rowroll;
		}
		//получение логина
		$vbrlogin = "SELECT login FROM Users WHERE login='$ilogin'";
		$rvbrlogin = sqlsrv_query($conn, $vbrlogin);
		if($rvbrlogin === false ) {
			die(print_r(sqlsrv_errors(), true));
		}
		while($rowlogin = sqlsrv_fetch_array($rvbrlogin, SQLSRV_FETCH_ASSOC) ){
			$resultlogin[] = $rowlogin;
		}

	}*/

	/*echo $ipassword;
	echo $result[0]['password'];*/

	$zpr = $ilogin;
	$f = fopen('http://localhost:61315/api/getUsers?login='.$zpr, 'r');
	 
	// Получаем содержимое потока
	$data = stream_get_contents($f);
	 
	if ($data) {
		$msv = json_decode($data, true);
		//print_r($msv);
		//echo ($msv[0]['Password']);

		if ($msv[0]['Password'] == $ipassword) {
			// запись сессии
			$_SESSION['id'] = $msv[0]['UserId'];
			$_SESSION['roll'] = $msv[0]['Roll'];
			$_SESSION['login'] = $msv[0]['Login'];
			$_SESSION['mail'] = $msv[0]['Mail'];
			$_SESSION['phone'] = $msv[0]['Phone'];

			setcookie('id', $msv[0]['UserId'], time() + 604800, '/');
			setcookie('roll', $msv[0]['Roll'], time() + 604800, '/');
			setcookie('login', $msv[0]['Login'], time() + 604800, '/');
			setcookie('mail', $msv[0]['Mail'], time() + 604800, '/');
			setcookie('phone', $msv[0]['Phone'], time() + 604800, '/');
		}
		else{
			$_SESSION['roll'] = '000';
			$_SESSION['login'] = $ilogin;
			echo "<script>sessionStorage.lg = '".$ilogin."';</script>";
		}
		
	}

	/* Close the connection. */
	//sqlsrv_close( $conn);
?>

<html>
	<head>
		<meta charset="utf-8">
		<title>Авторизация - Sound Production</title>
		<link href="../css/pages/maket_page.css" rel="stylesheet">
		<link href="../css/system/colors.css" rel="stylesheet">
		<link href="../css/system/reset.css" rel="stylesheet">
		<link href="../css/system/base.css" rel="stylesheet">
		<link href="../css/system/fonts.css" rel="stylesheet">

		<link type="image/x-icon" rel="shortcut icon" href="favicon.ico">
	</head>
	<body>
		<div class="intro">
			<div class="intro-text">Авторизация</div>
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