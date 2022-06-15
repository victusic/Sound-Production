<?php
	$zpr = $_GET['text'];
	$f = fopen('http://localhost:61315/api/GetAdvertisements?Group='.$zpr, 'r');
	 
	// Получаем содержимое потока
	$data = stream_get_contents($f);
	 
	if ($data) {
		$msv = json_decode($data, true);
		header('Content-Type: application/json');
		$result['status'] = $msv[0]['Moderation'];
		$result['Id'] = $msv[0]['AdvertisementId'];
		 
		echo json_encode($result);
	}
?>