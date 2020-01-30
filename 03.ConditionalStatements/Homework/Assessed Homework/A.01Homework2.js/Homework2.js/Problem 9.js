let input = ['1'];
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);
let print = this.print || console.log;

let a = gets();

if (Number.isInteger(a)) {
  print(a + 1);
} else if (typeof a === 'string') {
  print(`${a}*`);
}
