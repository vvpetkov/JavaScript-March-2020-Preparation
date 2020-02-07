// Problem 3. Min, Max, Sum and Average of N Numbers
// 03.MinMaxSumAndAverageOfNnumbers.js
// for min and max :credits to AI

const input = ['3', '2', '5', '1'];
const print = this.print || console.log;
const gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

const n = +gets();
let min = Number.MAX_SAFE_INTEGER;
let max = Number.MIN_SAFE_INTEGER;
let sum = n;
let avg = 0;


for (let i = 0; i < n; i++) {
  const currentNum = +gets();
  min = Math.min(min, currentNum);
  max = Math.max(max, currentNum);
  sum += currentNum;
}
avg = sum / (n + 1);

print(`min = ${min} // credit to AI`);
print(`max = ${max} // credit to AI`);
print(`sum = ${sum}`);
print(`avg = ${avg.toFixed(2)}`);
