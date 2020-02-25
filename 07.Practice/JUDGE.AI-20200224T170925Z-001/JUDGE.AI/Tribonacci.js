// Tribonacci
// The Tribonacci sequence is a sequence in which every next element is made by the sum of the previous three elements from the sequence.
// Write a computer program that finds the Nth element of the Tribonacci sequence, if you are given the first three elements of the sequence and the number N. Mathematically said: with given T1, T2 and T3 – you must find Tn.
// Input
// Read from the standard input
// The values of the first three Tribonacci elements will be given on the first three input lines.
// The number N will be on the fourth line. This is the number of the consecutive element of the sequence that must be found by your program.
// The input data will always be valid and in the format described. There is no need to check it explicitly.
// Output
// Print to the standard output
// At the only output line you must print the Nth element of the given Tribonacci sequence.
// Constraints
// The values of the first three elements of the sequence will be integers between -2 000 000 000 and 2 000 000 000.
// The number N will be a positive integer between 1 and 15 000, inclusive.
const input = ['2', '3', '4', '15000'];
const print = this.print || console.log;
const gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);
let prev2 = +gets();
let prev1 = +gets();
let current = +gets();
const nthElement = +gets();
for (let i = 3; i < nthElement; i++) {
  const next = BigInt(prev2) + BigInt(prev1) + BigInt(current); //смята следващото число
  prev2 = BigInt(prev1); // премества числата с 1 напред
  prev1 = BigInt(current);
  current = BigInt(next);
}
print(String(current));
