const input = [
    '3',
];

const print = this.print || console.log;
const gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

let n = +gets();

let mat = new Array(n).fill().map(() => new Array(n).fill(''));
let c = 1;
let a = 0;
let b = n - 1;
let x = 0;
let y = n - 1;

while (a <= b && x <= y) {
    for (let i = a; i <= b; i++) {
        mat[x][i] = c;
        c++;
    }
    x++;

    for (let j = x; j <= y; j++) {
        mat[j][b] = c;
        c++;
    }
    b--;

    for (let k = b; k >= a; k--) {
        mat[y][k] = c;
        c++;
    }
    y--;

    for (let l = y; l >= x; l--) {
        mat[l][a] = c;
        c++
    }
    a++
}
for (let i = 0; i < n; i++) {
    print(mat[i].join(' '));
}
