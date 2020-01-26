let input = [
    '1',
    '2',
    '3',
    '4',
    '5',
];

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

let num1 = gets();
let num2 = gets();
let num3 = gets();
let num4 = gets();
let num5 = gets();

num1 = Number(num1);
num2 = Number(num2);
num3 = Number(num3);
num4 = Number(num4);
num5 = Number(num5);

let sum = num1 + num2 + num3 + num4 + num5;

console.log(sum);