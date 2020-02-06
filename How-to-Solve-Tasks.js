const input = ['123'];
const print = this.print || console.log;
const gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

const numberToEnglish = +gets();


const input = ['5'];
const print = this.print || console.log;
const gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

const n = +gets();

for (let row = 1; row <= n; row++) {
  let line = '';
  for (let col = row; col < row + n; col++) {
    line += `${col}`;
  }
  print(line);
}


//On the first line you will receive one number - N - the count of numbers to follow.
//On the next N lines you will receive the sequence of numbers, each on a new line.

// Prep/Loops/Judge/
// Repetition 1:15 video 
// 11.Find-Maximum-Value.js

const input = ['4', '5', '7', '3', '6'];
const print = this.print || console.log;
const gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

const n = +gets();
let maxValue = -200;

for (let i = 0; i < n; i++) {
  let currentNum = +gets();
  maxValue = Math.max(maxValue, currentNum);
}

print(maxValue);


const input = ['6', '9', '11', '3', '2', '1', '8'];
const print = this.print || console.log;
const gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

const n = +gets();
let allNumbers = [];

for (let i = 0; i < n; i++) {
  let currentNum = +gets();
  allNumbers.push(currentNum);
}

let sortedNumbers = allNumbers.sort((a, b) => a - b);

// print(sortedNumbers);
let a = sortedNumbers.pop();
let b = sortedNumbers.pop();
let c = sortedNumbers.pop();
// print(sortedNumbers);

print(`${a}, ${b} and ${c}`)