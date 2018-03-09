//task-1

//Какое последнее значение выведет этот код? Почему?
// var i = 3;
// while (i) {
//   alert(i--);
// }
//3, 2, 1

//task-2

//Для каждого цикла запишите, какие значения он выведет. Потом сравните с ответом.
//1-Префиксный вариант
// var i = 0;
// while (++i < 5) alert(i);
//От 1 до 4. Первое значение: i=1, так как операция ++i сначала увеличит i, а потом уже произойдёт сравнение и выполнение alert.

//2-Постфиксный вариант
// var i = 0;
// while (i++ < 5) alert(i);
/*От 1 до 5. Первое значение: i=1. Оператор i++ увеличивает i, возвращая старое значение, так что в сравнении i++ < 5 будет участвовать старое i=0.
Но последующий вызов alert уже не относится к этому выражению, так что получит новый i=1.
Окончание цикла: при i=4 произойдет сравнение while(4 < 5) – верно, после этого сработает i++, увеличив i до 5, так что значение 5 будет выведено. Оно станет последним*/

//task-3

//Для каждого цикла запишите, какие значения он выведет. Потом сравните с ответом.
//1-Постфиксная форма:
// for (var i = 0; i < 5; i++) alert(i);
//0,1,2,3,4
//у for i++ или ++i происходит после выполнения тела цикла

//2-Префиксная форма:
// for (var i = 0; i < 5; ++i) alert(i);	
//0,1,2,3,4	

//task-4

//При помощи цикла for выведите чётные числа от 2 до 10.
// for (var i = 0; i <= 10; i++) {
// 	if (i%2 != 0 || i == 0) {
// 		continue;
// 	}
// 	alert(i);
// }

//task-5

//Перепишите код, заменив цикл for на while, без изменения поведения цикла
// for (var i = 0; i < 3; i++) {
//   alert( "номер " + i + "!" );
// }

// var i = 0;
// while (++i < 3) {
// 	alert( "номер " + i + "!" );
// }

//task-6
/*Напишите цикл, который предлагает prompt ввести число, большее 100. Если посетитель ввёл другое число – попросить ввести ещё раз, и так далее.
Цикл должен спрашивать число пока либо посетитель не введёт число, большее 100, либо не нажмёт кнопку Cancel (ESC).
Предполагается, что посетитель вводит только числа. Предусматривать обработку нечисловых строк в этой задаче необязательно.*/

// var i;
// do {
// 	i = prompt('Введите число больше 100', 0);
// } while (i <= 100 && i != null);
//Цикл do..while повторяется, пока верны две проверки

//task-7
/*Создайте код, который выводит все простые числа из интервала от 2 до 10. Результат должен быть: 2,3,5,7.
P.S. Код также должен легко модифицироваться для любых других интервалов.*/
start:
for (var i = 2; i <= 10; i++) {

	for (var j = 2; j < i; j++) {
		if(i % j == 0) {
			continue start;
		} 
	}
	console.log(i);	
}