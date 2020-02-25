// Allocate array
// Description
// Write a program that allocates array of N integers, initializes each element by its index multiplied by 5
// and the prints the obtained array on the console.
const input = ['7'];
const print = this.print || console.log;
const gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);
const numberOfElements = +gets();
const allocateArray = [0];
// print(allocateArray[0]);
for (let i = 1; i <= numberOfElements - 1; i++) {
  allocateArray.push(allocateArray[0] + 5 * i);
  print(allocateArray[i]);
}
// const input = ['7']; // решение на Влади Дулев
// const print = this.print || console.log;
// const gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);
// const number = +gets();
// const arr = [...Array(number)].map((_, i) => i).map((el) => el * 5);
// let multipliedBy5 = arr.map((el) => {
// return el * 5;
// });
// print(arr.join('\n'));
