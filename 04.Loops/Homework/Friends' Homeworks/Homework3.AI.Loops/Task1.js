// Problem 1. Numbers from 1 to N
// Write a program that reads a positive integer n and prints all the numbers from 1 to n, on a single line, separated by a space.
const input = ['5'];
const print = this.print || console.log;
const gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);
const n = +gets();
let show = '';
for (let i = 1; i <= n; i++) {
  show = show + i + ' ';
}
print(show);
