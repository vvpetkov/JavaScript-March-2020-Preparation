let input = [
    '-5',
    '-2'
];

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

let num1 = gets();
let num2 = gets();

num1 = Number(num1);
num2 = Number(num2);

let maxOfTwo = Math.max(num1, num2);


console.log(maxOfTwo);
