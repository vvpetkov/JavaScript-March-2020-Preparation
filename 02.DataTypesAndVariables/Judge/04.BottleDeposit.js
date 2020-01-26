// Input.
let input = [
    '3',
    '2'

];

// Custom implementation of read and print. Do not touch : )
let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

// Solution
let halfBottles = gets();
let bottles = gets();
halfBottles = Number(halfBottles);
bottles = Number(bottles);

let priceHalfBottles = 0.1 * halfBottles;
let priceBottles = 0.25 * bottles;
let sum = priceHalfBottles + priceBottles;

print(sum.toFixed(2));