const input = ['1'];

const print = this.print || console.log;
const gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

const digit = +gets();

if (digit === 0) {
  print('zero');
} else if (digit === 1) {
  print('one');
} else if (digit === 2) {
  print('two');
} else if (digit === 3) {
  print('three');
} else if (digit === 4) {
  print('four');
} else if (digit === 5) {
  print('five');
} else if (digit === 6) {
  print('six');
} else if (digit === 7) {
  print('seven');
} else if (digit === 8) {
  print('eight');
} else if (digit === 9) {
  print('nine');
} else {
  print('not a digit');
}