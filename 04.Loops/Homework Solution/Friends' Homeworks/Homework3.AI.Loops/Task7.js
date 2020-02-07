// Problem 7. Matrix of Numbers
// Write a program that reads a positive integer number n (1 ≤ n ≤ 20) and prints a matrix like in the examples below. * Use two nested loops.
const input = ['4'];
const print = this.print || console.log;
const gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);
const n = +gets();
for (let i = 1; i <= n; i++) {
  let line = '';
  for (let j = i; j < i + n; j++) {
    line += `${j} `;
  }
  print(line);
}
