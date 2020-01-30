let input = ['1'];
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);
let print = this.print || console.log;

let a = gets();

if (a >= 2 && a <= 10) { 
  
  print('yes');

} else if (a === ('K') || a === ('Q') || a === ('J') || a === ('A')) {
  print('yes');
} else {
  print('no');
}
