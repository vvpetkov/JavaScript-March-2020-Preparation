const a = 4.8;

console.log(Math.round(a, 2)); // 5
console.log(Math.floor(a, 2)); // 4
console.log(Math.ceil(a, 2)); // 5
console.log(a.toFixed(2)); // 4.80

console.log(typeof Math.round(a, 2)); // number
console.log(typeof a.toFixed(2)); // string
