const numbers = [1, 2, 3, 4, 5];

const t = numbers[0];
numbers[0] = numbers[numbers.length - 1];
numbers[numbers.length - 1] = t;

console.log(numbers);
