<?php 
	$content = file_get_contents("../uploads/1.jpg");
	$data1 = base64_encode($content);
	echo $data1;
?>