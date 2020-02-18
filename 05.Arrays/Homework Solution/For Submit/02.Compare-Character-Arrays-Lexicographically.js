// Prep/Arrays/Homework Solution
// Problem 2. Compare Character Arrays Lexicographically
// 02.Compare-Character-Arrays-Lexicographically.js
// Credits to LM


const input = ['own', 'owned'];
const print = this.print || console.log;
const gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

const str1 = gets();
const str2 = gets();
let isEqual = 0;

isEqual = str1.localeCompare(str2);

if (isEqual > 0) {
  print('Second');
} else if (isEqual < 0) {
  print('First');
} else {
  print('Equal');
}


// print('a'.localeCompare('a')); // 0
// print('a'.localeCompare('c')); // -1
// print('b'.localeCompare('a')); // 1

