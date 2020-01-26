// Input.
let input = [
    '5',

];

// Custom implementation of read and print. Do not touch : )
let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

// Solution
let n = gets();
n = Number(n);

let sumFrom1toN = n * (n + 1) / 2


print(sumFrom1toN);