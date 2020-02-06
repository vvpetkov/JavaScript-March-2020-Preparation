// Write a program that calculates with how many zeroes the factorial of a given number n has at its end.
// * Your program should work well for very big numbers, e.g. n=100000.
// We understand that the numbers divisible to 5 have incrementing trailing zeroes.
const input = ['100000'];
const print = this.print || console.log;
const gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);
const n = +gets();
let numberOfTrailingZeroes = 0;
if (n < 5) {
  print(numberOfTrailingZeroes);
} else {
  for (let i = 5; i <= n; i += 5) {
    let num = i;
    while (num % 5 === 0) {
      num /= 5;
      numberOfTrailingZeroes++;
    }
  }
  print(numberOfTrailingZeroes);
}
