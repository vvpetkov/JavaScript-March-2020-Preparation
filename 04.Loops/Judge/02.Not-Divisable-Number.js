// Not Divisable Number
// 02.Not-Divisable-Number.js

const input = ['10'];
const print = this.print || console.log;
const gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

const n = +gets();
let row = '';
for (let i = 1; i <= n; i++) {
  if (i % 3 === 0 || i % 7 === 0) {
    continue;
  }
  row += `${i} `;
}
print(row);
