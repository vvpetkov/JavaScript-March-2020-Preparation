// // Prep/Loops/Homeworks
// 10.Randomize-the-Numbers-1…N.js

const input = ['3'];
const print = this.print || console.log;
const gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

const n = +gets();
let currentNum = 0;

for (let i = 0; i <= n; i++) {
  currentNum += i;
}
print(currentNum);
