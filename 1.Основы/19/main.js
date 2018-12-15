//task-1

/*Напишите функцию sumTo(n), которая для данного n вычисляет сумму чисел от 1 до n
Сделайте три варианта решения:
1. С использованием цикла.
2. Через рекурсию, т.к. sumTo(n) = n + sumTo(n-1) для n > 1.
3. С использованием формулы для суммы арифметической прогрессии*/

function sumTo(n) {
	var result = 0;
	for (var i = n; i >= 1; i--) {
		result += i;
	}
	return result;
}

function sumTo(n) {
	if (n > 1){
		return n + sumTo(n - 1) 	
	} else {
		return n;
	} 
}	

function sumTo(n) {
	return n * (n + 1) / 2;
}

alert(sumTo(100));


//task-2

// написать функцию factorial(n), которая возвращает факториал числа n!, используя рекурсивный вызов

function factorial(n) {
	if (n > 1){
		return n * factorial(n - 1);
	} else {
		return n;
	}
}

alert(factorial(5));


//task-3

/*Напишите функцию fib(n), которая возвращает n-е число Фибоначчи. Пример работы:
function fib(n) { ... }
alert( fib(3) ); // 2
alert( fib(7) ); // 13
alert( fib(77)); // 5527939700884757*/
// не смог решить