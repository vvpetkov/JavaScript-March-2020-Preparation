const input = ['400', '300', '100', '600', '700'];

const print = this.print || console.log;
const gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

const a = +gets();
const b = +gets();
const c = +gets();
const d = +gets();
const e = +gets();

if (a > b && a > c && a > d && a > e) {
  print(a);
} else if (b > a && b > c && b > d && b > e) {
  print(b);
} else if (c > a && c > b && c > d && c > e) {
  print(c);
} else if (d > a && d > b && d > c && d > c) {
  print(d);
} else {
  print(e);
}
