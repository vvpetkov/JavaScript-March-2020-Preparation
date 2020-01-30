const input = ['-1', '-2.5', '4'];

const print = this.print || console.log;
const gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

const a = +gets();
const b = +gets();
const c = +gets();

const sum = a * b * c;

if (sum < 0) {
  print('-');
} else if (sum > 0) {
  print('+');
} else {
  print(0);
}
