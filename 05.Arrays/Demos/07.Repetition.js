// Loops/Demos
// 07.Repetition.js

// Before element movement.
// Array(7) [1, 2, 3, 4, 5, 6, 7]
// Array(0) []
// After element movement.
// Array(4) [1, 2, 3, 4]
// Array(3) [7, 6, 5]

let array1 = [1, 2, 3, 4, 5, 6, 7];
let array2 = [];

let moveCount = 3;

console.log('Before element movement.');
console.log(array1);
console.log(array2);

for (let i = 0; i < moveCount; i++) {
  let store1 = array1.pop();
  array2.push(store1);
}

console.log('After element movement.');
console.log(array1);
console.log(array2);
