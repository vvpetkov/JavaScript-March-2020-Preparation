// Prep/Loops/Homeworks
// Problem 5. Calculate 1 + 1!/X + 2!/X^2 + … + N!/X^N
// 05.Problem.js

const input = ['5', '-4'];
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