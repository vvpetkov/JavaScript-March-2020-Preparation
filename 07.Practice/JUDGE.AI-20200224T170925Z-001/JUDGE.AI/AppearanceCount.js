// Appearance Count

// Write a method that counts how many times given number appears in a given array. Write a test program to check if the method is working correctly.

// Input
// On the first line you will receive a number N - the size of the array
// On the second line you will receive N numbers separated by spaces - the numbers in the array
// On the third line you will receive a number X
// Output
// Print how many times the number X appears in the array
// Constraints
// 1 <= N <= 1024
// Sample tests
// Input Output
// 8
// 28 6 21 6 -7856 73 73 -56
// 73 2
const input = ['6', '3 6 6 11 11 11', '11'];
const print = this.print || console.log;
const gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);
const numberOfNumbers = +gets();
const numbersArray = gets().split(' ').map(Number);
const numberToCheck = +gets();
let counter = 0;
// print(numbersArray);
for (let i = 0; i < numberOfNumbers; i++) {
  if (numberToCheck === numbersArray[i]) {
    counter++;
  }
}
print(counter);
