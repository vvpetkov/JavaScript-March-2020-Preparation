// Problem 9. Random Numbers in Given Range
// Write a program that reads 3 numbers n, min and max (min != max) and prints n random numbers in the range [min...max].
const input = ['10', '10', '15'];
const print = this.print || console.log;
const gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);
const n = +gets();
const min = +gets();
const max = +gets();
let randomNumberLine = '';
if (min !== max) {
  for (let i = 1; i <= n; i++) {
    randomNumberLine += Math.round(Math.random() * (max - min) + min) + ' ';
  }
}
print(randomNumberLine);
