// Problem 6. Calculate N! / K!
// Write a program that calculates n! / k! for given n and k (1 < k < n < 100). * Use only one loop.
const input = ['8', '3'];
const gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);
const print = this.print || console.log;
const n = +gets();
const k = +gets();
let factorialNK = 1;
for (let i = k + 1; i <= n; i++) { // we use the formula that n!/k! = (k + 1) * (k + 2) * (k + 3)... * n
  factorialNK *= i;
}
print(factorialNK);
