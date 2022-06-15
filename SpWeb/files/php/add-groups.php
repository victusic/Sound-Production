<?php
	$url = 'http://localhost:61315/api/Groups';

	$ch = curl_init($url);
	curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
	curl_setopt($ch, CURLOPT_POSTFIELDS, $_POST["myData"]);
	curl_setopt($ch, CURLOPT_HTTPHEADER, [
		'Content-Type: application/json',
		'Content-Length: ' . strlen($_POST["myData"])
	]);

	$result = curl_exec($ch);
	curl_close($ch);
?>