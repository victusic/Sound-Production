<?php
	session_start();
	$zpr = $_GET['BandId'];
	$data = [
		'TypeAdvertisement' => 1,
		'Representative' => $_SESSION['id'],
		'Area' =>  $zpr,
		'Moderation' => 0,
	];
	$dataString = json_encode($data);

	$url = 'http://localhost:61315/api/AdvertisementsPost';

	$ch = curl_init($url);
	curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
	curl_setopt($ch, CURLOPT_POSTFIELDS, $dataString);
	curl_setopt($ch, CURLOPT_HTTPHEADER, [
		'Content-Type: application/json',
		'Content-Length: ' . strlen($dataString)
	]);

	$result = curl_exec($ch);
	curl_close($ch);

	echo "Данные записанны";
?>