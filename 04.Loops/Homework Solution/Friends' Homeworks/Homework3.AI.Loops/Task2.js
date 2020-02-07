// Problem 2. Numbers Not Divisible by 3 and 7
// Write a program that reads a positive integer n and prints all the numbers from 1 to n not divisible by 3 or 7, on a single line, separated by a space.
const input = ['10'];
const print = this.print || console.log;
const gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);
const n = +gets();
let show = '';
for (let i = 1; i <= n; i++) {
  if ((i % 3 === 0) || (i % 7 === 0)) {
    print('');
  } else show = show + i + ' ';
}
print(show);
