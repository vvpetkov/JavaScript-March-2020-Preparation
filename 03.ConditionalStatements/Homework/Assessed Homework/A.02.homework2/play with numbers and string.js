let input = ['хи'];

let print = this.print || console.log;

let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

let n = gets();
if (Number(n)) {
    n = Number(n);
} else {
    n = n;
}

switch (n) {
    case Number(n):
        print(n + 1);
        break;
    case n:
        print(`${n}*`);
        break;
}