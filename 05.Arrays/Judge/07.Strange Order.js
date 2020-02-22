// Arrays (Judge)(07) Strange Order (Vld)
// 07.Strange Order.js

const input = ['3,-12,0,0,13,5,1,0,-2'];
const print = this.print || console.log;
const gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

// The solution starts from here

// const numbers = gets().split(',').map((e) => +e);
// const orderdNumbers = [];

// for (let i = 0; i < numbers.length; i++) {
//   if (numbers[i] < 0) {
//     orderdNumbers.push(numbers[i]);
//   }
// }

// for (let i = 0; i < numbers.length; i++) {
//   if (numbers[i] === 0) {
//     orderdNumbers.push(numbers[i]);
//   }
// }

// for (let i = 0; i < numbers.length; i++) {
//   if (numbers[i] > 0) {
//     orderdNumbers.push(numbers[i]);
//   }
// }

// print(orderdNumbers.join(','));


// ново решение

const numbers2 = gets().split(',').map((e) => +e);
const negative = numbers2.filter((e) => e < 0);
// print(negative); // [-12, -2]
const zeros = numbers2.filter((e) => e === 0);
const positive = numbers2.filter((e) => e > 0);

const orderdNumbers2 = negative.concat(zeros, positive)


print(orderdNumbers2);