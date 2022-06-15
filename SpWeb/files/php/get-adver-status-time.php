<?php
	$zpr = $_GET['text'];
	$f = fopen('http://localhost:61315/api/getVisits?advertisiment='.$zpr, 'r');
	//$f = fopen('http://localhost:61315/api/getVisits?advertisiment=39', 'r');
	// Получаем содержимое потока
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
		$time_visits = [7 => 0, 6 => 0, 5 => 0, 4 => 0, 3 => 0, 2 => 0, 1 => 0];
		$result_visits = [7 => 0, 6 => 0, 5 => 0, 4 => 0, 3 => 0, 2 => 0, 1 => 0];

		for ($i = 0; $i < $cmsv; $i++) {
			$ndf = date('Y-m-d', strtotime($msv[$i]['Date']));
			for ($s = 7; $s >= 1; $s--) { 
				if ($ndf == $days[$s]) {
					$count_visits[$s]++;
				}
			}
		}

		for ($i = 0; $i < $cmsv; $i++) {
			$ndf = date('Y-m-d', strtotime($msv[$i]['Date']));
			for ($s = 7; $s >= 1; $s--) { 
				if ($ndf == $days[$s]) {
					$part = explode(':', $msv[$i]['Time']);
					$sec = $part[0]*3600 + $part[1]*60 + $part[2];
					$time_visits[$s] += $sec;
				}
			}
		}

		for ($r = 7; $r >= 1; $r--) {
			if ($count_visits[$r] > 0) {
				$result_visits[$r] = $time_visits[$r] / $count_visits[$r];
			}
			else{
				$result_visits[$r] = 0;
			}
		}

		//print_r($result_visits);

		echo json_encode($result_visits);
	}	
?>