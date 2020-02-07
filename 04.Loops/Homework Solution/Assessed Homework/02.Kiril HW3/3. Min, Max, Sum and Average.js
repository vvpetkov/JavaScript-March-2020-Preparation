let input = ["2", "-1", "4", "1"];
let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

const n = +gets();
let min = Number.MAX_SAFE_INTEGER;
let max = Number.MIN_SAFE_INTEGER;
let sum = n;
for (let i = 1; i <= n; i++) {
  const x = +gets();
  x < min ? min = x : min = min + 0;
  max = Math.max(max, x);
  sum += x;
}
const avg = sum / (n + 1);
print(`min=${min}`);
print(`max=${max}`);
print(`sum=${sum}`);
print(`avg=${avg.toFixed(2)}`);
