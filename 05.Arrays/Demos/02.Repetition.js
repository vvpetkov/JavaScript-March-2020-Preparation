// Loops/Demos
// 02.Repetition.js

let numbers = [1, 2, 3, 4, 5];
let reversed = [];

for (let i = 0; i < numbers.length; i++) {

  // reversed[i] = numbers[numbers.length - i - 1]; // [5, 4, 3, 2, 1]
  // 5-0-1 = 4

  reversed[i] = numbers[numbers.length - i]; // [undefined, 5, 4, 3, 2] Защо ?
  // 5-0 = 5 (петият index не съществува, значи е ъндефайн)

}

console.log(reversed);