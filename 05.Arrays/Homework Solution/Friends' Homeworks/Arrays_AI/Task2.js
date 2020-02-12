// Problem 2. Compare Character Arrays Lexicographically
// Write a program that compares two arrays of single-letter strings lexicographically (letter by letter).
// Research how to convert string to an array of single-letter strings.
// Input:
// On the first line you will receive the first array as string
// On the second line you will receive the second array as string
// Output:
// Print First if the first array is lexicographically smaller
// Print Second if the second array is lexicographically smaller
// Print Equal if the arrays are equal
const input = ['teluc', 'telerik'];
const print = this.print || console.log;
const gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);
const string1 = gets();
const string2 = gets();
const string1ToArray = string1.split('');
const string2ToArray = string2.split('');
let isEqual;
if (string1.length === string2.length) { // Правим масив от всяка от двете думи и сравняваме символите. Има и случаи, когато първата или втората е по-дълга
  for (let i = 0; i <= string1.length - 1; i++) {
    if (string1ToArray[i] === string2ToArray[i]) {
      isEqual = 'Equal';
    } else if (string1ToArray[i] > string2ToArray[i]) {
      isEqual = 'Second';
    } else {
      isEqual = 'First';
    }
  }
} else if (string1.length < string2.length) {
  for (let i = 0; i <= string1.length - 1; i++) {
    if (string1ToArray[i] <= string2ToArray[i]) {
      isEqual = 'First';
    } else {
      isEqual = 'Second'; break;
    }
  }
} else if (string1.length > string2.length) {
  for (let i = 0; i <= string2.length - 1; i++) {
    if (string2ToArray[i] <= string1ToArray[i]) {
      isEqual = 'Second';
    } else {
      isEqual = 'First'; break;
    }
  }
}
print(isEqual);
