const input = ['700', '500', '200', '300', '400'];
const print = this.print || console.log;
const gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

const a = +gets();
const b = +gets();
const c = +gets();
const d = +gets();
const e = +gets();

if (b >= a && b >= c && b >= d && b >= e) {
    print(b);
} else if (c >= a && c >= b && c >= d && c >= e) {
    print(c);
} else if (a >= b && a >= c && a >= d && a >= e) {
    print(a);
} else if (d >= b && d >= c && d >= a && d >= e) {
    print(d);
} else if (e >= b && e >= c && e >= d && e >= d) {
    print(e);
}