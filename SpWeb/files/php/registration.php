<?php

	$url = 'http://localhost:61315/api/Users';

	$ch = curl_init($url);
	curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
	curl_setopt($ch, CURLOPT_POSTFIELDS, $_POST["myData"]);
	curl_setopt($ch, CURLOPT_HTTPHEADER, [
		'Content-Type: application/json',
		'Content-Length: ' . strlen($_POST["myData"])
	]);

	$result = curl_exec($ch);
	curl_close($ch);

	mail("dlya_d_raboty_raboty@mail.ru", "Sound Production - регистрация аккаунта", 
	"Через вашу почту происходит регистрация нового аккаунта \n Ссылка для продолжения регистрации: \n http://soundproduction/files/php/validation.php?code=".$_POST['Login']." \n Если вы ничего не делали, проигнорируйте это письмо.");
?>