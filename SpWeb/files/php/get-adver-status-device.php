<?php
	$zpr = $_GET['text'];
	$f = fopen('http://localhost:61315/api/getVisits?advertisiment='.$zpr, 'r');
	//$f = fopen('http://localhost:61315/api/getVisits?advertisiment=39', 'r');
	$data = stream_get_contents($f);
	 
	if ($data) {
		$msv = json_decode($data, true);
		header('Content-Type: application/json');
		$cmsv = count($msv);

		
		$devices = ['WebDesktop' => 0, 'WebMobile' => 0, 'MobileApp' => 0];

		for ($i = 0; $i < $cmsv; $i++) {
			if ($msv[$i]['Device'] == 1) {
				$devices['WebDesktop']++;
			}
			if ($msv[$i]['Device'] == 2) {
				$devices['WebMobile']++;
			}
			if ($msv[$i]['Device'] == 3) {
				$devices['MobileApp']++;
			}
		}

		//print_r($devices);

		echo json_encode($devices);
	}	
?>