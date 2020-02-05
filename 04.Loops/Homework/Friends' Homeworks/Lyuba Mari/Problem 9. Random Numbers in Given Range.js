let input = ['10', '10', '15'];
let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

// (min != max) 

let n = +gets();
let min = +gets();
let max = +gets();

for (let i = 0; i <= n; i++) {
  print(Math.floor(Math.random() * (max-min +1)) + min);
}
