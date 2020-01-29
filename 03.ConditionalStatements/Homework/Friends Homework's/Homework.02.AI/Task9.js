// Problem 9. Play with Number and String
// Write a program that initializes a variable with a string or a number value, then:
// * If the variable is of type Number, the program increases it by one.
// * If the variable is of type String, the program appends * at the end.
// * Print the result at the console. Use switch statement.

const input = ['hello'];
const print = this.print || console.log;
const gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);
const stringOrNumber = gets();
if (Number(stringOrNumber)) {
  print(Number(stringOrNumber) + 1);
} else print(stringOrNumber + '*');
