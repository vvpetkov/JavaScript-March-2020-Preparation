// Arrays (Judge)(06) Remove Duplicates (Vld)
// 06.Remove-Duplicates.js

const input = ['1,2,2,2,2,18,3,12'];
const print = this.print || console.log;
const gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

// The solution starts from here

const list = gets().split(',');
const listOfUniqueElements = [];

for (let i = 0; i < list.length; i++) {
  if (!listOfUniqueElements.includes(list[i])) {   // ако не съществува същият
    listOfUniqueElements.push(list[i]);            // го добави
  }
}

print(listOfUniqueElements.join(','));

// new Set
// Remove duplicate elements from the array
// Use to remove duplicate elements from the array 

// const numbers = [2,3,4,4,2,3,3,4,4,5,5,6,6,7,5,32,3,4,5]

// console.log([...new Set(numbers)])  // [2, 3, 4, 5, 6, 7, 32]
