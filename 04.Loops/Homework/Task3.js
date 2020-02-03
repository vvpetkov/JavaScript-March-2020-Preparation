// Problem 3. Min, Max, Sum and Average of N Numbers
// Write a program that reads a sequence of n numbers and returns the minimal, the maximal number, the sum and the average of all numbers (displayed with 2 digits after the decimal point).
// * The input starts by the number n (alone in a line) followed by n lines, each holding an number.
// * The output is like in the examples below.
const input = ['3', '2', '5', '1'];
const print = this.print || console.log;
const gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);
const n = +gets();
let min = Number.MAX_SAFE_INTEGER;
let max = Number.MIN_SAFE_INTEGER;
let sum = 0;
for (let i = 1; i <= n; i++) {
  const currentNum = +gets();
  min = Math.min(min, currentNum);
  max = Math.max(max, currentNum);
  sum += currentNum;
}
print(`min=${min.toFixed(2)}`);
print(`max=${max.toFixed(2)}`);
print(`sum=${sum.toFixed(2)}`);
const average = (sum / n);
print(`avg=${average.toFixed(2)}`);
