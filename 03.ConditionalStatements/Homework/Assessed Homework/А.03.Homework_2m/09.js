const input = ['хи'];
const print = this.print || console.log;
const gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

let n = gets();

if (Number(n)) {
    n = +n;
} else {
    n = n;
}

switch (typeof n) {
    case 'number':
        print(n + 1);
        break;
    case 'string':
        print(`${n}*`);
        break;
}