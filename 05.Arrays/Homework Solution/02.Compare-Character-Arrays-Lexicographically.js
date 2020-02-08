// Prep/Arrays/Homework Solution
// Problem 2. Compare Character Arrays Lexicographically
// 02.Compare-Character-Arrays-Lexicographically.js

const input = [
  'telerik', // On the first line you will receive the first array as string
  'teleric'  // On the second line you will receive the second array as string
];
const print = this.print || console.log;
const gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

const numberToEnglish = +gets();
