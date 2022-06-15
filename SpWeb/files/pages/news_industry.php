<?php 
	session_start();
	if (isset($_COOKIE["roll"])) {
		$_SESSION['id'] = $_COOKIE["id"];
		$_SESSION['roll'] = $_COOKIE["roll"];
		$_SESSION['login'] = $_COOKIE["login"];
	}
	$_SESSION['TypePage'] = 0;
?>
<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8">
		<title>Sound Production</title>
		<link href="../css/pages/industry_news_page.css" rel="stylesheet">
		<link href="../css/system/colors.css" rel="stylesheet">
		<link href="../css/system/reset.css" rel="stylesheet">
		<link href="../css/system/base.css" rel="stylesheet">
		<link href="../css/system/fonts.css" rel="stylesheet">

		<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
		<script src="https://cdn.jsdelivr.net/npm/jquery.maskedinput@1.4.1/src/jquery.maskedinput.min.js"></script>
		<script src="../scripts/pages/industry_news_page.js"></script>
		<script src="../scripts/system/base.js"></script>
		<script src="../scripts/pages/materials_page.js"></script>

		<link type="image/x-icon" rel="shortcut icon" href="../img/icon/favicon.ico">
	</head>
	<body>
		<div class="base" id="base">
			<header>
				<div class="logoext" onclick="window.location.href ='../../index.php';">SOUND PRODUCTION</div>
				<!--<input type="button" class="btn auroriz-btn" id="autorise-btn" value="Войти">-->
			</header>
			<nav id="nav">
				<input type="button" id="glav" class="navbtn btn" value="Главная" onclick="window.location.href ='../../index.php';">
				<input type="button" id="news" class="navbtn btn" value="Новости">
					<div id="news_list" class="news_list doplist">
						<div class="nav_line"></div>
						<div class="listbtn" onclick="window.location.href ='news_industry.php';">Новости индустрии</div>
						<div class="nav_line"></div>
						<div class="listbtn" onclick="window.location.href ='news_company.php';">Новости компании</div>
						<div class="nav_line"></div>
					</div>
				<input type="button" id="about" class="navbtn btn" value="О нас">	
					<div id="about_list" class="about_list doplist">
						<div class="nav_line"></div>
						<div class="listbtn" onclick="window.location.href ='about_achievements.php';">Наши достижения</div>
						<div class="nav_line"></div>
						<div class="listbtn" onclick="window.location.href ='about_ethics.php';">Корпоративная этика</div>
						<div class="nav_line"></div>
					</div>
				<input type="button" id="coop" class="navbtn btn" value="Сотрудничество">
					<div id="cooperation_list" class="cooperation_list doplist">
						<div class="nav_line"></div>
						<div class="listbtn" onclick="window.location.href ='cooperation_jobs.php';">Вакансии</div>
						<div class="nav_line"></div>
						<div class="listbtn" onclick="window.location.href ='cooperation_policy.php';">Пользование сервисом</div>
						<div class="nav_line"></div>
					</div>

				<!--Вход-->
				<input type="button" id="autorise-btn" class="navbtn btn" value="Личный кабинет">
				<!--Продюссер-->
				<input type="button" id="prod" class="navbtn btn" value="Личный кабинет">
					<div id="ls3" class="lk_list doplist">
						<div class="nav_line"></div>
						<div class="listbtn" onclick="window.location.href ='../pages/records_group.php';">Ваши записи</div>
						<div class="nav_line"></div>
						<div class="listbtn" onclick="window.location.href ='../pages/advertisements_group.php';">Ваши объявления</div>
						<div class="nav_line"></div>
						<div class="listbtn" onclick="window.location.href ='../pages/visible_area.php';">Просмотр площадок</div>
						<div class="nav_line"></div>
						<div class="listbtn" onclick="window.location.href ='../pages/profile.php';">Управление аккаунтом</div>
						<div class="nav_line"></div>
						<form action="../php/exit.php">
							<button class="listbtn" id="prod_exit" style="border: none;">Выйти</button>
						</form>
						<div class="nav_line"></div>
					</div>
				<!--Менеджер-->
				<input type="button" id="manag" class="navbtn btn" value="Личный кабинет">
					<div id="ls4" class="lk_list doplist">
						<div class="nav_line"></div>
						<div class="listbtn" onclick="window.location.href ='../pages/records_area.php';">Ваши записи</div>
						<div class="nav_line"></div>
						<div class="listbtn" onclick="window.location.href ='../pages/advertisements_area.php';">Ваши объявления</div>
						<div class="nav_line"></div>
						<div class="listbtn" onclick="window.location.href ='../pages/visible_group.php';">Просмотр групп</div>
						<div class="nav_line"></div>
						<div class="listbtn" onclick="window.location.href ='../pages/profile.php';">Управление аккаунтом</div>
						<div class="nav_line"></div>
						<form action="../php/exit.php">
							<button class="listbtn" id="manag_exit" style="border: none;">Выйти</button>
						</form>
						<div class="nav_line"></div>
					</div>
			</nav>
			<div class="back" id="back">
				<div class="NoneBack">Кажется, ничего не нашлось... <br> Рекомендуем сбросить фильтры</div>
				<div class="list0 lists">
					<div class="head_text"><b>Новости музыки</b></div>
				</div>
				<div class="listr lists">
					<div class="zga_text" id="zga1">Фильтры</div>
					<div class="flt_text">
						<b>По времени:</b>
						<br><br><br><br><br><br><br><br><br><br><br><br><br><br>
						<b>По тэгам:</b>
					</div>
					<div class="flex_tags_base">
						<div class="tag tag_great_britain">Great&nbspBritain</div>
						<div class="tag tag_usa">USA</div>
						<div class="tag tag_sweden">Sweden</div>
						<div class="tag tag_korea">Korea</div>
						<div class="tag tag_russia">Russia</div>
						
						<div class="tag tag_group">Group</div>
						<div class="tag tag_album">Album</div>
						<div class="tag tag_song">Song</div>
						<div class="tag tag_tour">Tour</div>
						<div class="tag tag_clip">Clip</div>

						<div class="tag tag_release">Release</div>
						<div class="tag tag_anniversary">Anniversary</div>
						<div class="tag tag_spotify">Spotify</div>
						<div class="tag tag_top">Top</div>
						<div class="tag tag_dead">Dead</div>
					</div>
					<input type="button" class="time_buttons time_buttons_blue timeB1" value="Сегодня">
					<input type="button" class="time_buttons time_buttons_green timeB2" value="Вчера">
					<input type="button" class="time_buttons time_buttons_blue timeB3" value="В последние дни">
					<input type="button" class="time_buttons time_buttons_green timeB4" value="Последняя неделя">
					<input type="button" class="time_buttons time_buttons_blue timeB5" value="Последний месяц">
					<input type="button" class="time_buttons time_buttons_green timeB6" value="Последний год">
					<input type="button" class="btn" id="fback" value="Сбросить"></input>
				</div>
				<div class="listn lists" id="list14">
					<div class="dt_text" id="dt_text14">date</div>
					<div class="zg_text" id="zg_text14">&nbsp&nbsp&nbspВышел аудиовизуальный альбом со звуками рельефа регионов округа</div>
					<div class="cl_text">
						В Приволжье вышел аудиовизуальный альбом со звуками рельефа регионов округа.
						<br><br>
						Премьера аудиовизуального альбома "Музыка Приволжья", позволяющего услышать, как звучит рельеф местных регионов, состоялась 27 декабря в Приволжском федеральном округе, сообщает пресс-служба полпреда президента РФ в ПФО.
						Основой мелодии стали преобразованные звуковые колебания значения высот объектов регионов округа.
					</div>
					<div class="img_yap" id="img_sibir"></div>
					<div class="dbl_text" id="vc14" onclick="window.location.href ='news.php';">Читать полностью...</div>
					<div class="flex_tags_base_cards">
						<div class="tags_text">Тэги:</div>
						<div class="tag tag_russia">Russia</div>
						<div class="tag tag_album">Album</div>
						<div class="tag tag_release">Release</div>
					</div>
				</div>
				<div class="listn lists" id="list13">
					<div class="dt_text" id="dt_text13">date</div>
					<div class="zg_text" id="zg_text13">&nbsp&nbsp&nbspКорейские звезды объединились в новую музыкальную группу</div>
					<div class="cl_text">
						Корейские звезды объединились в новую музыкальную группу GOT the beat
						<br><br>
						Крупнейшая развлекательная южнокорейская компания SM Entertainment запустила новую музыкальную группу GOT the beat, сообщает TheKoreaTimes.
						<br>
						Дебютирует семерка на бесплатном онлайн-концерте под названием "SMTOWN Live 2022: SMCU Express@Kwangya" в субботу. А третьего января они уже выпустят свой первый трек.
					</div>
					<div class="img_yap" id="img_got"></div>
					<div class="dbl_text" id="vc13" onclick="window.location.href ='news.php';">Читать полностью...</div>
					<div class="flex_tags_base_cards">
						<div class="tags_text">Тэги:</div>
						<div class="tag tag_korea">Korea</div>
						<div class="tag tag_group">Group</div>
					</div>
				</div>
				<div class="listn lists" id="list12">
					<div class="dt_text" id="dt_text12">date</div>
					<div class="zg_text" id="zg_text12">&nbsp&nbsp&nbspУчастники группы "Сплин" проводили 2021 год песней "Топай!"</div>
					<div class="cl_text">
						Участники группы "Сплин" представили новый трек "Топай!"
						<br><br>
						В комментариях под постом слушатели заявили, что новая песня "Сплин" — "глоток свежего воздуха".
						"Шикарная песня. Хоть какая-то радость под конец года", "Благодарю от всей души. Как всегда — лучшая поддержка в самое сложное время!" — поделились впечатлениями пользователи.
					</div>
					<div class="img_yap" id="img_splean"></div>
					<div class="dbl_text" id="vc12" onclick="window.location.href ='news.php';">Читать полностью...</div>
					<div class="flex_tags_base_cards">
						<div class="tags_text">Тэги:</div>
						<div class="tag tag_russia">Russia</div>
						<div class="tag tag_song">Song</div>
						<div class="tag tag_release">Release</div>
					</div>
				</div>
				<div class="listn lists" id="list11">
					<div class="dt_text" id="dt_text11">date</div>
					<div class="zg_text" id="zg_text11">&nbsp&nbsp&nbspЗемфира объявила о февральских концертах в Москве</div>
					<div class="cl_text">
						Земфира объявила о концертах в Москве 24 и 26 февраля
						<br><br>
						Земфира сообщила, что 24 и 26 февраля даст сольные концерты в Music Media Dome в Москве.
						Прошлый концертный тур певицы "Маленький человек" состоялся в 2016 году.
						<br><br>
						"Концерты в Москве 24 и 26 февраля 2022 — Music Media Dome"
					</div>
					<div class="img_yap" id="img_zemfira"></div>
					<div class="dbl_text" id="vc11" onclick="window.location.href ='news.php';">Читать полностью...</div>
					<div class="flex_tags_base_cards">
						<div class="tags_text">Тэги:</div>
						<div class="tag tag_russia">Russia</div>
						<div class="tag tag_tour">Tour</div>
					</div>
				</div>
				<div class="listn lists" id="list10">
					<div class="dt_text" id="dt_text10">date</div>
					<div class="zg_text" id="zg_text10">&nbsp&nbsp&nbspДжоанна Стингрей в 2022 году выпустит книгу к 60-летию Цоя</div>
					<div class="cl_text">
						Певица Джоанна Стингрей в 2022 г выпустит книгу к 60-летию со дня рождения Виктора Цоя
						<br><br>
						Продюсер и писательница Джоанна Стингрей рассказала в интервью РИА Новости о том, что в 2022 году планирует выпустить свою шестую книгу, посвященную 60-летию со дня рождения музыканта Виктора Цоя.
					</div>
					<div class="img_yap" id="img_tsoi"></div>
					<div class="dbl_text" id="vc10" onclick="window.location.href ='news.php';">Читать полностью...</div>
					<div class="flex_tags_base_cards">
						<div class="tags_text">Тэги:</div>
						<div class="tag tag_russia">Russia</div>
						<div class="tag tag_usa">USA</div>
						<div class="tag tag_anniversary">Anniversary</div>
					</div>
				</div>
				<div class="listn lists" id="list9">
					<div class="dt_text" id="dt_text9">date</div>
					<div class="zg_text" id="zg_text9">&nbsp&nbsp&nbspSpotify рассказал, какая музыка прошлых лет популярна у россиян</div>
					<div class="cl_text">
						Spotify рассказал, что у российских слушателей популярны KISS, Queen, Кино и Linkin Park
						<br><br>
						Стриминговый сервис Spotify выяснил, какой музыкальный жанр прошлых десятилетий чаще всего слушают россияне — им оказался рок, а среди любимых групп — KISS, Queen, Кино и Linkin Park.
						Spotify проанализировал песни 1970-х, 80-х, 90-х и нулевых и выяснил, какая музыка прошлого пользуются наибольшим успехом сегодня. 
					</div>
					<div class="img_yap" id="img_kiss"></div>
					<div class="dbl_text" id="vc9" onclick="window.location.href ='news.php';">Читать полностью...</div>
					<div class="flex_tags_base_cards">
						<div class="tags_text">Тэги:</div>
						<div class="tag tag_spotify">Spotify</div>
						<div class="tag tag_top">Top</div>
					</div>
				</div>
				<div class="listn lists" id="list8">
					<div class="dt_text" id="dt_text8">date</div>
					<div class="zg_text" id="zg_text8">&nbsp&nbsp&nbspУмер музыкант группы "Сплин" Олег Эмиров</div>
					<div class="cl_text">
						Умер композитор и музыкант групп "Сплин" и "Колибри" Олег Эмиров
						<br><br>
						Российский композитор и музыкант, участник групп "Сплин" и "Колибри" Олег Эмиров умер на 52-м году жизни. Об этом сообщается на официальной странице "Колибри" в фейсбуке.
						"Музыкант редкого и большого дара, высочайшего уровня культуры, мудрый друг, надежный товарищ. Человек", — заявили представители коллектива.
					</div>
					<div class="img_yap" id="img_emirov"></div>
					<div class="dbl_text" id="vc8" onclick="window.location.href ='news.php';">Читать полностью...</div>
					<div class="flex_tags_base_cards">
						<div class="tags_text">Тэги:</div>
						<div class="tag tag_russia">Russia</div>
						<div class="tag tag_dead">Dead</div>
					</div>
				</div>
				<div class="listn lists" id="list7">
					<div class="dt_text" id="dt_text7">date</div>
					<div class="zg_text" id="zg_text7">&nbsp&nbsp&nbspЭд Ширан и Элтон Джон выпустили совместный рождественский клип</div>
					<div class="cl_text">
						Эд Ширан и Элтон Джон представили совместный клип "Merry Christmas"
						<br><br>
						Эд Ширан и Элтон Джон выпустили совместный трек "Merry Christmas". О выходе новой песни и клипе они рассказали в личных микроблогах.
						"Мы хорошо повеселились, когда снимали ролик", — написали музыканты в соцсетях.
						"Лучше просто не может быть", "Это все, что я хочу на Рождество", "Официально: это моя любимая рождественская песня"
					</div>
					<div class="img_yap" id="img_elton"></div>
					<div class="dbl_text" id="vc7" onclick="window.location.href ='news.php';">Читать полностью...</div>
					<div class="flex_tags_base_cards">
						<div class="tag tag_great_britain">Great&nbspBritain</div>
						<div class="tag tag_clip">Clip</div>
						<div class="tag tag_release">Release</div>
					</div>
				</div>
				<div class="listn lists" id="list6">
					<div class="dt_text" id="dt_text6">date</div>
					<div class="zg_text" id="zg_text6">&nbsp&nbsp&nbspБессмертный голос. Ушел Александр Градский</div>
					<div class="cl_text">
						Про Александра Градского можно с уверенностью сказать: "легенда" — однако даже это слово все равно недостаточно отражает, что именно он значил для нашей культуры. Казалось, ему все время было тесно в любом жанре, но при этом он с одинаковой легкостью мог творить, невзирая на стили и направления. Музыка была его стихией, он ею жил, он ею дышал, он без нее не мог.
						От природы наделенный фантастическими вокальными данными, он, конечно же, как и все молодые люди конца 60-х, увлекся рок-музыкой...
					</div>
					<div class="img_yap" id="img_gradskie"></div>
					<div class="dbl_text" id="vc6" onclick="window.location.href ='news.php';">Читать полностью...</div>
					<div class="flex_tags_base_cards">
						<div class="tags_text">Тэги:</div>
						<div class="tag tag_russia">Russia</div>
						<div class="tag tag_dead">Dead</div>
					</div>
				</div>
				<div class="listn lists" id="list5">
					<div class="dt_text" id="dt_text5">date</div>
					<div class="zg_text" id="zg_text5">&nbsp&nbsp&nbspАдель попросила Spotify не менять местами песни на ее новом альбоме</div>
					<div class="cl_text">
						Адель попросила Spotify не менять местами песни на ее новом альбоме "30"
						<br><br>
						Стриминговая платформа Spotify после просьбы британской певицы Адель не менять порядок треков на ее новом альбоме отключила функцию случайного воспроизведения композиций.
						Первая за шесть лет новая пластинка Адель "30", которую еще до выхода окрестили "альбомом развода", вышла в свет 19 ноября.
					</div>
					<div class="img_yap" id="img_adele"></div>
					<div class="dbl_text" id="vc5" onclick="window.location.href ='news.php';">Читать полностью...</div>
					<div class="flex_tags_base_cards">
						<div class="tags_text">Тэги:</div>
						<div class="tag tag_great_britain">Great&nbspBritain</div>
						<div class="tag tag_spotify">Spotify</div>
						<div class="tag tag_album">Album</div>
					</div>
				</div>
				<div class="listn lists" id="list4">
					<div class="dt_text" id="dt_text4">date</div>
					<div class="zg_text" id="zg_text4">&nbsp&nbsp&nbspВ Великобритании нашли кассету с неизвестной песней The Beatles</div>
					<div class="cl_text">
						На чердаке дома в Великобритании обнаружили кассету с неизвестной песней Radhe Shaam, в записи которой участвовали гитарист и барабанщик The Beatles Джордж Харрисон и Ринго Старр, сообщает издание Evening Standard.
						<br>
						Композитор Суреш Джоши записал Radhe Shaam вместе с музыкантами в 1968 году. По его словам, певец Аашиш Хан отвечал за вокальное исполнение, Харрисон играл на гитаре, а Старр аккомпанировал на барабанах.
					</div>
					<div class="img_yap" id="img_beatles"></div>
					<div class="dbl_text" id="vc4" onclick="window.location.href ='news.php';">Читать полностью...</div>
					<div class="flex_tags_base_cards">
						<div class="tags_text">Тэги:</div>
						<div class="tag tag_great_britain">Great&nbspBritain</div>
						<div class="tag tag_song">Song</div>
					</div>
				</div>
				<div class="listn lists" id="list3">
					<div class="dt_text" id="dt_text3">date</div>
					<div class="zg_text" id="zg_text3">&nbsp&nbsp&nbspСнова первые и лучшие. ABBA отправляется в бесконечный вояж</div>
					<div class="cl_text">
						У меломанов всего мира праздник: выходит "Voyage" — новый альбом группы ABBA, их первый релиз за 40 лет. О том, как великие шведы устроили шоу-революцию и сможем ли мы увидеть их молодыми, — в материале РИА Новости.
						<br><br>
						Формально ABBA никогда не распадалась, просто после выпуска пластинки "The Visitors" легендарная шведская четверка приостановила деятельность. 
					</div>
					<div class="img_yap" id="img_abba"></div>
					<div class="dbl_text" id="vc3" onclick="window.location.href ='news.php';">Читать полностью...</div>
					<div class="flex_tags_base_cards">
						<div class="tags_text">Тэги:</div>
						<div class="tag tag_sweden">Sweden</div>
						<div class="tag tag_album">Album</div>
						<div class="tag tag_release">Release</div>
					</div>
				</div>
				<div class="listn lists" id="list2">
					<div class="dt_text" id="dt_text2">date</div>
					<div class="zg_text" id="zg_text2">&nbsp&nbsp&nbspГруппа Limp Bizkit выпустила первый за десять лет альбом</div>
					<div class="cl_text">
						Группа Limp Bizkit выпустила первый за десять лет альбом "Still sucks"
						<br><br>
						Группа Limp Bizkit выпустила первый за десять лет альбом — "Stil sucks". О его выходе музыканты сообщили в своем Instagram-аккаунте.
						Пластинка доступна на цифровых платформах.
						Известно, что рокеры сначала хотели назвать новый сборник "Stampede of the Disco Elephants", однако в итоге его переименовали.
					</div>
					<div class="img_yap" id="img_limp_bizkit"></div>
					<div class="dbl_text" id="vc2" onclick="window.location.href ='news.php';">Читать полностью...</div>
					<div class="flex_tags_base_cards">
						<div class="tag tag_usa">USA</div>
						<div class="tag tag_album">Album</div>
						<div class="tag tag_release">Release</div>
					</div>
				</div>
				<div class="listn lists" id="list1">
					<div class="dt_text" id="dt_text1">date</div>
					<div class="zg_text" id="zg_text1">&nbsp&nbsp&nbspЭд Ширан выпустил новый альбом</div>
					<div class="cl_text">
						Эд Ширан выпустил новый альбом "="
						<br><br>
						Эд Ширан выпустил новый альбом "=" (произносится как Equals, "равно" — англ.). Об этом музыкант сообщил на своей странице в Instagram.
						<br>
						На диске 14 треков, среди них вышедшие ранее синглы "Bad Habits", "Shivers" и "Visiting Hours".
					</div>
					<div class="img_yap" id="img_sheeran"></div>
					<div class="dbl_text" id="vc1" onclick="window.location.href ='news.php';">Читать полностью...</div>
					<div class="flex_tags_base_cards">
						<div class="tags_text">Тэги:</div>
						<div class="tag tag_great_britain">Great&nbspBritain</div>
						<div class="tag tag_album">Album</div>
						<div class="tag tag_release">Release</div>
					</div>
				</div>
				<div id="dt_text01"></div><div id="dt_text02"></div><div id="dt_text03"></div><div id="dt_text04"></div>
				<div id="dt_text05"></div><div id="dt_text06"></div><div id="dt_text07"></div><div id="dt_text08"></div>
				<div id="dt_text09"></div><div id="dt_text010"></div><div id="dt_text011"></div><div id="dt_text012"></div>
				<div id="dt_text013"></div><div id="dt_text014"></div>
			</div>
			<footer>
				<div class="colmn"><div class="incolmn">
					<div class="ftext footer_text" onclick="window.location.href ='../../index.php';"><b>Главная</b></div>
					<div class="fline"></div>
				</div></div>
				<div class="colmn"><div class="incolmn"><div class="ftext footer_text" onclick="window.location.href ='news_head.php';"><b>Новости</b></div>
					<div class="fline"></div>
					<div class="stext footer_text" onclick="window.location.href ='news_industry.php';">Новости индустрии</div>
					<div class="stext footer_text" onclick="window.location.href ='news_company.php';">Новости компании</div>
				</div></div>
					<div class="colmn"><div class="incolmn"><div class="ftext footer_text" onclick="window.location.href ='about_head.php';"><b>О нас</b></div>
					<div class="fline"></div>
					<div class="stext footer_text" onclick="window.location.href ='about_achievements.php';">Наши достижения</div>
					<div class="stext footer_text" onclick="window.location.href ='about_ethics.php';">Корпоративная этика</div>
				</div></div>
					<div class="colmn"><div class="incolmn"><div class="ftext footer_text" onclick="window.location.href ='cooperation_head.php';"><b>Сотрудничество</b></div>
					<div class="fline"></div>
					<div class="stext footer_text" onclick="window.location.href ='cooperation_jobs.php';">Вакансии</div>
					<div class="stext footer_text" onclick="window.location.href ='cooperation_policy.php';">Пользование сервисом</div>
				</div></div>
					<div class="colmn"><div class="incolmn"><div class="ftext footer_text"><b>Личный кабинет</b></div>
					<div class="fline"></div>
					<div class="stext footer_text" id="f-autorise">Войти</div>
					<div class="stext footer_text" id="pr-z" onclick="window.location.href ='../pages/records_group.php';">Ваши записи</div>
					<div class="stext footer_text" id="pr-o" onclick="window.location.href ='../pages/advertisements_group.php';">Ваши объявления</div>
					<div class="stext footer_text" id="pr-p" onclick="window.location.href ='../pages/visible_area.php';">Просмотр площадок</div>
					<div class="stext footer_text" id="man-z" onclick="window.location.href ='../pages/records_area.php';">Ваши записи</div>
					<div class="stext footer_text" id="man-o" onclick="window.location.href ='../pages/advertisements_area.php';">Ваши объявления</div>
					<div class="stext footer_text" id="man-g" onclick="window.location.href ='../pages/visible_group.php';">Просмотр групп</div>
				</div></div>
			</footer>
			<div class="socialline">
				<div class="outro_text">© Sound production by Horoshilov corporation</div>
				<div class="bodys">
					<input type='checkbox' id='time'/>
					<label for='time' id="lb">Night</label>
				</div>
				<div class="link"><div class="linkimg" id="linkYoutube" 
					onclick="window.open('https://www.youtube.com/channel/UCxk-mBW7X4ZLu_J-wlPLe2A')"></div></div>
				<div class="link"><div class="linkimg" id="linkPinterest" 
					onclick="window.open('https://www.pinterest.ru/SoundProductionRu')"></div></div>
				<div class="link"><div class="linkimg" id="linkTelegram" 
					onclick="window.open('https://t.me/SoundProductionRu')"></div></div>
				<div class="link"><div class="linkimg" id="linkMail" onclick="window.location.href ='contact_form.php';"></div></div>
			</div>

			<!-- Непервоначальновизуальные объекты -->
			<div class="autorisation-block" id="autorise-block">
				<div class="inblok-relative" id="lg_bl">
					<div class="autorisation-block-exit" id="autorise-close">&#10006</div>
					<div class="autorisation-text-zagl-a autorisation-text-zagl" id="text_btnV">Вход</div>
					<div class="autorisation-text-zagl-s autorisation-text-zagl">&nbsp/&nbsp</div>
					<div class="autorisation-text-zagl-r autorisation-text-zagl" id="text_btnR">Регистрация</div>
					<form id="formV" action="../php/login.php" method="POST">
						<div class="auroriz-preview-text-login Vr-preview-text" id="lg_lg">Логин</div>
						<input type="text" name="login_login" id="login_login" class="V_input_login vr_input">
						<div class="auroriz-preview-text-password Vr-preview-text" id="lg_psw">Пароль</div>
						<input type="password" name="login_password" id="login_password" class="V_input_password vr_input">
						<div class="auroriz-captcha">
							<!--Капча-->
							<div class="text-app-lg" id="captcha-text">Подтвердите, что вы не робот</div>
							<div class="s-switch-lg" id="captcha-switch">
								<input class="inp-cbx" id="cbxlg" type="checkbox" style="display: none"/>
								<label class="cbx" for="cbxlg">
									<span>
										<svg width="8px" height="6px" viewbox="0 0 12 10">
											<polyline points="1.5 6 4.5 9 10.5 1"></polyline>
										</svg>
									</span>
								</label>
							</div>
							<!--Забыли пароль?-->
							<a class="forgot-password" id="fg-password">Забыли пароль?</a>
						</div>
						<button name="login_button" id="lgbutton" class="btn auroriz-btn-in-block" text="Войти">Войти</button>
						<div class="password-icon" id="password-icon"></div>
					</form>
					<form id="formR">
						<div class="reg-preview-text-surname Vr-preview-text" id="rg_srnm">Фамилия</div>
						<input type="text" name="" class="R_input_surname vr_input" id="rg-surname" maxlength="50">
						<div class="reg-preview-text-name Vr-preview-text" id="rg_snm">Имя</div>
						<input type="text" name="" class="R_input_name vr_input" id="rg-name" maxlength="50">
						<div class="reg-preview-text-patronymic Vr-preview-text" id="rg_ptrnm">Отчество</div>
						<input type="text" name="" class="R_input_patronymic vr_input" id="rg-patronymic" maxlength="50">
						<div class="reg-preview-text-phone Vr-preview-text" id="rg_phn">Телефон</div>
						<input type="text" name="" class="R_input_phone vr_input" id="rg-phone">
						<div class="reg-preview-text-mail Vr-preview-text" id="rg_mil">Почта</div>
						<input type="text" name="" class="R_input_mail vr_input" id="rg-mail" maxlength="70">
						<div class="reg-preview-text-login Vr-preview-text" id="rg_lgn">Логин</div>
						<input type="text" name="" class="R_input_login vr_input" id="rg-login" maxlength="70">
						<div class="reg-preview-text-password Vr-preview-text" id="rg_psw">Пароль</div>
						<input type="password" name="" class="R_input_password vr_input" id="rg-password" maxlength="70">
						<div class="reg-preview-text-password-double Vr-preview-text" id="rg_pswd">Повторите пароль</div>
						<input type="password" name="" class="R_input_password_double vr_input" id="rg-password-double" maxlength="70">
						<div class="reg-preview-text-roll Vr-preview-text">Роль</div>
						<div class="switch-box">
							<div class="switch-button">
								<input class="switch-button-checkbox" type="checkbox" id="rg-roll"></input>
								<label class="switch-button-label" for=""><span class="switch-button-label-span">Продюссер группы</span></label>
							</div>
						</div>
						<div class="text-app" id="text-app">Согласие на обработку персональных данных</div>
						<div class="s-switch">
							<input class="inp-cbx" id="cbx" type="checkbox" style="display: none"/>
							<label class="cbx" for="cbx">
								<span>
									<svg width="8px" height="6px" viewbox="0 0 12 10">
										<polyline points="1.5 6 4.5 9 10.5 1"></polyline>
									</svg>
								</span>
							</label>
						</div>
						<input type="button" class="btn reg-btn-in-block" id="prm" value="Зарегистрироваться"></input>
					</form>
				</div>
			</div>
		</div>
		<div id="fog"></div>
		<div id="cookie_base">
			<div class="cookies-block-exit" id="cookies-close">&#10006</div>
			<div class="cline">
				Мы используем файлы cookie для вашего удобства пользования сайтом и повышения качества рекомендаций.&nbsp
				<div id="about_cookie"><u>Подробнее</u></div>
				&nbsp&nbsp
				<input type="button" class="btn_cookie" id="btn_cookie" value="Я согласен"></input>
			</div>	
		</div>
		<div class="cookies-band" id="cookies-band">
			<div class="cookies-band-exit" id="cookies-band-close">&#10006</div>
			<div class="cookies-band-text">
				Продолжая использовать наш сайт, вы даете согласие на обработку файлов cookie (пользовательских данных, содержащих сведения о местоположении; версию ОС; тип и разрешение экрана устройства, с которого пользователь обращается к сайту; сведения о взаимодействии пользователя с web-интерфейсом) в целях аутентификации пользователя на сайте. Если вы не хотите, чтобы ваши данные обрабатывались, пожалуйста, покиньте сайт.
			</div>
		</div>
	</body>
