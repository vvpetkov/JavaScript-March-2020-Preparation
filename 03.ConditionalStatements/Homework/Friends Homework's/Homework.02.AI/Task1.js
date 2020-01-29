// Problem 1. Exchange If Greater
// Write an if-statement that takes two number variables a and b and exchanges their values if the first one is greater than the second one.
// As a result print the values a and b, separated by a space.

const input = ['5.5', '4.5'];
const print = this.print || console.log;
const gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);
let a = +gets();
let b = +gets();
if (a > b) {
  const oldA = a; // save the old value of a to a new variable, which will be then assigned to b
  a = b; // assign the value of b to a
  b = oldA; // assign the old value of a to b
  print(a + ' ' + b);
} else {
  print(a + ' ' + b);
}
