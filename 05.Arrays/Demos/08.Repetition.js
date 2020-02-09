// Loops/Demos
// 08.Repetition.js

let greeting1 = 'hello';
let array1 = greeting1.split(''); // сепаратор '' НИЩО! и ако има символ и Нищо го разделя на елементи в арей 
console.log(array1); // Array(5) ["h", "e", "l", "l", "o"]

let greeting2 = 'h,e,l,l,o';
let array2 = greeting2.split(',');

console.log(array2); // Array(5) ["h", "e", "l", "l", "o"]
