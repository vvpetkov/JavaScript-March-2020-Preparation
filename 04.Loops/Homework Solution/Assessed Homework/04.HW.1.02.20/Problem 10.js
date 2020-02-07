const input = [
    '10',
];

const print = this.print || console.log;
const gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

let n = +gets();
let s = '';

for (let i = 1; i <= n; i++) {
    s += i + ' ';
}

let g = s.split(' ');
g.splice(-1, 1);
g.sort(function () { return .5 - Math.random(); });
print(g.join(' '));






