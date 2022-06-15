<?php 
	$content = file_get_contents("../uploads/LogoGroup.jpg");
	$data2 = base64_encode($content);
	echo $data2;
?>