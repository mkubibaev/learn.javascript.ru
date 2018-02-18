//task-1
//alert не выведется

//task-2
/*
var answer1 = prompt('Каково «официальное» название JavaScript?', '');
if (answer1 == 'ECMAScript'){
	alert('Верно');
} else {
	alert('Не знаете? «ECMAScript»!');
}
*/

//task-3
/*
var num = prompt('Введите любое число', '');
if (num > 0){
	alert('1');
} else if (num < 0) {
	alert('-1');
} else {
	alert('0');
}
*/

//task-4
/*
var login, password;
login = prompt('Кто пришел ?', '');
if (login == 'Админ'){
	password = prompt('Введите пароль','');
	if (password == 'Черный Властелин'){
		alert('Добро пожаловать!');
	} else if (password == null){
		alert('Вход отменён');
	} else {
		alert('Пароль неверен');	
	}
} else if (login == null){
	alert('Вход отменён');
} else {
	alert('Я вас не знаю');
}
*/

//task-5
// result = (a + b < 4) ? 'Мало' : 'Много';

//task-6
/*
var message;
(login == 'Вася') ? message = 'Привет' :
(login == 'Директор') ? message = 'Здравствуйте' :
(login == '') ? message = 'Нет логина' :
message = '';

var message = (login == 'Вася') ? 'Привет' :
  (login == 'Директор') ? 'Здравствуйте' :
  (login == '') ? 'Нет логина' :
  '';
*/

