// let input = ['3', '2'];
// let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);
// let print = this.print || console.log;

// let n = +gets();
// let x = +gets();
// let factorial = 1;
// let sum = 1;

// for (let i = 1; i <= n; i++){
//   factorial *= i;
//   sum += factorial / Math.pow(x, i);
// }
// print(sum.toFixed(5));

// let input = ['4', '3'];
// let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);
// let print = this.print || console.log;

// let n = +gets();
// let x = +gets();
// let factorial = 1;
// let sum = 1;

// for (let i = 1; i <= n; i++){
//   factorial *= i;
//   sum += factorial / Math.pow(x, i);
// }
// print(sum.toFixed(5));

let input = ['5', '-4'];
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);
let print = this.print || console.log;

let n = +gets();
let x = +gets();
let factorial = 1;
let sum = 1;

for (let i = 1; i <= n; i++){
  factorial *= i;
  sum += factorial / Math.pow(x, i);
}
print(sum.toFixed(5));