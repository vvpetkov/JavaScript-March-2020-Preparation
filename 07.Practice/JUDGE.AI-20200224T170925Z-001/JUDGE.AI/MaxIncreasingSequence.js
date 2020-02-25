// Longest Increasing Sequence
// Write a program that finds the length of the maximal increasing sequence in an array of N integers.

// Input
// Read from the standard input

// On the first line you will receive the number N
// On the next N lines the numbers of the array will be given
// Output
// Print to the standard output

// Print the length of the maximal increasing sequence
// Constraints
// решена с помощта на видеото на Ники за домашното
const input = ['11', '1', '2', '3', '4', '3', '1', '9', '4', '5', '6', '11'];
const print = this.print || console.log;
const gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);
const number = +gets();
const arrayMax = [];
for (let i = 0; i < number; i++) {
  arrayMax.push(+gets());
}
let maxLengthSequence = [];
for (let i = 0; i < number; i++) { // обхождаме масива
  const currentSequence = [arrayMax[i]];
  for (let j = i + 1; j < arrayMax.length; j++) {
    const lastAddedNum = currentSequence[currentSequence.length - 1];
    if (lastAddedNum >= arrayMax[j]) {
      break;
    } currentSequence.push(arrayMax[j]);
  }
  if (maxLengthSequence.length <= currentSequence.length) {
    maxLengthSequence = currentSequence.slice();
  }
}
print(maxLengthSequence.length);
