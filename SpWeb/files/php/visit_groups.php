<?php
	$f = fopen('http://localhost:61315/api/AdvertisementsGroupFull', 'r');
	$data = stream_get_contents($f);
	 
	if ($data) {
		$msс = json_decode($data, true);

		$Clvl = count($msс);

		header('Content-Type: application/json');

		for ($i = 0; $i < ($Clvl); $i++) {

			$f1 = fopen('http://localhost:61315/api/Groups/'.$msс[$i], 'r');
			$data1 = stream_get_contents($f1);
			$msv[$i] = json_decode($data1, true);
		}

		$msv['Count'] = $Clvl;
		echo json_encode($msv);
	}
?>