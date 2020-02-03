// 04.Min-Max-Sum-Average.js

const input = ['3', '2', '5', '1'];
const print = this.print || console.log;
const gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

const n = +gets();

let min = Number.MAX_SAFE_INTEGER;
let max = Number.MIN_SAFE_INTEGER;
let sum = 0;
let avg = 0;

for (let i = 1; i <= n; i++) {
  const currentNum = +gets();
  min = Math.min(min, currentNum);
  max = Math.max(max, currentNum);
  sum += currentNum;
  avg = sum / n;
}
print(`min=${min.toFixed(2)}`);
print(`max=${max.toFixed(2)}`);
print(`sum=${sum.toFixed(2)}`);
print(`avg=${avg.toFixed(2)}`);
