const input = [
    '8',
    '3',
];

const print = this.print || console.log;
const gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);


let n = +gets();
let k = +gets();
let x = 1;
let y = 1;

for (i = 1; i <= n; i++) {
    if (i <= k) {
        y *= i;
    }
    x *= i;
}
print(x / y);

