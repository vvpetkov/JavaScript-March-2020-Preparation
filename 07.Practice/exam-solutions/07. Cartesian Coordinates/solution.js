const input = ['-1', '-2'];
const gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);
const print = this.print || console.log;

const x = +gets();
const y = +gets();

if (x === 0 && y === 0) {
  print(0);
} else if (x > 0 && y > 0) {
  print(1);
} else if (x < 0 && y > 0) {
  print(2);
} else if (x < 0 && y < 0) {
  print(3);
} else if (x > 0 && y < 0) {
  print(4);
} else if (x === 0 && y !== 0) {
  print(5);
} else if (x !== 0 && y === 0) {
  print(6);
}
