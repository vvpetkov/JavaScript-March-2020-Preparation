// Prep/Loops/Homeworks
// Problem 6. Calculate N! / K!
// 06.Problem.js
// 1 < k < n < 100

const input = ['6', '5'];
const print = this.print || console.log;
const gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

const n = +gets();
const x = +gets();

let factorialN = 1;
let factorialX = 1;

for (let i = 1; i <= n; i++) {
  factorialN *= i;
  if (i > x) {
    continue;
  }
  factorialX *= i;
}

print(factorialN / factorialX);
