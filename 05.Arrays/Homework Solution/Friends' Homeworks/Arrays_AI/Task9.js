// Problem 9. Print Maximum Increasing Subsequence
// Write a program that prints the maximum length increasing subsequence to the console. If two or more are of the same length, print the last one
// Examples:
// Input                                    Output
// 6 7 3 8 1 9 4 5 6 2 1 3                  4 5 6
// Input                                    Output
// 1 2 3 4 3 1 9 4 5 6 11                  4 5 6 11
const input = ['1 2 3 4 5 1 9 4 5 6 11'];
const print = this.print || console.log;
const gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);
const currentLine = gets(); // извикваме input-a, който изглежда като числа в редица с интервал между тях.
const arrayMax = currentLine.split(' ');
const maxLengthSequence = [];
for (let i = 0; i < arrayMax.length; i++) { // обхождаме масива
  if (arrayMax[i + 1] < arrayMax[i]) {
    maxLengthSequence.push(arrayMax[i]);
    break;
  } else {
    maxLengthSequence.push(arrayMax[i]);
  }
}
print(maxLengthSequence);
print(arrayMax);
