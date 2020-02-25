// Catalan Numbers
// In combinatorics, the Catalan numbers are calculated by the following formula: catalan-formula
// Cn = П (K = 2... n) (n + k)/k
// Write a program to calculate the Nth Catalan number by given N
// Input
// On the only line, you will receive the number N
// Output
// Output a single number - the Nth Catalan number
// Constraints
// N will always be a valid integer number in the range [0, 100]
// _Hint: overflow is possible._
const input = ['40'];
const print = this.print || console.log;
const gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);
const n = +gets();
let catalanNumber = 1;
if ((n === 0) || (n === 1)) {
  catalanNumber = 1;
} else if (n >= 2) {
  for (let k = 2; k <= n; k++) {
    catalanNumber *= (n + k) / k;
  }
}
if (n <= 39) catalanNumber = (catalanNumber.toFixed(0));
else catalanNumber = String(BigInt(catalanNumber));
print(catalanNumber);
