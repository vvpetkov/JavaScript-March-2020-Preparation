let input = ["8", "3"];
let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

const n = +gets();
const k = +gets();
let factN = 1;
let factK = 1;

for (let i = 1; i <= n; i++) {
  factN *= i;
  if (i > k) {
    continue;
  }
  factK *= i;
}
print(factN / factK);
