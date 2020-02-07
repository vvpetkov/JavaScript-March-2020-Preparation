const input = [
    '10',
];

const print = this.print || console.log;
const gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);


let n = +gets();
let l = '';

for (let i = 1; i <= n; i++) {
    if (i % 3 === 0 || i % 7 === 0) {
        continue;
    }
    l += `${i} `;
}
print(l);