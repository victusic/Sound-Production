<?php
	$dataString = json_decode($_POST['data']);
	//$to  = "<dlya_d_raboty_raboty@mail.ru>"; 

	$subject = $dataString->Title; 

	$message = '<p>'.$dataString->Text.'</p> </br> <b>От кого: '.$dataString->Name.'</b> </br> <b>Адрес: '.$dataString->Mail.'</b>';

	$headers  = "Content-type: text/html; charset=UTF-8 \r\n"; 
	$headers .= "From: От кого письмо <".$dataString->Mail.">\r\n"; 

	mail($to, $subject, $message, $headers);
	mail('dlya_d_raboty_raboty@mail.ru', $subject, $message, $headers);
	
	//echo "Сообщение отправленно";
?>