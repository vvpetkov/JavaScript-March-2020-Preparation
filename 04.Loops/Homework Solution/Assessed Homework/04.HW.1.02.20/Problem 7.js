const input = [
    '4',
];

const print = this.print || console.log;
const gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);


let n = +gets();

for (let i = 1; i <= n; i++) {
    let l = '';
    for (let j = i; j < i + n; j++) {
        l += `${j} `;
    }
    print(l);
}