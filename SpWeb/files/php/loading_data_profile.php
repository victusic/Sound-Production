<?php
	session_start();

	$zpr = $_SESSION['id'];
	$f = fopen('http://localhost:61315/api/getUsers?UserId='.$zpr, 'r');
	 
	// Получаем содержимое потока
	$data = stream_get_contents($f);
	 
	if ($data) {

		$msv = json_decode($data, true);

		header('Content-Type: application/json');

		//работа с паролем
		$prepass = $msv[0]['Password'][0];
		$len = iconv_strlen($msv[0]['Password'], 'utf-8');
   		$pass = substr($prepass, 0, 1).str_repeat('*', $len - 2).substr($prepass, $len - 1, 1);
 		
		$result = array(
			'name' => $msv[0]['Surname']." ".$msv[0]['Name']." ".$msv[0]['Patronymic'],
			'img' => $msv[0]['Logo'],
			'roll' => $msv[0]['Roll'],
			'status' => $msv[0]['IsActivity'],
			'count' => $msv[0]['CountAdvertisement'],
			'reg' => $msv[0]['RegistrationDate'],
			'login' => $msv[0]['Login'],
			'mail' => $msv[0]['Mail'],
			'phone' => $msv[0]['Phone'],
			'pass' => $pass,
			'passShow' => $msv[0]['Password'],
			'surname' => $msv[0]['Surname'],
			'name2' => $msv[0]['Name'],
			'patronymic' => $msv[0]['Patronymic'],
			'id' => $msv[0]['UserId']
		);
		 
		echo json_encode($result);
	}
?>