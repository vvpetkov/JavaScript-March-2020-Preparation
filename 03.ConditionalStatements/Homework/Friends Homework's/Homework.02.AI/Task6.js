// Problem 6. The Biggest of Five Numbers
// Write a program that reads 5 numbers, calculates and prints the biggest of them.

const input = ['5', '2', '2', '4', '1'];
const print = this.print || console.log;
const gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);
const a = +gets();
const b = +gets();
const c = +gets();
const d = +gets();
const e = +gets();
if (a >= Math.max(b, c, d, e)) {
  print(a);
} else if (b >= Math.max(a, c, d, e)) {
  print(b);
} else if (c >= Math.max(a, b, d, e)) {
  print(c);
} else if (d >= Math.max(a, b, c, e)) {
  print(d);
} else print(e);
// of course we can always use the following:
// const maxNum = Math.max(a, b, c, d, e);
// print(maxNum);
