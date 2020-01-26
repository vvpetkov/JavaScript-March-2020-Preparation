// Input.
let input = [
    '4',
    '2'

];

// Custom implementation of read and print. Do not touch : )
let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

// Solution
let a = gets();
a = Number(a);
let b = gets();
b = Number(b);

let sum = a + b;
let diff = a - b;
let product = a * b;
let remainder = a % b;
let pow = Math.pow(a,b);



print(sum);
print(diff);
print(product);
print(remainder);
print(pow);