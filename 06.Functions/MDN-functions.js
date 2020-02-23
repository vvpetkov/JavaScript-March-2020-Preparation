// https://developer.mozilla.org/bg/docs/Web/JavaScript/Guide/%D0%A4%D1%83%D0%BD%D0%BA%D1%86%D0%B8%D0%B8
// Функции
// MDN-functions.js

/* 
Дефиниция на функция (още наричана декларация на функция)

functions square(number) {
  return number * number;
}


Функцията square приема един параметър на име number. 
Тя се състои от един израз, 
който казва на функцията да върне параметъра на функцията 
(който е number) умножен по себе си. 

Изразът return уточнява стойността, която функцията ще връща.

*/

const numbers = [0, 1, 2, 5, 10];
let cube = numbers.map(function (x) {
  return x * x * x;
});

console.log(cube);
