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
		if ($cmsv <= 1) {
			$result['count'] = "0";
			$result['time'] = "0";
		}
		else if ($cmsv > 1){
			//echo json_encode($msv[0]['Date']);
			
			//вчерашная дата
			$yesterdayDate = (date('Y-m-d', time()-24*3600));
			//позавчера
			$lasttodayDate = (date('Y-m-d', time()-48*3600));

			$countYesterday = 0; 
			$countLastToday = 0;

			for ($i = 0; $i < $cmsv; $i++) {
				$ndf = date('Y-m-d', strtotime($msv[$i]['Date']));
				if ($ndf == $yesterdayDate) {
					$countYesterday++;
				}
				if ($ndf == $lasttodayDate) {
					$countLastToday++;
				}
			}

			if ($countLastToday > $countYesterday) {
				$result['count'] = "-";
			}
			elseif ($countLastToday < $countYesterday) {
				$result['count'] = "+";
			}
			else{
				$result['count'] = "=";
			}

			$yesterdayTime = 0;
			$lasttodayTime = 0;

			for ($i = 0; $i < $cmsv; $i++) {
				$ndf = date('Y-m-d', strtotime($msv[$i]['Date']));
				if ($ndf == $yesterdayDate) {
					$part = explode(':', $msv[$i]['Time']);
					$sec = $part[0]*3600 + $part[1]*60 + $part[2];
					$yesterdayTime += $sec;
				}
				if ($ndf == $lasttodayDate) {
					$part = explode(':', $msv[$i]['Time']);
					$sec = $part[0]*3600 + $part[1]*60 + $part[2];
					$lasttodayTime += $sec;
				}
			}
			if ($countYesterday > 0) {
				$averageyesterday = $yesterdayTime / $countYesterday;
			}
			else{
				$averageyesterday = 0;
			}
			if ($countLastToday > 0) {
				$averagelasttoday = $lasttodayTime / $countLastToday;
			}
			else{
				$averagelasttoday = 0;
			}

			if ($averagelasttoday > $averageyesterday) {
				$result['time'] = "-";
			}
			elseif ($averagelasttoday < $averageyesterday) {
				$result['time'] = "+";
			}
			else{
				$result['time'] = "=";
			}
		}
		echo json_encode($result);
	}	
?>