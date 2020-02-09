// const getFullName = (firstName, lastName) => {
//   if (firstName === 'Nikolay') {
//     return 'Stiga be Niki';
//   }

//   return `${firstName} ${lastName}`;
// };

// const myFirstName = 'Nikolay';
// const myLastName = 'Neykov';

// const fullName = getFullName(myFirstName, myLastName);

// console.log(fullName);

// const a = 5;
// const b = 6;

// const sumTwoNumbers = (numA, numB) => {
//   return numA + numB;
// };

// console.log(sumTwoNumbers(a, b));

// const result = console.log('Niki');

// console.log(result);

// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const arr2 = [];

// for (let i = 0; i < arr.length; i++) {
//   const currentNum = arr[i];
//   arr2.push(currentNum * 2);
// }

// console.log(arr, arr2);

// const arr3 = [];

// const getNumbersMultipliedBy2 = (numbers) => {
//   const newArr = [];

//   for (let i = 0; i < numbers.length; i++) {
//     const currentNum = numbers[i];
//     newArr.push(currentNum * 2);
//   }

//   return newArr;
// };

// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const arr2 = getNumbersMultipliedBy2(arr);
// const arr3 = getNumbersMultipliedBy2(arr2);

// console.log(arr2, arr3);

// const sumTwoNumbers = (a, b) => (a + b);  // can skip return

// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const calculate = (numA, numB, operation) => {
//   return operation(numA, numB);
// };

// const sumTwoNumbers = (a, b) => {
//   return a + b;
// };

// const sum = calculate(2, 3, (a, b) => (a + b));
// const multiplication = calculate(2, 3, (a, b) => (a * b));
// const subtraction = calculate(2, 3, (a, b) => (a - b));

// console.log(sum, multiplication, subtraction);

// const str = '1,2,3,4,5,6,7,8,9,10';

// const numbers = str
//   .split(',')
//   .map((num) => +num * 2);

// console.log(numbers);

// const names = ['Niki', 'Skorchev', 'Kris', 'Niki'];

// const filteredNames = names.filter((value) => value !== 'Niki');

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const evenNumbers = numbers.filter((el) => el % 2 === 0);

// console.log(evenNumbers);

const numbers = [1, 2, 3, 4, 5, 6];

const sum = numbers.reduce((accumolator, el) => accumolator * el, 1);

console.log(sum);
