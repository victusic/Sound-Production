<?php
	$zpr = $_GET['text'];
	$f = fopen('http://localhost:61315/api/getVisits?advertisiment='.$zpr, 'r');
	//$f = fopen('http://localhost:61315/api/getVisits?advertisiment=39', 'r');
	$data = stream_get_contents($f);
	 
	if ($data) {
		$msv = json_decode($data, true);
		header('Content-Type: application/json');
		$cmsv = count($msv);

		$days = [];

		for ($i = 7; $i >= 1; $i--) { 
			$hours = 24 * $i;
			$days[$i] = (date('Y-m-d', time() - $hours * 3600));
		}
		
		$count_visits = [7 => 0, 6 => 0, 5 => 0, 4 => 0, 3 => 0, 2 => 0, 1 => 0];

		for ($i = 0; $i < $cmsv; $i++) {
			$ndf = date('Y-m-d', strtotime($msv[$i]['Date']));
			for ($s = 7; $s >= 1; $s--) { 
				if ($ndf == $days[$s]) {
					$count_visits[$s]++;
				}
			}
		}

		//print_r($count_visits);

		echo json_encode($count_visits);
	}	
?>