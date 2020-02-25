// Matrix of Numbers
// Submit solution
// All submissions
// Best submissions

// Points:100 (partial)
// Time limit:1.0s
// Memory limit:64M
// Author:
// donchominkov

// Tags
// All, Loops
// Difficulty
// Easy

// Write a program that reads from the console a positive integer number N and prints a matrix like in the examples below. Use two nested loops.

// Challenge: achieve the same effect without nested loops
// Input
// The input will always consist of a single line, which contains the number N
// Output
// See the examples.
// Constraints
// 1 <= N <= 20
// N will always be a valid integer number
// Time limit: 0.1s
// Memory limit: 16MB
const input = ['5'];
const print = this.print || console.log;
const gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);
const n = +gets();
for (let i = 1; i <= n; i++) {
  let line = '';
  for (let j = i; j <= n + i - 1; j++) {
    line += j + ' ';
  }
  print(line);
}
