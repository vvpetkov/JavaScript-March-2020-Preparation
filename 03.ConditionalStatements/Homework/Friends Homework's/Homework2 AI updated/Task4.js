// Problem 4. Multiplication Sign
// Write a program that shows the sign (+, - or 0) of the product of three numbers, without calculating it.
// * Use a sequence of if operators.
const input = ['-1', '-0.5', '-5.1'];
const print = this.print || console.log;
const gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);
const a = +gets();
const b = +gets();
const c = +gets();
if (a === 0 || b === 0 || c === 0) {
  const zeroResult = '0';
  print(zeroResult);
} else if ((a > 0 && b > 0 && c > 0) || (a > 0 && b < 0 && c < 0) || (a < 0 && b < 0 && c > 0) || (a < 0 && b > 0 && c < 0)) {
  const positiveResult = '+';
  print(positiveResult);
} else {
  const negativeResult = '-';
  print(negativeResult);
}
