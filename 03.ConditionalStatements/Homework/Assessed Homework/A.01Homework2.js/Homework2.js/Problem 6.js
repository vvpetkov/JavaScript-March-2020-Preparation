let input = ['-2', '-22', '1', '0', '1'];
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);
let print = this.print || console.log;

let a = +gets();
let b = +gets();
let c = +gets();
let d = +gets();
let e = +gets();

let biggestNumber = Math.max(a, b, c, d, e)
print(biggestNumber);