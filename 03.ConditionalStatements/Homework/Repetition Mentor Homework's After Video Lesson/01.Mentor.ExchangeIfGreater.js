// 01.Mentor.ExchangeIfGreater.js

const input = ['5', '2'];

const print = this.print || console.log;
const gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

let a = +gets();
let b = +gets();

// if (a > b) {
//   const temp = a;
//   a = b;
//   b = temp;

// }

if (a > b) {
  [a, b] = [b, a];
}

print(`${a} ${b}`);
