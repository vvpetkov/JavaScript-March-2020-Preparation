// Alpha Numbers
// Alpha Numbers.js
// 


const input = ['135', '357', '791', '357', '913', '579', '135'];
const print = this.print || console.log;
const gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);
const arr = [];
for (let i = 0; i < 7; i++) {
  arr.push(gets());
  const hundreds = Number(arr[i][0]);
  const tenths = Number(arr[i][1]);
  const units = Number(arr[i][2]);
  if ((Math.max(Math.abs(hundreds - tenths), Math.abs(hundreds - units), Math.abs(tenths - units))) <= ((hundreds + tenths + units) % 10)) {
    continue;
  } else print(arr[i]);
}
