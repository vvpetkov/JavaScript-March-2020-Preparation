let string = 'Hello, Telerik';
console.log(string[0]);
console.log(string.length);

let arrayFromString = '1,2,3,4,5,6,7'.split(',').map(Number);
console.log(arrayFromString);

let stringFromArray = [1, 2, 3, 4, 5, 6, 7].join(' - ');
console.log(stringFromArray);

let array = [1, 2, 3, 4, 5, 6, 7];
console.log(array[0]);
array[0] = 9999;
console.log(array[0]);
console.log(array.length);

let lastElement = array.pop() // removes the last element and returns it
let firstElement = array.shift() // removes the first element and returns it
array.push(8, 9, 10);           // adds elements at the end
array.unshift(-3, -2, -1, 0);   // adds element to the begining

for (let i = 0; i < array.length; i += 1) {
    console.log(array[i]); // prints every element from the Array to the console
}
