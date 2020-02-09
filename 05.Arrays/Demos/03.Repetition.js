// Loops/Demos
// 03.Repetition.js

let numbers = [1, 2, 3, 4, 5];
let reversed = [];

for (let i = numbers.length; i > 0; i--) {
  reversed.push(i); // [5, 4, 3, 2, 1]
 // reversed.push(numbers[i]); // [5, 4, 3, 2, 1] пак е добре
}
console.log(reversed);