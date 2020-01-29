// 05.Mentor.TheBiggestOf3Numbers.js

const input = ['43', '43', '42'];

const print = this.print || console.log;
const gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

const a = +gets();
const b = +gets();
const c = +gets();

let biggest = Math.max(a, b, c);
print(biggest);