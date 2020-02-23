// Функция reduce
// function-reduce.js

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const sum = numbers.reduce((accumulator, el) => accumulator + el, 0);
console.log(sum);
// 55
