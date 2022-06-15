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
		<link href="../css/pages/jobs_page.css" rel="stylesheet">
		<link href="../css/system/colors.css" rel="stylesheet">
		<link href="../css/system/reset.css" rel="stylesheet">
		<link href="../css/system/base.css" rel="stylesheet">
		<link href="../css/system/fonts.css" rel="stylesheet">

		<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
		<script src="https://cdn.jsdelivr.net/npm/jquery.maskedinput@1.4.1/src/jquery.maskedinput.min.js"></script>
		<script src="../scripts/pages/jobs_page.js"></script>
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
				<div class="list0 lists">
					<div class="head_text"><b>Вакансии</b></div>
				</div>
				<div class="listr lists">
					<div class="zga_text" id="zga1">Фильтры</div>
					<div class="flt_text">
						<b>Платформа:</b>
						<br><br>
						&nbsp&nbsp&nbsp&nbsp&nbspМобильные устройства
						<br>
						&nbsp&nbsp&nbsp&nbsp&nbspDesktop 
						<br>
						&nbsp&nbsp&nbsp&nbsp&nbspWeb
						<br>
						&nbsp&nbsp&nbsp&nbsp&nbspУниверсальная
						<br><br>
						<b>Тип работы:</b>
						<br><br>
						&nbsp&nbsp&nbsp&nbsp&nbspРазработка
						<br>
						&nbsp&nbsp&nbsp&nbsp&nbspТестирование
						<br>
						&nbsp&nbsp&nbsp&nbsp&nbspДизайн
						<br><br>
						<b>Уровень З/п:</b>
						<br><br>
						&nbsp&nbsp&nbsp&nbsp&nbspот 100 000₽
						<br>
						&nbsp&nbsp&nbsp&nbsp&nbspот 120 000₽
						<br>
						&nbsp&nbsp&nbsp&nbsp&nbspот 140 000₽
						<br>
						&nbsp&nbsp&nbsp&nbsp&nbspот 160 000₽
						<br><br>
						<b>Позиционирование:</b>
						<br><br>
						&nbsp&nbsp&nbsp&nbsp&nbspВ офисе
						<br>
						&nbsp&nbsp&nbsp&nbsp&nbspУдалённая
						<br>
						&nbsp&nbsp&nbsp&nbsp&nbspСвободный вариант
					</div>
					<div class="ch" id="ch1">
						<input class="inp-cbx" id="rlt1" type="checkbox" style="display: none"/><label class="cbx" for="rlt1">
							<span><svg width="8px" height="6px" viewbox="0 0 12 10"><polyline points="1.5 6 4.5 9 10.5 1"></polyline></svg></span>
						</label>
					</div>
					<div class="ch" id="ch2">
						<input class="inp-cbx" id="rlt2" type="checkbox" style="display: none"/><label class="cbx" for="rlt2">
							<span><svg width="8px" height="6px" viewbox="0 0 12 10"><polyline points="1.5 6 4.5 9 10.5 1"></polyline></svg></span>
						</label>
					</div>
					<div class="ch" id="ch3">
						<input class="inp-cbx" id="rlt3" type="checkbox" style="display: none"/><label class="cbx" for="rlt3">
							<span><svg width="8px" height="6px" viewbox="0 0 12 10"><polyline points="1.5 6 4.5 9 10.5 1"></polyline></svg></span>
						</label>
					</div>
					<div class="ch" id="ch4">
						<input class="inp-cbx" id="rlt4" type="checkbox" style="display: none"/><label class="cbx" for="rlt4">
							<span><svg width="8px" height="6px" viewbox="0 0 12 10"><polyline points="1.5 6 4.5 9 10.5 1"></polyline></svg></span>
						</label>
					</div>
					<div class="ch" id="ch5">
						<input class="inp-cbx" id="rlt5" type="checkbox" style="display: none"/><label class="cbx" for="rlt5">
							<span><svg width="8px" height="6px" viewbox="0 0 12 10"><polyline points="1.5 6 4.5 9 10.5 1"></polyline></svg></span>
						</label>
					</div>
					<div class="ch" id="ch6">
						<input class="inp-cbx" id="rlt6" type="checkbox" style="display: none"/><label class="cbx" for="rlt6">
							<span><svg width="8px" height="6px" viewbox="0 0 12 10"><polyline points="1.5 6 4.5 9 10.5 1"></polyline></svg></span>
						</label>
					</div>
					<div class="ch" id="ch7">
						<input class="inp-cbx" id="rlt7" type="checkbox" style="display: none"/><label class="cbx" for="rlt7">
							<span><svg width="8px" height="6px" viewbox="0 0 12 10"><polyline points="1.5 6 4.5 9 10.5 1"></polyline></svg></span>
						</label>
					</div>
					<div class="ch" id="ch8">
						<input class="inp-cbx" id="rlt8" type="checkbox" style="display: none"/><label class="cbx" for="rlt8">
							<span><svg width="8px" height="6px" viewbox="0 0 12 10"><polyline points="1.5 6 4.5 9 10.5 1"></polyline></svg></span>
						</label>
					</div>
					<div class="ch" id="ch9">
						<input class="inp-cbx" id="rlt9" type="checkbox" style="display: none"/><label class="cbx" for="rlt9">
							<span><svg width="8px" height="6px" viewbox="0 0 12 10"><polyline points="1.5 6 4.5 9 10.5 1"></polyline></svg></span>
						</label>
					</div>
					<div class="ch" id="ch10">
						<input class="inp-cbx" id="rlt10" type="checkbox" style="display: none"/><label class="cbx" for="rlt10">
							<span><svg width="8px" height="6px" viewbox="0 0 12 10"><polyline points="1.5 6 4.5 9 10.5 1"></polyline></svg></span>
						</label>
					</div>
					<div class="ch" id="ch11">
						<input class="inp-cbx" id="rlt11" type="checkbox" style="display: none"/><label class="cbx" for="rlt11">
							<span><svg width="8px" height="6px" viewbox="0 0 12 10"><polyline points="1.5 6 4.5 9 10.5 1"></polyline></svg></span>
						</label>
					</div>
					<div class="ch" id="ch12">
						<input class="inp-cbx" id="rlt12" type="checkbox" style="display: none"/><label class="cbx" for="rlt12">
							<span><svg width="8px" height="6px" viewbox="0 0 12 10"><polyline points="1.5 6 4.5 9 10.5 1"></polyline></svg></span>
						</label>
					</div>
					<div class="ch" id="ch13">
						<input class="inp-cbx" id="rlt13" type="checkbox" style="display: none"/><label class="cbx" for="rlt13">
							<span><svg width="8px" height="6px" viewbox="0 0 12 10"><polyline points="1.5 6 4.5 9 10.5 1"></polyline></svg></span>
						</label>
					</div>
					<div class="ch" id="ch14">
						<input class="inp-cbx" id="rlt14" type="checkbox" style="display: none"/><label class="cbx" for="rlt14">
							<span><svg width="8px" height="6px" viewbox="0 0 12 10"><polyline points="1.5 6 4.5 9 10.5 1"></polyline></svg></span>
						</label>
					</div>
					<div class="zga_text" id="zga2">Заинтересовали вакансии?</div>
					<input type="button" class="btn" id="fback" value="Предложите нам свою кандидатуру" onclick="window.location.href ='../pages/contact_form.php';"></input>
				</div>
				<div class="listn lists" id="list1">
					<div class="zg_text">&nbsp&nbsp&nbspAndroid-developer</div>
					<div class="cl_text">
						Мы разрабатываем наш мобильный клиент, поэтому нам необходим разработчик под ОС Android с опытом работы Xamarin Forms от года для реализации наших идей.
						<br><br>
						<b>Задачи:</b>
						<br>
						<ol>
							<li>Разработка мобильного приложения;</li>
							<li>Консультация молодых разработчиков;</li>
							<li>Ведение проекта;</li>
							<li>Работа с api;</li>
						</ol>
						<b>Навыки:</b>
						<br>
						<ol>
							<li>Опыт работы от года;</li>
							<li>Знание системы android;</li>
							<li>Уверенная работа с Xamarin Android;</li>
							<li>Уверенная работа с платформой .Net;</li>
							<li>Английский (чтение технической документации);</li>
						</ol>
						<b>Условия:</b>
						<br>
						<ol>
							<li>Работа в комфортном офисе (Краснодар) и/или удалённо;</li>
							<li>Свободный график;</li>
							<li>Оформление по ТК РФ;</li>
						</ol>
						<b>Что мы предлагаем:</b>
						<br>
						<ol>
							<li>З/п от 120 000₽;</li>
							<li>100% оплата больничного;</li>
							<li>ДМС;</li>
							<li>Дополнительные бонусы по итогам завершения проектов;</li>
							<li>Профессиональная литература по вашему запросу;</li>
							<li>Оплата повышения квалификации;</li>
						</ol>
					</div>
					<div class="img_yap" id="job-android"></div>
					<div class="dbl_text" id="vc1">Подробнее ⇓</div>
				</div>
				<div class="listn lists" id="list2">
					<div class="zg_text">&nbsp&nbsp&nbspIos-developer</div>
					<div class="cl_text">
						Наша компания не стоит на месте, и планирует расширяться, одна из главных целей — это появление на платформе от Apple, поэтому мы ищем талантливых IOs разработчиков, готовых вступить в дружный коллектив и получить новый опыт в разработке
						<br><br>
						<b>Задачи:</b>
						<br>
						<ol>
							<li>Разработка мобильного приложения;</li>
							<li>Консультация молодых разработчиков;</li>
							<li>Ведение проекта;</li>
							<li>Работа с api;</li>
						</ol>
						<b>Навыки:</b>
						<br>
						<ol>
							<li>Опыт работы от года;</li>
							<li>Знание системы IOs;</li>
							<li>Уверенная работа с Xamarin IOs;</li>
							<li>Уверенная работа с платформой .Net;</li>
							<li>Английский (чтение технической документации);</li>
						</ol>
						<b>Условия:</b>
						<br>
						<ol>
							<li>Работа в комфортном офисе (Краснодар) и/или удалённо;</li>
							<li>Свободный график;</li>
							<li>Оформление по ТК РФ;</li>
						</ol>
						<b>Что мы предлагаем:</b>
						<br>
						<ol>
							<li>З/п от 200 000₽;</li>
							<li>100% оплата больничного;</li>
							<li>ДМС;</li>
							<li>Дополнительные бонусы по итогам завершения проектов;</li>
							<li>Профессиональная литература по вашему запросу;</li>
							<li>Оплата повышения квалификации;</li>
						</ol>
					</div>
					<div class="img_yap" id="job-ios"></div>
					<div class="dbl_text" id="vc2">Подробнее ⇓</div>
				</div>
				<div class="listn lists" id="list3">
					<div class="zg_text">&nbsp&nbsp&nbsp.Net-developer</div>
					<div class="cl_text">
						Наша система основывается на стеке технологий .Net, поэтому мы очень ждём вас для развития нашей платформы.
						<br><br>
						<b>Задачи:</b>
						<br>
						<ol>
							<li>Разработка и развитие новой ИС предприятия;</li>
							<li>Разработка api;</li>
							<li>Взаимодействие со смежными ролями;</li>
							<li>Развертывание программного обеспечения на тестовых и продуктивных средах;</li>
							<li>Поддержка (устранение ошибок) разработанного программного обеспечения;</li>
						</ol>
						<b>Навыки:</b>
						<br>
						<ol>
							<li>Опыт работы от 3-х лёт;</li>
							<li>Понимание ООП и программирования на .NET;</li>
							<li>Владение паттернами проектирования;</li>
							<li>Опыт разработки микросервисной архитектуры (желателен);</li>
							<li>Опыт проектирования БД, написания и оптимизация SQL-запросов, использования MSSQL сервер;</li>
							<li>Английский язык (чтение технической документации);</li></li>
						</ol>
						<b>Условия:</b>
						<br>
						<ol>
							<li>Работа в комфортном офисе (Краснодар) и/или удалённо;</li>
							<li>Свободный график;</li>
							<li>Оформление по ТК РФ;</li>
						</ol>
						<b>Что мы предлагаем:</b>
						<br>
						<ol>
							<li>З/п от 150 000₽;</li>
							<li>100% оплата больничного;</li>
							<li>ДМС;</li>
							<li>Дополнительные бонусы по итогам завершения проектов;</li>
							<li>Профессиональная литература по вашему запросу;</li>
							<li>Оплата повышения квалификации;</li>
						</ol>
					</div>
					<div class="img_yap" id="job-net"></div>
					<div class="dbl_text" id="vc3">Подробнее ⇓</div>
				</div>
				<div class="listn lists" id="list4">
					<div class="zg_text">&nbsp&nbsp&nbspFront-end-developer</div>
					<div class="cl_text">
						Дизайн важен в любом проекте, поэтому мы предлагаем вам работу в нашем дружном и молодом коллективе.
						<br><br>
						<b>Задачи:</b>
						<br>
						<ol>
							<li>Разработка сайта;</li>
							<li>Адаптация компонентов под различные браузеры и платформы;</li>
							<li>Взаимодействие с программистами, дизайнерами;</li>
						</ol>
						<b>Навыки:</b>
						<br>
						<ol>
							<li>Навыки HTML5, CSS3 и JS;</li>
							<li>Навыки кросс-браузерной и адаптивной вёрстки;</li>
							<li>Опыт веб-разработки под мобильные браузеры;</li>
							<li>Английский язык (чтение технической документации);</li>
						</ol>
						<b>Условия:</b>
						<br>
						<ol>
							<li>Работа удалённо;</li>
							<li>Свободный график;</li>
							<li>Оформление по ТК РФ;</li>
						</ol>
						<b>Что мы предлагаем:</b>
						<br>
						<ol>
							<li>З/п от 80 000₽;</li>
							<li>100% оплата больничного;</li>
							<li>ДМС;</li>
							<li>Дополнительные бонусы по итогам завершения проектов;</li>
							<li>Профессиональная литература по вашему запросу;</li>
							<li>Оплата повышения квалификации;</li>
						</ol>
					</div>
					<div class="img_yap" id="job-front"></div>
					<div class="dbl_text" id="vc4">Подробнее ⇓</div>
				</div>
				<div class="listn lists" id="list5">
					<div class="zg_text">&nbsp&nbsp&nbspBack-end-developer</div>
					<div class="cl_text">
						Мы постоянно работаем над улучшением наших проектов, в том числе и нашего сайта, поэтому нам необходимы новые разработчики.
						<br><br>
						<b>Задачи:</b>
						<br>
						<ol>
							<li>Поддержка и развитие существующих решений - бэкенд, базы данных;</li>
							<li>Участие в создании и развитии серверной части наших приложений (сайт, личные кабинеты клиентов и партнеров, внутренние веб-приложения), мобильные приложения (iOS, Android);</li>
						</ol>
						<b>Навыки:</b>
						<br>
						<ol>
							<li>Иметь реальный опыт разработки на PHP 7.2 и выше от 2-х лет;</li>
							<li>Уверенное знание принципов ООП и основных шаблонов проектирования;</li>
							<li>Умение оценивать сроки и тщательно планировать свою работу;</li>
							<li>Опыт работы с БД, уверенное знание SQL (оптимизация, транзакции, сложные запросы);</li>
							<li>Английский язык (чтение технической документации);</li>
						</ol>
						<b>Условия:</b>
						<br>
						<ol>
							<li>Работа удалённо;</li>
							<li>Свободный график;</li>
							<li>Оформление по ТК РФ;</li>
						</ol>
						<b>Что мы предлагаем:</b>
						<br>
						<ol>
							<li>З/п от 160 000₽;</li>
							<li>100% оплата больничного;</li>
							<li>ДМС;</li>
							<li>Дополнительные бонусы по итогам завершения проектов;</li>
							<li>Профессиональная литература по вашему запросу;</li>
							<li>Оплата повышения квалификации;</li>
						</ol>
					</div>
					<div class="img_yap" id="job-back"></div>
					<div class="dbl_text" id="vc5">Подробнее ⇓</div>
				</div>
				<div class="listn lists" id="list6">
					<div class="zg_text">&nbsp&nbsp&nbspQA-инженер</div>
					<div class="cl_text">
						Кто нам нужен? Наш идеальный тестировщик умеет не только проводить стандартные тесты, но и умеет импровизировать на ходу, так же он должен иметь полное понимает технической и предметной областей и способность проводить консультации по улучшению нашего ПО.
						<br><br>
						<b>Задачи:</b>
						<br>
						<ol>
							<li>Взаимодействие с разработчиками, функциональное тестирование по ходу спринта;</li>
							<li>Разработка и актуализация тест-кейсов;</li>
							<li>Тестирование api (Postman), поддержка библиотеки примеров запросов;</li>
							<li>Разработка нагрузочных тестов;</li>
							<li>Ручное тестирование;</li>
						</ol>
						<b>Навыки:</b>
						<br>
						<ol>
							<li>Опыт работы — обязательно;</li>
							<li>Обучаемость. Мы довольно решительно обновляем технологический стек, ищем новые подходы и решения, поэтому всем надо быть «в курсе», а для этого придется учиться и в начале, и по ходу работы;</li>
							<li>Желание делать качественный продукт. Это не просто слова, мы не делаем «проект под клиента», где часто важнее скорость и бюджет, мы делаем систему «как для себя» и не переживем небрежного и поверхностного отношения;</li>
							<li>Английский язык — B1 и выше;</li>
						</ol>
						<b>Условия:</b>
						<br>
						<ol>
							<li>Работа в комфортном офисе (Краснодар);</li>
							<li>Свободный график;</li>
							<li>Оформление по ТК РФ;</li>
						</ol>
						<b>Что мы предлагаем:</b>
						<br>
						<ol>
							<li>З/п от 110 000₽;</li>
							<li>100% оплата больничного;</li>
							<li>ДМС;</li>
							<li>Дополнительные бонусы по итогам завершения проектов;</li>
							<li>Профессиональная литература по вашему запросу;</li>
							<li>Оплата повышения квалификации;</li>
						</ol>
					</div>
					<div class="img_yap" id="job-qa"></div>
					<div class="dbl_text" id="vc6">Подробнее ⇓</div>
				</div>
				<div class="listn lists" id="list7">
					<div class="zg_text">&nbsp&nbsp&nbspUX/UI Designer</div>
					<div class="cl_text">
						Имеете опыт работы с пользовательскими интерфейсами? Тогда вам к нам. Вы получите не заменимый опыт по разработке интерфейсов под разнообразные платформы, а также вас ждёт взаимодействие с клиентами и профессионалами данной области.
						<br><br>
						<b>Задачи:</b>
						<br>
						<ol>
							<li>Создание сложные интерфейсы для приложений на разных платформах;</li>
						</ol>
						<b>Навыки:</b>
						<br>
						<ol>
							<li>Понимание принципов проектирования удобных пользовательских интерфейсов и умение воплощать свои задумки;</li>
							<li>Знание Adobe Photoshop и сопутствующих инструментариев, которые могут понадобится для полноценной верстки;</li>
							<li>Частичное знание С# будет очень кстати при работе с кнопками;</li>
							<li>Способность написать простой и понятный текст для интерфейса;</li>
							<li>Английский язык — B1 и выше;</li>
						</ol>
						<b>Условия:</b>
						<br>
						<ol>
							<li>Работа в комфортном офисе (Краснодар);</li>
							<li>Свободный график;</li>
							<li>Оформление по ТК РФ;</li>
						</ol>
						<b>Что мы предлагаем:</b>
						<br>
						<ol>
							<li>З/п от 125 000₽;</li>
							<li>100% оплата больничного;</li>
							<li>ДМС;</li>
							<li>Дополнительные бонусы по итогам завершения проектов;</li>
							<li>Профессиональная литература по вашему запросу;</li>
							<li>Оплата повышения квалификации;</li>
						</ol>
					</div>
					<div class="img_yap" id="job-uxui"></div>
					<div class="dbl_text" id="vc7">Подробнее ⇓</div>
				</div>
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
					<div class="stext footer_text" id="ff-autorise">Зарегистрироваться</div>
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