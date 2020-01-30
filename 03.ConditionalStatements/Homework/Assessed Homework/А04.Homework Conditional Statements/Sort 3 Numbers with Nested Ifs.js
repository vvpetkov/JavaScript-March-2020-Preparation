const input = ['1', '1', '1'];

const print = this.print || console.log;
const gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

const a = +gets();
const b = +gets();
const c = +gets();

if (a >= b && a >= c) {
  if (b >= c) {
    print(a + ' ' + b + ' ' + c);
  } else {
    print(a + ' ' + c + ' ' + b);
  }
} else if (b >= a && b >= c) {
  if (a >= c) {
    print(b + ' ' + a + ' ' + c);
  } else {
    print(b + ' ' + c + ' ' + a);
  }
} else if (c >= b && c >= a) {
  if (b >= a) {
    print(c + ' ' + b + ' ' + a);
  } else {
    print(c + ' ' + a + ' ' + b);
  }
} 
