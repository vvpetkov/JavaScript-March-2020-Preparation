let input = ['5', '2'];
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);
let print = this.print || console.log;

let a = +gets();
let b = +gets();

if (a > b) {
  print(`${b} ${a}`);
} 