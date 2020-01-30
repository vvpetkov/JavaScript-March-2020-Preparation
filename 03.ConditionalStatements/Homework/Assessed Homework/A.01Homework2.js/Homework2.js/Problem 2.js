let input = ['-1'];
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);
let print = this.print || console.log;

let a = +gets();

if (a >= 1 && a <= 3) {
  print(a * 10);
} else if (a >= 4 && a <= 6) {
  print(a * 100);
} else if (a >= 7 && a <= 9) {
  print(a * 1000);
} else if (a === 0 || a > 9) {
  print('invalid score');
} else {
  print('invalid score')
}
