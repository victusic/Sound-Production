<?php
	//$json = json_decode($_POST["myData"]);
	//$data = $_POST["myData"];
	//$dataString = json_encode($json);

	$idz = $_POST["id"];

	//$datatest = '{"BandId":6,"Name":"Кoсь-кoсь","Producer":8,"Description":"Кис-Кис — российская рок-группа, основанная в ноябре 2018 года в Санкт-Петербурге. Коллектив состоит из четырех участников — барабанщицы Алины Олешевой, вокалистки Софьи Сомусевой, гитариста Юрия Заслонова и бас-гитариста Сергея Иванова. Коллектив получил известность благодаря альбому «Юность в стиле панк» и двум первым синглам. Почти за два года существования в общей сложности было снято 10 видеоклипов. Один из клипов получил вирусную популярность, за счет чего коллектив за первый год существования выступил на «Нашествии» и оказался в передаче «Вечерний Ургант».","DescriptionAreas":"Зал или арена, вместимость от 1000 + человека, возможность проведения слэма","SpotifyLink":"https://open.spotify.com/artist/4jIvmo6hfAQ04NSOWPVVA3?si=gS5K8Sy7TB-BSPMkpnpS1w","AppleMusicLink":"https://music.apple.com/us/artist/%D0%BA%D0%B8%D1%81-%D0%BA%D0%B8%D1%81/1445549139","DeezerLink":null,"YandexMusicLink":"https://music.yandex.ru/artist/6502292","YouTubeMusicLink":"https://music.youtube.com/channel/UCgupyiCfZlLOqBNq3C94dsg?feature=share","YouTubeLink":"https://www.youtube.com/c/kiskisnotdead","Phone":"8(952)855-37-45","Mail":"kritskiy_mark@mail.ru","Genre":1}';
	$url = 'http://localhost:61315/api/Areas/'.$idz;
	//$url = 'http://localhost:61315/api/Groups/6';
	


	$ch = curl_init();
	curl_setopt($ch, CURLOPT_URL, $url);
	curl_setopt($ch, CURLOPT_HTTPHEADER, array('Content-Type: application/json','Content-Length: ' . strlen($_POST["myData"])));
	curl_setopt($ch, CURLOPT_CUSTOMREQUEST, 'PUT');
	curl_setopt($ch, CURLOPT_POSTFIELDS, $_POST["myData"]);
	curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
	$response  = curl_exec($ch);
	curl_close($ch);

	echo "Типо готово";

?>