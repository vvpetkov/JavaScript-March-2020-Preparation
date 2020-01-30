let input = ['hi'];
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);
let print = this.print || console.log;

let num = +gets();

if (num === 0) {
  print('zero');
} else if (num === 1) {
  print('one');
} else if (num === 2) {
  print('two');
} else if (num === 3) {
  print('three');
} else if (num === 4) {
  print('four');
} else if (num === 5) {
  print('five');
} else if (num === 6) {
  print('six');
} else if (num === 7) {
  print('seven');
} else if (num === 8) {
  print('eight');
} else if (num === 9) {
  print('nine');
} else {
  print('not a digit');
}
