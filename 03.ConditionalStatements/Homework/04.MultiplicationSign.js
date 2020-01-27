// 04.MultiplicationSign.js

// first solution: brute-force
// Relying on achieved through the application of effort, usually large amounts instead of more efficient, carefully planned, or precisely directed methods
// start first solution:

// const input = ['1', '-1', '-1'];

// const print = this.print || console.log;
// const gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

// const a = +gets();
// const b = +gets();
// const c = +gets();
// let result = null;

// if (a > 0 && b > 0 && c > 0) {
//   result = '+';
// } else if (a > 0 && b < 0 && c < 0) {
//   result = '+';
// } else if (a > 0 && b > 0 && c < 0) {
//   result = '-';
// } else if (a < 0 && b < 0 && c > 0) {
//   result = '-';
// } else if (a < 0 && b > 0 && c < 0) {
//   result = '-';
// } else if (a === 0 || b === 0 || c === 0) {
//   result = '0';
// } else if (a < 0 || b < 0 || c < 0) {
//   result = '-';
// } else {
//   result = '!';
// }
// print(result);
// end first solution:

// second solution : more efficient
// remove all (-) results end put them in (else) result

const input = ['-1', '1', '-1'];

const print = this.print || console.log;
const gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

const a = +gets();
const b = +gets();
const c = +gets();
let result = null;

if (a > 0 && b > 0 && c > 0) {
  result = '+';
} else if (a > 0 && b < 0 && c < 0) {
  result = '+';
} else if (a === 0 || b === 0 || c === 0) {
  result = '0';
} else {
  result = '-';
}
print(result);
