<?php
	session_start();

	$zpr = $_SESSION['id'];
	$f = fopen('http://localhost:61315/api/Advertisements?RepresentativeId='.$zpr, 'r');
	$data = stream_get_contents($f);
	 
	if ($data) {
		$msс = json_decode($data, true);

		$Clvl = count($msс);

		header('Content-Type: application/json');

		//$result = array();

		for ($i = 0; $i < ($Clvl); $i++) {

			$f1 = fopen('http://localhost:61315/api/Groups/'.$msс[$i], 'r');
			$data1 = stream_get_contents($f1);
			$msv[$i] = json_decode($data1, true);

			/*array_push($result, (array("BandId" => $msv[$i]['BandId'], "Name" => $msv[$i]['Name'], "Producer" => $msv[$i]['Producer'], "Description" => $msv[$i]['Description'], "DescriptionAreas" => $msv[$i]['DescriptionAreas'], "PhotoLogo" => $msv[$i]['PhotoLogo'], "Photo1" => $msv[$i]['Photo1'], "Photo2" => $msv[$i]['Photo2'], "Photo3" => $msv[$i]['Photo3'], "Photo4" => $msv[$i]['Photo4'], "Photo5" => $msv[$i]['Photo5'], "Photo6" => $msv[$i]['Photo6'], "SpotifyLink" => $msv[$i]['SpotifyLink'], "AppleMusicLink" => $msv[$i]['AppleMusicLink'], "DeezerLink" => $msv[$i]['DeezerLink'], "YandexMusicLink" => $msv[$i]['YandexMusicLink'], "YouTubeMusicLink" => $msv[$i]['YouTubeMusicLink'], "YouTubeLink" => $msv[$i]['YouTubeLink'], "Phone" => $msv[$i]['Phone'], "Mail" => $msv[$i]['Mail'], "Genre" => $msv[$i]['Genre']))
			);*/
		}

		$msv['Count'] = $Clvl;
		echo json_encode($msv);
		//echo ($msс[0]);
		//echo json_encode($result);
	}
?>