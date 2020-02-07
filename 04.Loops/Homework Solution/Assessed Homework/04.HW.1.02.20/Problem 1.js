const input = [
    '5',
];

const print = this.print || console.log;
const gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);


let n = +gets();
let l = '';
for (let i = 1; i <= n; i++) {
    l += `${i} `;
}
print(l);