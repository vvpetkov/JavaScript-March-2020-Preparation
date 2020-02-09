const arr = [1, 2, 3]; // creating array with values 1, 2 and 3

const firstElement = arr[0]; // accessing the value from the array at index 0
console.log(firstElement); // 1

const secondElement = arr[1]; // accessing the value from the array at index 1
console.log(secondElement); // 2

const thirdElement = arr[2]; // accessing the value from the array at index 2
console.log(thirdElement); // 3

arr[0] = 8; // changing the value from the array at index 0
console.log(arr); // [ 8, 8, 3 ]

arr[1] = 8; // changing the value from the array at index 1
console.log(arr); // [ 8, 8, 3 ]

arr[2] = 8; // changing the value from the array at index 2
console.log(arr); // [ 8, 8, 8 ]
