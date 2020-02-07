let input = ["5", "-4"];
let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

const n = Number(gets());
const x = Number(gets());
let sum = 1;
let fact = 1;

for (let i = 1; i <= n; i++) {
  fact *= i;
  sum += fact / Math.pow(x, i);
}
print(sum.toFixed(5));
