<?php
	$dataString = json_decode($_POST['data']);
	$to  = $dataString->Mail; 

	$message = '<p> Код для смены данных аккаунта: <b>'.$dataString->Code.'</b></p>';

	$headers  = "Content-type: text/html; charset=UTF-8 \r\n"; 
	//$headers .= "From: От кого письмо <".$dataString->Mail.">\r\n"; 

	mail($to, "Подтверждение смены данных аккаунта Sound Production", $message, $headers);
	
	//echo "Сообщение отправленно";
?>