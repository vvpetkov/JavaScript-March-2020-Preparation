// Problem 10. Randomize the Numbers 1…N
// Write a program that reads a number n and prints the numbers 1, 2, …, n in random order.
const input = ['10'];
const print = this.print || console.log;
const gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);
const n = +gets();
const straightNumberArray = [];
for (let i = 1; i <= n; i++) {
  straightNumberArray.push(i);
}
let currentIndex = straightNumberArray.length;
while (currentIndex !== 0) {
  // Pick a remaining element
  const randomIndex = Math.floor(Math.random() * currentIndex);
  currentIndex--;
  // And swap it with the current element
  const temporaryValue = straightNumberArray[currentIndex];
  straightNumberArray[currentIndex] = straightNumberArray[randomIndex];
  straightNumberArray[randomIndex] = temporaryValue;
}
let random = '';
for (let i = 0; i < straightNumberArray.length; i++) {
  random += straightNumberArray[i] + ' ';
}
print(random);
