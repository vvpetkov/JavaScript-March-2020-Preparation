const input = ['0', '5', '0'];
const print = this.print || console.log;
const gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

const a = +gets();
const b = +gets();
const c = +gets();

if (a >= b) {
  if (a >= c) {
    if (b >= c) {
      print(a, b, c);
    } else {
      print(a, c, b);
    }
  } else {   //(a<c)
    print(c, a, b);
  }
} else if (b >= a) {
  if (b >= c) {
    if (a >= c) {
      print(b, a, c);
    } else {  //(a<c)
      print(b, c, a);
    }
  } else {   //(b<c)
    print(c, b, a);
  }
}
