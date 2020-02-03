// Numbers From 1 to N
// 01.Numbers-From-1-to-N.js

const input = ['5'];
const print = this.print || console.log;
const gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

const n = +gets();
let row = '';
for (let i = 1; i <= n; i++) {
  row += `${i} `;
}
print(row);
