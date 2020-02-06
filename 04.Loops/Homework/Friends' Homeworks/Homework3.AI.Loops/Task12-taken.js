// Problem 12. Spiral Matrix
// Write a program that reads a positive number n (1 ≤ n ≤ 20) and prints a matrix holding the numbers
// from 1 to n*n in the form of square spiral like in the examples below.

// A HUGE credit to https://medium.com/@jpena91/enter-the-spiral-matrix-3d1470f8cf9f (with a bit of fine-tuning :))
const input = ['5'];
const print = this.print || console.log;
const gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);
const n = +gets();
const results = [];
for (let i = 0; i < n; i++) {
  results.push([]);
}
let counter = 1;
let startColumn = 0;
let endColumn = n - 1;
let startRow = 0;
let endRow = n - 1;
while (startColumn <= endColumn && startRow <= endRow) {
// Top row
  for (let i = startColumn; i <= endColumn; i++) {
    results[startRow][i] = counter;
    counter++;
  }
  startRow++;
  // Right column
  for (let i = startRow; i <= endRow; i++) {
    results[i][endColumn] = counter;
    counter++;
  }
  endColumn--;
  // Bottom row
  for (let i = endColumn; i >= startColumn; i--) {
    results[endRow][i] = counter;
    counter++;
  }
  endRow--;
  // start column
  for (let i = endRow; i >= startRow; i--) {
    results[i][startColumn] = counter;
    counter++;
  }
  startColumn++;
}
for (let i = 0; i < n; i++) {
  let spiral = '';
  for (let j = 0; j < n; j++) {
    spiral += (results[i][j]) + ' ';
  }
  print(spiral);
}
