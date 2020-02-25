// Biggest Prime Number
// Write a program that finds and prints the biggest prime number which is <= N.
// Input
// On the first line you will receive the number N
// Output
// Print the biggest prime number which is <= N
// Constraints
// 2 <= N <= 10 000 000
// Sample tests
// In/Out
// 13/13
// 126/113
// 26/23
const input = ['133'];
const print = this.print || console.log;
const gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);
const number = +gets();
// let isPrime = true;
// while (isPrime === false) {
//   number--;
// }
function amIPrime (n) {
  if (n === 2) {
    return true;
  } else if (n > 2) {
    for (let i = 2; i <= Math.sqrt(n); i++) {
      if (n % i === 0) {
        return false;
      }
    } return true;
  }
}
// print(amIPrime(number));
let highestPrime;
for (let i = number; i >= 2; i--) {
  if (amIPrime(i) === true) {
    highestPrime = i; break;
  } else highestPrime--;
}
print(highestPrime);
