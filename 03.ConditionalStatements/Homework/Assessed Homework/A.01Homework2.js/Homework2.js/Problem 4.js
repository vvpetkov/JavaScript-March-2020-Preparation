let input = ['-1', '-2', '-2'];
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);
let print = this.print || console.log;

let a = +gets();
let b = +gets();
let c = +gets();

if (a > 0 && b > 0 && c > 0) {
  print('+');
} else if (a < 0 && b < 0 && c < 0) {
  print('-');
} else if (a === 0 || b === 0 || c === 0) {
  print('0');
}
