// Prep/Loops/Judge/Repetition
// 08.Calculate-Complex-Sum.js

const input = ['3', '2'];
const print = this.print || console.log;
const gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

const n = +gets();
const x = +gets();

let factorial = 1;
let sum = 1;

for (let i = 1; i <= n; i++) {
  factorial *= i;
  sum += factorial / Math.pow(x, i);
}
print(sum.toFixed(5));
