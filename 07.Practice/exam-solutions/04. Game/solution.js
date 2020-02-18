const input = ['185'];
const gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);
const print = this.print || console.log;

const n = gets();

const a = +n[0];
const b = +n[1];
const c = +n[2];

const result = Math.max(
  (a + b + c),
  (a * b * c),
  (a + b * c),
  (a * b + c)
);

print(result);
