// Calculate 3
// In combinatorics, the number of ways to choose N different members out of a group of N different elements
// (also known as the number of combinations) is calculated by the following formula:
// For example, there are 2598960 ways to withdraw 5 cards out of a standard deck of 52 cards.
// Your task is to write a program that calculates N! / (K! * (N - K)!) for given N and K.
// _Try to use only two loops._
// Input
// On the first line, there will be only one number - N
// On the second line, there will also be only one number - K
// Output
// On the only output line, write the result of the calculation for the provided N and K
// Constraints
// 1 < K < N < 100
// _Hint: overflow is possible_
const input = ['52', '5'];
const print = this.print || console.log;
const gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);
const n = +gets();
const k = +gets();
let fact1 = BigInt(1);
let fact2 = BigInt(1);
for (let i = k + 1; i <= n; i++) {
  fact1 *= BigInt(i);
}
for (let j = 1; j <= n - k; j++) {
  fact2 *= BigInt(j);
}
const finalResult = fact1 / fact2;
print(String(finalResult));
