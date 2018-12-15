var userName = prompt('Как вас зовут ?', '');
if (userName.length > 0){
	alert('Здравствуйте ' + userName)
} else {
	alert('Вы не указали имя')
}
//ввод пробелов не обрабатывается
