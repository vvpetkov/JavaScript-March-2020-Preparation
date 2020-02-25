// Max Sum of Subsequence
// Write a program that finds the maximal sum of consecutive elements in a given array of N numbers.
// Can you do it with only one loop (with single scan through the elements of the array)?_
// Input
// On the first line you will receive the number N
// On the next N lines the numbers of the array will be given
// Output
// Print the maximal sum of consecutive numbers
// Constraints
// 1 <= N <= 1024
// Sample tests
// Input / Output
// 10       11
// 2
// 3
// -6
// -1
// 2
// -1
// 6
// 4
// -8
// 8
const input = ['10', '2', '3', '-6', '-1', '2', '-1', '6', '4', '-8', '8'];
const print = this.print || console.log;
const gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);
const number = +gets();
let sum = 0;
let maxSum = Number.MIN_SAFE_INTEGER;
const initialArray = [];
for (let i = 0; i < number; i++) {
  initialArray.push(+gets());
  sum = Math.max(initialArray[i], initialArray[i] + sum);
  if (sum > maxSum) {
    maxSum = sum;
  }
}
print(maxSum);
// 1 1 = 1
// 2 1,2, 1+2 = 3
// 3 1,2,3, 1+2, 2+3, 1+2+3 = 6
// 4 1,2,3,4, 1+2, 2+3, 3+4, 1+2+3, 2+3+4, 1+2+3+4
