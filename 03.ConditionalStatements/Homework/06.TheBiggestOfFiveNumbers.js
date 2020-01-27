// 06.TheBiggestOfFiveNumbers.js

// start solution:
const input = ['3', '14', '28', '2', '42'];

const print = this.print || console.log;
const gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

const a = +gets();
const b = +gets();
const c = +gets();
const d = +gets();
const e = +gets();
let biggestOf_abc = null;
let f = null;
let biggestOf_fde = null;

if (a >= b && b >= c) {
  biggestOf_abc = a;
} else if (b < c) {
  if (a >= c) {
    biggestOf_abc = a;
  } else {
    biggestOf_abc = c;
  }
}

if (a <= b && b >= c) {
  biggestOf_abc = b;
} else if (a < b && b < c) {
  biggestOf_abc = c;
}

f = biggestOf_abc;

if (f >= d && d >= e) {
  biggestOf_fde = f;
} else if (d < e) {
  if (f >= e) {
    biggestOf_fde = f;
  } else {
    biggestOf_fde = e;
  }
}

if (f <= d && d >= e) {
  biggestOf_fde = d;
} else if (f < d && d < e) {
  biggestOf_fde = e;
}

print(biggestOf_fde);
// end solution:
