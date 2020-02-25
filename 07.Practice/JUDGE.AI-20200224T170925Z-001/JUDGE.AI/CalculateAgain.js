// Calculate Again
// Write a program that calculates N! / K! for given N and K.
// Use only one loop.
// Input
// On the first line, there will be only one number - N
// On the second line, there will be only one number - K
// Output
// Output a single line, consisting of the result from the calculation described above.
// Constraints
// 1 < K < N < 100
// Hint: overflow is possible
// N and K will always be valid integer numbers
const input = ['58', '23'];
const print = this.print || console.log;
const gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);
const n = +gets();
const k = +gets();
let fact = BigInt(1);
for (let i = k + 1; i <= n; i++) {
  fact *= BigInt(i);
}
print(String(BigInt(fact))); // превръщаме на String, за да се вижда нормално числото
