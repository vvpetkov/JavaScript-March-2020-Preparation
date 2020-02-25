// Reverse Number
// Write a method that reverses the digits of a given decimal number.
const input = ['113'];
const print = this.print || console.log;
const gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);
const reverseNum = gets().split('').reverse().join('');
print(reverseNum);
