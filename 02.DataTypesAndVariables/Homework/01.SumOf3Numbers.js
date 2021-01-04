let input = ["-2", "0", "3"];

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

let num1 = gets();
let num2 = gets();
let num3 = gets();

num1 = Number(num1);
num2 = Number(num2);
num3 = Number(num3);

let sumOf3 = num1 + num2 + num3;

console.log(sumOf3);
