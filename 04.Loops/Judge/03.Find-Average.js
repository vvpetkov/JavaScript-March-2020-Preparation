// 03.Find-Average.js

const input = ['4', '1', '1', '1', '1'];
const print = this.print || console.log;
const gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

const n = +gets();
let sum = 0;
let avg = 0;
for (let i = 1; i <= n; i++) {
  sum += +gets();
  avg = sum / n;
}
print(avg.toFixed(2));
