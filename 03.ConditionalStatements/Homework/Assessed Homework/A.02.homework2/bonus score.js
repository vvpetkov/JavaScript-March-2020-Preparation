const input = ['3'];

const print = this.print || console.log;
const gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

let score = +gets();

if (score >= 1 && score <= 3) {
  score *= 10;
  print(score);
} else if (score >= 4 && score <= 6) {
  score *= 100;
  print(score);
} else if (score >= 7 && score <= 9) {
  score *= 1000;
  print(score);
} else {
  print('invalid socre');
}
