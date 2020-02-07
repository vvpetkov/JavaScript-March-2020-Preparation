// Problem 1. Numbers from 1 to N
// 01.NumbersFrom1toN.js


const input = ['5'];
const print = this.print || console.log;
const gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

const n = +gets();
let line = '';

for (let i = 1; i <= n; i++) {
  line += `${i} `;
}
print(line);
