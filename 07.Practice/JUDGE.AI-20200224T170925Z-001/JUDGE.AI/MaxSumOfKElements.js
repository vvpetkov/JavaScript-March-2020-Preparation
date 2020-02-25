// Write a program that reads two integer numbers N and K and an array of N elements from the console.
// Find the maximal sum of K elements in the array.
// Input
// On the first line you will receive the number N
// On the second line you will receive the number K
// On the next N lines the numbers of the array will be given
// Output
// Print the maximal sum of K elements in the array
// Constraints
// 1 <= N <= 1024
// 1 <= K <= N
const input = ['8', '3', '3', '2', '3', '-2', '5', '4', '2', '7'];
const print = this.print || console.log;
const gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);
const number = +gets();
const numberOfItems = +gets();
const initialArray = [];
for (let i = 0; i < number; i++) {
  initialArray.push(+gets());
}
initialArray.sort((a, b) => (b - a)).map(Number);
let biggestSumOfKElements = 0;
for (let i = 0; i < numberOfItems; i++) {
  biggestSumOfKElements += initialArray[i];
}
print(biggestSumOfKElements);
