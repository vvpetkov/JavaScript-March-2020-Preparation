// Loops/Demos
// 04.Repetition.js
/*
array[0] = 'one'
04.print-array.js:9
array[1] = 'two'
04.print-array.js:9
array[2] = 'three'
04.print-array.js:9
array[3] = 'four'
*/

let array = [
  'one',
  'two',
  'three',
  'four'
];

// my demo:
// let currentEl = '';

// for (let i = 0; i < array.length; i++) {
//   let index = 0;
//   index += i;
//   currentEl = array[i];
//   console.log(`array[${index}] = ${currentEl}`);
// }
// решението на демото е по-елегантно

// demo:
for (let i = 0; i < array.length; i++) {
  console.log(`arrey[${i}] = '${array[i]}' `);
}