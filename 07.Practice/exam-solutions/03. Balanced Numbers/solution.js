const input = ['275', '693', '110', '742', '123'];
const gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);
const print = this.print || console.log;

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
