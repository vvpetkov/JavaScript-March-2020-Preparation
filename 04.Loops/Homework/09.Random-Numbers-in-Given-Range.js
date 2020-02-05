// Prep/Loops/Homeworks
// 09.Random-Numbers-in-Given-Range.js

const input = ['10', '10', '15'];
const print = this.print || console.log;
const gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);
//  (min != max)
const n = +gets();
const min = +gets();
const max = +gets();
let range = max - min;
let random = 0;

for (let i = min; i <= max; i++) {
  print(Math.floor(Math.random() * (range)) + min);
}