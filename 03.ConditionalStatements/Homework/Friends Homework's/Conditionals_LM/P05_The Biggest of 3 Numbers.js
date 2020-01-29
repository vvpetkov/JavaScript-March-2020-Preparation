var input = ['-0.1', '-0.5', '-1.1'];
var print = this.print || console.log;
var gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

var a = +gets();
var b = +gets();
var c = +gets();

if (a > b) {
  if (a > c) {
    print(a);
  } else {
    print(c);
  }
} else if (b > a) {
  if (b > c) {
    print(b);
  } else {
    print(c);
  }
} else if (c > a) {
  if (c > b) {
    print(c);
  } else {
    print(b);
  }
}
