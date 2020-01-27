// 01.ExchangeIfGreater.js
const input = ['4', '2'];

const print = this.print || console.log;
const gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

const a = +gets();
const b = +gets();

if (a > b) {
  print(b, a);
} else {
  print(a, b);
}
