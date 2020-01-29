// 04.Mentor.MultiplicationSign.js

const input = ['-2', '-2', '1'];

const print = this.print || console.log;
const gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

const a = +gets();
const b = +gets();
const c = +gets();

if (a === 0 || b === 0 || c === 0) {
  print(0);
} else if (
  (a < 0 && (b > 0 && c > 0)) ||
  (b < 0 && (a > 0 && c > 0)) ||
  (c < 0 && (a > 0 && b > 0)) ||
  (a < 0 && b < 0 && c < 0)
) {
  print('-');
} else {
  print('+');
}