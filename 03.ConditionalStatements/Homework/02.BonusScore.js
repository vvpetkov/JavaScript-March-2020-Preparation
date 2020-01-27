// 02.BonusScore.js
const input = ['42'];

const print = this.print || console.log;
const gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

const score = +gets();

let result = 0;
if (score >= 1 && score <= 3) {
  result = score * 10;
} else if (score >= 4 && score <= 6) {
  result = score * 100;
} else if (score >= 7 && score <= 9) {
  result = score * 1000;
} else {
  result = 'invalid score';
}

print(result);
