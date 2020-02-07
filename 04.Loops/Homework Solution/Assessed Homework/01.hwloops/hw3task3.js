let input = ['4', '3', '2', '5', '1'];
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);
let print = this.print || console.log;

let n = +gets();
let sum = 0;
let min = Number.MAX_SAFE_INTEGER;
let max = Number.MIN_SAFE_INTEGER;

for (let i = 0; i < n; i++) {
   let currentNumber = +gets(); 
   min = Math.min(min, currentNumber);
   max = Math.max(max, currentNumber);
   sum += currentNumber;
}

let avg = sum / n;

print(`min = ${min.toFixed(2)}`);
print(`max = ${max.toFixed(2)}`);
print(`sum = ${sum.toFixed(2)}`);
print(`avg = ${avg.toFixed(2)}`);