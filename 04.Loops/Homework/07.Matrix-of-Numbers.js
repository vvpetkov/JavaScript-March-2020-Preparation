// Prep/Loops/Homeworks
// 07.Matrix-of-Numbers.js
// Use two nested loops.
// 1 ≤ n ≤ 20

const input = ['5'];
const print = this.print || console.log;
const gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

const n = +gets();

for (let row = 1; row <= n; row++) {
  let line = '';
  for (let col = row; col < row + n; col++) {
    line += `${col}`;
  }
  print(line);
}
