// 05.TheBiggestOf3Numbers.js

// start solution:

const input = ['43', '43', '42'];

const print = this.print || console.log;
const gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

const a = +gets();
const b = +gets();
const c = +gets();
let biggest = null;

if (a >= b && b >= c) {
  biggest = a;
} else if (b < c) {
  if (a >= c) {
    biggest = a;
  } else {
    biggest = c;
  }
} else if (a <= b && b >= c) {
  biggest = b;
} else if (a < b && b < c) {
  biggest = c;
}

print(biggest);
// end solution:
