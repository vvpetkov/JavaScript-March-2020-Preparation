// Problem 1. Compare arrays
// Write a program that reads two number arrays of size N from a sample input and compares them element by element.
// Input:
// On the first line you will receive the number N
// On the next N lines the numbers of the first array will be given
// On the next N lines the numbers of the second array will be given
// Output:
// Print Equal if the two arrays are the same and Not equal if they are not
// !!! arr1 = [1, 2, 3] i arr2 = [1, 2, 3] i sled tova print(arr1 === arr2) dava false - referirat kym razlichni chasti ot pametta!!!!

const input = ['3', '31', '1', '2', '31', '1', '2'];
const print = this.print || console.log;
const gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);
const n = +gets();
const arr1 = []; // създаваме 2 масива, всеки с дължина n
const arr2 = [];
let str1 = '';
let str2 = '';
let isEqual; // създаваме си променлива, на която да присвояваме 'Equal' или 'Not Equal' в зависимост от проверката за равенство на 2-та масива, след като са преобразувани на string
for (let i = 0; i <= n - 1; i++) { // въртим 2 цикъла - един за единия масив, и втори за втория, като от всеки от тях образуваме string и след това ги сравняваме
  arr1.push(gets());
  str1 += arr1[i];
}
for (let i = 0; i <= n - 1; i++) {
  arr2.push(gets());
  str2 += arr2[i];
}
if (str1 === str2) {
  isEqual = 'Equal';
} else isEqual = 'Not Equal';
print(isEqual);
