const input = [
    '5',
    '-4',
];

const print = this.print || console.log;
const gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

let n = +gets();
let x = +gets();
let a = 1;
let b = 1;
let s = 1;

for (i = 1; i <= n; i++) {
    a *= i;
    b = a / Math.pow(x, i);
    s += b;
}

print(s.toFixed(5));
