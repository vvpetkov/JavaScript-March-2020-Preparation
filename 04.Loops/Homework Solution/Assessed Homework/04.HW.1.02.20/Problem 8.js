const input = [
    '5',
    '4',
    '3',
    '2',
    '5',
    '2',
];

const print = this.print || console.log;
const gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);


let n = +gets();
let even = 1;
let odd = 1;

for (let i = 1; i <= n; i++) {
    let cN = +gets();
    if (i % 2 === 0) {
        odd = cN * odd;
    } if (i % 2 !== 0) {
        even = cN * even;
    }
}
if (even === odd) {
    print(`yes ${odd}`);
} else {
    print(`no ${even} ${odd}`);
}


