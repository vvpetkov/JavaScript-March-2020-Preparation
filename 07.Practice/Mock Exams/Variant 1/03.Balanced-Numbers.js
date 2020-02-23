// Mock Exam (Variant 1) - Balanced Numbers
// 03.Balanced-Numbers.js

const input = ['275', '693', '110', '742'];
const print = this.print || console.log;
const gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

// The solution starts from here

let sum = 0;
let num = gets();
let firstDigit = +num[0];
let lastDigit = +num[2];
let middleDigit = +num[1];
let isBalanced = (firstDigit + lastDigit) === middleDigit;

while (isBalanced) {
  sum += +num;
  num = gets();
  firstDigit = +num[0];
  lastDigit = +num[2];
  middleDigit = +num[1];
  isBalanced = (firstDigit + lastDigit) === middleDigit;
}

print(sum);
