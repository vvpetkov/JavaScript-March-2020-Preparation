// Repetition
// Prep/Loops/Homeworks/08.Odd-and-Even-Product.js
// 
// 08.Repetition.Odd-and-Even-Product.js
// 1:10 Homework Solution - Video : Problem 10 има разлика в номерацията на проблемите

const input = ['2 1 1 6 3'];
const print = this.print || console.log;
const gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

// let numbers = gets().split(' ');           // [ '2', '1', '1', '6', '3' ]

let numbers = gets().split(' ').map(Number); // [ 2, 1, 1, 6, 3 ]

let evenProduct = 1;
let oddProduct = 1;

for (let index = 0; index < numbers.length; index++) {
  let element = numbers[index];

  if (index % 2 === 0) {
    evenProduct *= element;
  } else {
    oddProduct *= element;
  }
}

print(evenProduct === oddProduct ? 'yes' : 'no');
// yes
