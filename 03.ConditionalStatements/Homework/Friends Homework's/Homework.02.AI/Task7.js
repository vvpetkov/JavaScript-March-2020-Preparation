// Problem 7. Sort 3 Numbers with Nested Ifs
// Write a program that reads 3 numbers and prints them sorted in descending order. * Use nested if statements.
// Note: Don’t use arrays and the built-in sorting functionality.

const input = ['300', '300', '300'];
const print = this.print || console.log;
const gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);
const a = +gets();
const b = +gets();
const c = +gets();
if (a >= b && a >= c && b >= c) {
  print(`${a} ${b} ${c}`);
} else if (a >= b && a >= c && c >= b) {
  print(`${a} ${c} ${b}`);
} else if (b >= a && b >= c && a >= c) {
  print(`${b} ${a} ${c}`);
} else if (b >= a && b >= c && c >= a) {
  print(`${b} ${c} ${a}`);
} else if (c >= a && c >= b && a >= b) {
  print(`${c} ${a} ${b}`);
} else print(`${c} ${b} ${a}`);
