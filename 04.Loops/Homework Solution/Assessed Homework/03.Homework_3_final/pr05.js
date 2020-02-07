let input = ['5', '-4'];
let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

let n = +gets();
let x = +gets();
let factorial = 1;
let sum = 1;

for (i = 1; i <= n; i++) {
    factorial *= i;
    sum += factorial / Math.pow(x, i);
}
print(sum.toFixed(5));