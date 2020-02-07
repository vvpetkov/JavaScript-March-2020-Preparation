let input = ['5', '2'];
let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

let n = +gets();
let k = +gets();
let factorial1 = 1;
let factorial2 = 1;

for (i = 1; i <= n; i++) {
    if (i <= k) {
        factorial2 *= i
    }
    factorial1 *= i;
}
print(factorial1 / factorial2);