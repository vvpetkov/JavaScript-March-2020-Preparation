// ADDING ELEMENTS AT THE END OF THE ARRAY
const arr = []; // creating empty array
console.log(arr); // [ ]

arr.push(1); // adding value 1 at the end of the array
console.log(arr); // [ 1 ]

arr.push(2); // adding value 2 at the end of the array
console.log(arr); // [ 1, 2 ]

arr.push(3); // adding value 3 at the end of the array
console.log(arr); // [ 1, 2, 3 ]

// REMOVING ELEMENTS FROM THE END OF THE ARRAY
const arr2 = ['a', 'b', 'c']; // creating array with values 'a', 'b' and 'c'
console.log(arr2); // [ 'a', 'b', 'c' ]

const removedLastElement = arr2.pop(); // removing the last element from the array and storing it into a variable
console.log(removedLastElement); // c
console.log(arr2); // [ 'a', 'b' ]

// ADDING ELEMENTS AT THE BEGINNING OF THE ARRAY
const arr3 = []; // creating empty array
console.log(arr3); // [ ]

arr3.unshift(1); // adding value 1 at the beginning of the array
console.log(arr3); // [ 1 ]

arr3.unshift(2); // adding value 2 at the beginning of the array
console.log(arr3); // [ 2, 1 ]

arr3.unshift(3); // adding value 3 at the beginning of the array
console.log(arr3); // [ 3, 2, 1 ]

// REMOVING ELEMENTS FROM THE BEGINNING OF THE ARRAY
const arr4 = ['a', 'b', 'c']; // creating array with values 'a', 'b' and 'c'
console.log(arr4); // [ 'a', 'b', 'c' ]

const removedFirstElement = arr4.shift(); // removing the first element from the array and storing it into a variable
console.log(removedFirstElement); // a
console.log(arr4); // [ 'b', 'c' ]