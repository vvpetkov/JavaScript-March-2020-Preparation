const arr = [1, 2, 3, 4, 5];

// SLICE
const arr2 = arr.slice(); // creates a copy from the original array
console.log(arr2); // [ 1, 2, 3, 4, 5 ]

const arr3 = arr.slice(3); // creates a copy from the original array starting from a given index
console.log(arr3); // [ 4, 5 ]

const arr4 = arr.slice(1, 3); // creates a copy from the original array starting from a given index to end index
console.log(arr4); // [ 2, 3 ]

// MAP
const numbersAsString = ['1', '2', '3', '4', '5'];
const numbers = numbersAsString.map((el) => +el); // creates array of numbers from array of strings
console.log(numbers); // [ 1, 2, 3, 4, 5 ]

// FILTER
const names = ['ivan', 'niki', 'ivan', 'gosho', 'stamat', 'ivan'];
const filteredNames = names.filter((el) => el !== 'ivan'); // only the names that are different than ivan will stay in the new array
console.log(filteredNames); // [ 'niki', 'gosho', 'stamat' ]

// REDUCE
const nums = [1, 2, 3, 4, 5];
const sumOfNums = nums.reduce((sum, el) => sum + el, 0); // sums the numbers from the array
console.log(sumOfNums); // 15

// SORT
const unsortedNumbers = [5, 1, 2, 4, 3];
const sortedNumbers = unsortedNumbers.sort((a, b) => a - b); // sorts the numbers
console.log(sortedNumbers); // [ 1, 2, 3, 4, 5 ]