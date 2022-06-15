<?php
	session_start();

	$zpr = $_SESSION['id'];
	$f = fopen('http://localhost:61315/api/getAreas?Representative='.$zpr, 'r');
	$data = stream_get_contents($f);
	 
	if ($data) {
		$msv = json_decode($data, true);

		$Clvl = count($msv);

		header('Content-Type: application/json');

		$result = array();

		for ($i = 0; $i <= ($Clvl); $i++) {
			array_push($result, (array("AreaId" => $msv[$i]['AreaId'], "Name" => $msv[$i]['Name'], "Representative" => $msv[$i]['Representative'], "Description" => $msv[$i]['Description'], "DescriptionGroups" => $msv[$i]['DescriptionGroups'], "PhotoLogo" => $msv[$i]['PhotoLogo'], "Photo1" => $msv[$i]['Photo1'], "Photo2" => $msv[$i]['Photo2'], "Photo3" => $msv[$i]['Photo3'], "Photo4" => $msv[$i]['Photo4'], "Photo5" => $msv[$i]['Photo5'], "Photo6" => $msv[$i]['Photo6'], "Capacity" => $msv[$i]['Capacity'], "Equipment" => $msv[$i]['Equipment'], "Phone" => $msv[$i]['Phone'], "Mail" => $msv[$i]['Mail'], "Location" => $msv[$i]['Location'])));
		}

		$result['Count'] = $Clvl;
		
		echo json_encode($result);
	}
?>