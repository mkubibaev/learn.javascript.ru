//task-1

/*Будет ли эта функция работать как-то иначе, если убрать else?

function checkAge(age) {
  if (age > 18) {
    return true;
  } else {
    // ...
    return confirm('Родители разрешили?');
  }
}

function checkAge(age) {
  if (age > 18) {
    return true;
  }
  // ...
  return confirm('Родители разрешили?');
}*/

// эти функции работают одинаково с/без else


//task-2

/*Перепишите функцию, чтобы она делала то же самое, но без if, в одну строку. Сделайте два варианта функции checkAge:

1. Используя оператор '?'
2. Используя оператор ||

function checkAge(age) {
  if (age > 18) {
    return true;
  } else {
    return confirm('Родители разрешили?');
  }
}*/

function checkAge(age) {
	return (age > 18) ? true : confirm('Родители разрешили?')
}

function checkAge(age) {
    return (age > 18) || confirm('Родители разрешили?');
}


//task-3

//Напишите функцию min(a,b), которая возвращает меньшее из чисел a,b

function min(a,b) {
	if (a > b){
		return a;
	} else if (b > a){
		return b
	} else {
		return 'Равные числа';
	}
}
console.log(min(6,6));


//task-4

//Напишите функцию pow(x,n), которая возвращает x в степени n. Иначе говоря, умножает x на себя n раз и возвращает результат

var x = +prompt('Введите х', 0);
var n = +prompt('Введите n', 0);

function pow(x,n) {
	if (x > 0 && n > 0) {
		return Math.pow(x,n);
	} else {
		return false;
	}	
}

function showPowMessage() {
	if (pow(x,n)) {
		alert('x в степени n: ' + pow(x,n));
	} else {
		alert('Введите целые, положительные числа');

	}
}

showPowMessage();