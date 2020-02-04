// Problem 5. Calculate 1 + 1!/X + 2!/X^2 + … + N!/X^N
// Write a program that, for a given two integer numbers n and x, calculates the sum S = 1 + 1!/x + 2!/x2 + … + n!/x^n.
// * Use only one loop. Print the result with 5 digits after the decimal point.
const input = ['5', '-4'];
const gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);
const print = this.print || console.log;
const n = +gets();
const x = +gets();
let factorial = 1;
let complexSum = 1;

for (let i = 1; i <= n; i++) {
  factorial *= i;
  complexSum += factorial / Math.pow(x, i);
}
print(complexSum.toFixed(5));
