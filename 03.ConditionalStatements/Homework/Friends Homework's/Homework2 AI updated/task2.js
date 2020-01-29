// Problem 2. Bonus Score
// Write a program that applies bonus score to given score in the range [1…9] by the following rules:
//* If the score is between 1 and 3, the program multiplies it by 10.
//* If the score is between 4 and 6, the program multiplies it by 100.
//* If the score is between 7 and 9, the program multiplies it by 1000.
//* If the score is 0 or more than 9, the program prints “invalid score”.

const input = ['4'];
const print = this.print || console.log;
const gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);
const score = +gets();
if (score >= 1 && score <= 3) {
  const result10 = score * 10;
  print(result10);
} else if (score >= 4 && score <= 6) {
  const result100 = score * 100;
  print(result100);
} else if (score >= 7 && score <= 9) {
  const result1000 = score * 1000;
  print(result1000);
} else print('invalid score');
