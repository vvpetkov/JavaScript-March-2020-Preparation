// Problem 8. Odd and Even Product
// You are given n numbers (given in a single string line, separated by a space).
// Write a program that checks whether the product of the odd elements is equal to the product of the even elements.
// * Elements are counted from 1 to n, so the first element is odd, the second is even, etc.
const input = ['4', '3', '2', '5', '2'];
const print = this.print || console.log;
// const gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);
let oddProduct = 1;
let evenProduct = 1;
for (let i = 0; i <= input.length - 1; i += 2) {
  oddProduct *= input[i];
}
for (let i = 1; i <= input.length - 2; i += 2) {
  evenProduct *= input[i];
}
if (oddProduct === evenProduct) {
  print('yes');
  print(`odd_product = ${oddProduct}`);
} else {
  print('no');
  print(`odd_product = ${oddProduct}`);
  print(`even_product = ${evenProduct}`);
}
