let input = [
    '1',
    '2',
    '3'
];

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

let num1 = gets();
let num2 = gets();
let num3 = gets();

num1 = Number(num1);
num2 = Number(num2);
num3 = Number(num3);

let maxNum = Math.max(num1, num2, num3);
let minNum = Math.min(num1, num2, num3);

let sum = maxNum + minNum;

console.log(sum);