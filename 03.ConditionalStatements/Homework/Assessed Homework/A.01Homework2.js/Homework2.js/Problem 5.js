let input = ['-2', '-2', '1'];
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);
let print = this.print || console.log;

let a = +gets();
let b = +gets();
let c = +gets();

let biggestNumber = Math.max(a, b, c);
print(biggestNumber);
