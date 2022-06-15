showautorizvis();
$('#lg_lg').css('color', 'red');
$('#lg_lg').html('Логин - проверьте правильность данных');
$('#login_login').val(sessionStorage.getItem('lg'));
$('#lg_psw').css('color', 'red');
$('#lg_psw').html('Пароль - проверьте правильность данных');
//Скрытие капчи
$('#captcha-text').hide();
$('#captcha-switch').hide();
//Забыли пароль?
$('#fg-password').css('display', 'block');