// 07.Sort3NumbersWithNestedIfs.js

// start solution:

const input = ['5', '10', '100'];

const print = this.print || console.log;
const gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

const a = +gets();
const b = +gets();
const c = +gets();
// let result = null;

if (a >= b && b >= c) {
  print(a, b, c);
} else if (a >= b && b < c) {
  if (a >= c) {
    print(a, c, b);
  } else {
    print(c, a, b); // ?
  }
} else if (a <= b && b >= c) {
  if (a >= c) {
    print(b, a, c);
  } else {
    print(b, c, a);
  }
} else if (a < b && b < c) {
  print(c, b, a);
}
// end solution:
// not Solved!
