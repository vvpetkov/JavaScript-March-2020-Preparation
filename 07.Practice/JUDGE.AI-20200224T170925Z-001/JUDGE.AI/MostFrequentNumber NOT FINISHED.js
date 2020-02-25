// Most Frequent NOT FINISHED
// Write a program that finds the most frequent number in an array of N elements.
// Input
// On the first line you will receive the number N
// On the next N lines the numbers of the array will be given
// Output
// Print the most frequent number and how many time it is repeated
// Output should be REPEATING_NUMBER (REPEATED_TIMES times)
// Constraints
// 1 <= N <= 1024
// 0 <= each number in the array <= 10000
// There will be only one most frequent number
const input = ['6', '2', '3', '5', '2', '2', '2'];
const print = this.print || console.log;
const gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);
const number = +gets();
let frequency = 1;
let maxFrequency;
const arrayMax = [];
for (let i = 0; i < number; i++) {
  arrayMax.push(+gets());
}
arrayMax.sort((a, b) => a - b); // сортирали сме масива.
let repeatingNum;
for (let i = 0; i < arrayMax.length - 1; i++) {
  if (arrayMax[i] === arrayMax[i + 1]) {
    frequency++;
    frequency = maxFrequency;
  } else if (maxFrequency < frequency) {
    maxFrequency = frequency;
  }
}
print(repeatingNum, frequency);
