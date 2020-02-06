// Prep/Loops/Judge/
// Repetition 1:15 video 
// 11.Find-Maximum-Value.js

const input = ['4', '5', '7', '3', '6'];
const print = this.print || console.log;
const gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

const n = +gets();
let maxValue = -200;

for (let i = 0; i < n; i++) {
  let currentNum = +gets();
  maxValue = Math.max(maxValue, currentNum);
}

print(maxValue);
