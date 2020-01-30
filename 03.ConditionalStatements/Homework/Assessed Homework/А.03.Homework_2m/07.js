let input = ['-2', '-2', '1'];
let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

let a = +gets();
let b = +gets();
let c = +gets();

if (a >= b && a >= c) {
    if (b >= c) {
        print(a, b, c);
    } else if (b < c) {
        print(a, c, b);
    }
}
if (b >= a && b >= c) {
    if (a >= c) {
        print(b, a, c);
    } else if (a < c) {
        print(b, c, a);
    }
}
if (c >= a && c >= b) {
    if (a >= b) {
        print(c, a, b);
    } else if (a < b) {
        print(c, b, a);
    }
}