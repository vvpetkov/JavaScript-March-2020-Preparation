const input = ['8', '3', '5', '4', '1'];

const print = this.print || console.log;
const gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

const a = +gets();
const b = +gets();
const c = +gets();
const d = +gets();
const e = +gets();

if (a >= b && a >= c && a >= d && a >= e) {
  print(a);
} else if (b >= a && b >= c && b >= d && b >= e) {
  print(b);
} else if (c >= b && c >= a && c >= d && c >= e) {
  print(c);
} else if (d >= b && d >= a && d >= c && d >= e) {
  print(d);
} else {
  print(e);
}
