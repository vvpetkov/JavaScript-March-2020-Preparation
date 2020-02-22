// Arrays (Judge)(09) Array Sort (Vld)
// 09.Array Sort.js

const input = ['3,-12,0,0,13,5,1,0,-2'];
const print = this.print || console.log;
const gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

// The solution starts from here
// const numbers = gets().split(',').map((e) => +e);

// const nonZeroes = [];
// const zeros = [];

// for (let i = 0; i < numbers.length; i++) {
//   if(numbers[i] === 0) {
//     zeros.push(numbers[i]);
//   }else{
//     nonZeroes.push(numbers[i]);
//   }
// }

// const sortedNumbers = nonZeroes.concat(zeros);

// print(sortedNumbers.join(','));

// Ново решение

const numbers = gets().split(',').map((e) => +e);

const nonZeroes = numbers.filter((e) => e !== 0);
const zeros = numbers.filter((e) => e === 0);

const sortedNumbers = nonZeroes.concat(zeros);

print(sortedNumbers.join(','));