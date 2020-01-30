const input = ['2', '31', '1'];

const print = this.print || console.log;
const gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

const a = +gets();
const b = +gets();
const c = +gets();

if (a > b && b > c) {
  print(`${a} ${b} ${c}`);
} else if (a > c && c > b) {
  print(`${a} ${c} ${b}`);
}
if (b > a && a > c) {
  print(`${b} ${a} ${c}`);
} else if (b > c && c > a) {
  print(`${b} ${c} ${a}`);
}
if (c > a && a > b) {
  print(`${c} ${a} ${b}`);
} else if (c > b && b > a) {
  print(`${c} ${b} ${a}`);
}
