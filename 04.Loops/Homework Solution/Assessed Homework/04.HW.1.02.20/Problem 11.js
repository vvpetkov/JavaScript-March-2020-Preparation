const input = [
    '30',
];

const print = this.print || console.log;
const gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

let n = +gets();
let z = 0;

for (let i = 5; n / i >= 1; i *= 5) {
    z += Math.floor(n / i);
}
print(z);
