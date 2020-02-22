// Arrays (Judge) Numbers From 1 to N (Vld)
// Numbers-From-1-to-N.js

const input = ['5'];
const print = this.print || console.log;
const gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

const n = +gets();
currentNumStr = '';


for (let i = 1; i <= n; i++) {
  currentNumStr = currentNumStr + `${[i]} `;
}

print(currentNumStr);