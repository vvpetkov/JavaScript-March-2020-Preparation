// Three Groups
// You are given an array of numbers.
// You task is to group the numbers by remainder of 3.
// Example:
// arr = {1, 2, 3, 4, 5, 6, 7}
// groups:
// 0 -> 3, 6
// 1 -> 1, 4, 7
// 2 -> 2, 5
const input = ['12 5 7 10 1 14'];
const print = this.print || console.log;
const gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);
const arr = gets().split(' ').map(Number);
let stringNoReminder = '';
let stringReminderOne = '';
let stringReminderTwo = '';
for (let i = 0; i < arr.length; i++) {
  if (arr[i] % 3 === 0) {
    stringNoReminder += arr[i] + ' ';
  } else if (arr[i] % 3 === 1) {
    stringReminderOne += arr[i] + ' ';
  } else stringReminderTwo += arr[i] + ' ';
}
print(stringNoReminder);
print(stringReminderOne);
print(stringReminderTwo);
