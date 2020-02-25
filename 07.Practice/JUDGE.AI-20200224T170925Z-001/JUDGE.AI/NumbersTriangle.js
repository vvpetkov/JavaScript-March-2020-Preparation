// Numbers Triangle

// You are given the number N.

// Based on it, print triangles as follows:

// Example: N = 3

// Copy
// 1
// 1 2
// 1 2 3
// 1 2
// 3
// Example: N = 5

// Copy
// 1
// 1 2
// 1 2 3
// 1 2 3 4
// 1 2 3 4 5
// 1 2 3 4
// 1 2 3
// 1 2
// 1
// Input
// Read from the standard input

// From the first line of the input, read the number N
// Output
// Print to the standard output

// Print the triangle on 2*N - 1 lines
const input = ['7'];
const print = this.print || console.log;
const gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);
const n = +gets();
let line = '';
for (let i = 1; i <= n; i++) {
  line += i + ' ';
  print(line);
}
for (let i = n - 1; i >= 1; i--) {
  let line1 = '';
  for (let j = 1; j <= i; j++) {
    line1 += j + ' ';
  }
  print(line1);
}
