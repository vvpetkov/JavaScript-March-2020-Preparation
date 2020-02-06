// Prep/Loops/Judge/
// Repetition 1:20 video
// 12.Find Largest Three Values.js

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

print(`${a}, ${b} and ${c}`);
