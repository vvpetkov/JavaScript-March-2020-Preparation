// Problem 5. The Biggest of 3 Numbers
// Write a program that finds the biggest of three numbers.

const input = ['5', '6', '3'];
const print = this.print || console.log;
const gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);
const a = +gets();
const b = +gets();
const c = +gets();
if (a >= b && a >= c) {
  print(a);
} else if (b >= a && b >= c) {
  print(b);
} else print(c);
