const input = ['5', '2', '2'];
const print = this.print || console.log;
const gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

const a = +gets();
const b = +gets();
const c = +gets();

if (b >= a && b >= c) {
    print(b);
} else if (c >= a && c >= b) {
    print(c);
} else if (a >= b && a >= c) {
    print(a);
}