</html>
<?php
	if ($_SESSION['roll'] == '3') {
		echo "<script src='../scripts/system/show_producer.js'></script>";
	}
	else if ($_SESSION['roll'] == '4') {
		echo "<script src='../scripts/system/show_manager.js'></script>";
	}
	else if ($_SESSION['roll'] == '000') {
		echo "<script src='../scripts/system/error_login.js'></script>";
		session_destroy();
	}
	else if ($_SESSION['roll'] != null){
		echo '<script>alert("Данный аккаунт не поддерживается сайтом, перезагрузите страницу и попробуйте войти с другого аккаунта, или создайте новый.");</script>';
		session_destroy();
	}

	if (isset($_COOKIE["inf_cookie"]) != null){
		if ($_COOKIE["inf_cookie"] == "1") {
			echo "<script src='../scripts/system/cookie_info.js'></script>";
		}
	}
	else{
		echo "<script src='../scripts/system/cookie_info.js'></script>";
	}

	if (isset($_COOKIE["themes"]) != null){
		if ($_COOKIE["themes"] == "black") {
			echo "<script src='../scripts/system/themdark.js'></script>";
		}
		if ($_COOKIE["themes"] == "white") {
			echo "<script src='../scripts/system/themwhite.js'></script>";
		}
	}
	else{
		echo "<script src='../scripts/system/cookie_info.js'></script>";
	}

	if (isset($_COOKIE["anti-bot"]) != null){
		if ($_COOKIE["anti-bot"] == "yes") {
			echo "<script>$('#cbxlg').prop('checked', true);</script>";
		}
	}
?>