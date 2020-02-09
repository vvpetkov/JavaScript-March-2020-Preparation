// Loops/Demos
// 06.Repetition.js

// Sum = 11
// Product = -336

let numbers = [1, 2, - 4, 3, 7, 2];

let sum = 0;
let product = 1;

for (let i = 0; i < numbers.length; i++) {
  sum += numbers[i];
  product *= numbers[i];
}
console.log(`Sum = ${sum}`);
console.log(`Product = ${product}`);
