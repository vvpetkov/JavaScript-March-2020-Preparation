const input = [
    '10',
    '10',
    '15',
];

const print = this.print || console.log;
const gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

let n = +gets();
let min = +gets();
let max = +gets();
let s = '';


for (let i = 1; i <= n; i++) {
    s += (Math.floor(Math.random() * (max - min + 1)) + min) + ' ';
}
print(s);








