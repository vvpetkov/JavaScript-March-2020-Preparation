// Problem 2. Numbers Not Divisible by 3 and 7
// 02.NumbersNotDivisibleBy3and7.js

const input = ['10'];
const print = this.print || console.log;
const gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

const n = +gets();
let line = '';

for (let i = 0; i <= n; i++) {
  if (i % 3 === 0 || i % 7 === 0) {
    continue;
  }
  line += `${i} `;
}
print(line);
