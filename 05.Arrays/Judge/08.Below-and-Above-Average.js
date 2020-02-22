// Arrays (Judge)(08) Below and Above Average (Vld)
// 08.Below-and-Above-Average.js

const input = ['3,-12,0,0,13,5,1,0,-2'];
const print = this.print || console.log;
const gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

// The solution starts from here

// const numbers = gets().split(',').map((e) => +e);

// let sum = 0;

// for (let i = 0; i < numbers.length; i++) {
//   sum = sum + numbers[i];
// }

// const avg = sum / numbers.length;
// const belowAvg = [];
// const aboveAvg = [];

// for (let i = 0; i < numbers.length; i++) {
//   if (numbers[i] < avg) {
//     belowAvg.push(numbers[i]);
//   } else if (numbers[i] > avg) {
//     aboveAvg.push(numbers[i]);
//   }
// }

// print(`avg: ${avg.toFixed(2)}`);
// print(`below: ${belowAvg.join(',')}`);
// print(`above: ${aboveAvg.join(',')}`);

// ново решение

const numbers2 = gets().split(',').map((e) => +e);
const avg = numbers2.reduce((sum, e) => sum + e, 0) / numbers2.length;
// първи парам.(акумулатор) именуваме: sum 
// втори парам: (елемент от масива) именуваме: е 
// => връщаме резултат ( sum + e)
// парам. (първоначалната стойност на sum): ,0 

const belowAvg = numbers2.filter((e) => e < avg);
const aboveAvg = numbers2.filter((e) => e > avg);

print(`avg: ${avg.toFixed(2)}`);
print(`below: ${belowAvg.join(',')}`);
print(`above: ${aboveAvg.join(',')}`);