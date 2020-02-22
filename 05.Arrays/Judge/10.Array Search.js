// Arrays (Judge)(10) Array Search (Vld)
// 10.Array Search.js

const input = ['4,3,2,7,8,2,3,1'];
const print = this.print || console.log;
const gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

// The solution starts from here

const numbers = gets().split(',').map((e) => +e);

// print(numbers.includes(5)); // false

let missingNumbers = [];

for (let i = 1; i<= numbers.length; i++) {
  if (!numbers.includes(i)) {
    missingNumbers.push(i);
  }
}

print(missingNumbers.join(','));