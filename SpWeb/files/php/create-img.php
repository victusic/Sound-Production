<?php
	$uploaddir = '../uploads/';
	$uploadfile = $uploaddir . basename('1.jpg');
	move_uploaded_file($_FILES['photo']['tmp_name'], $uploadfile);
	//unlink($uploadfile);
?>
<!--<script>localStorage.setItem('base64', '<?php //echo $data1 ?>');</script>-->