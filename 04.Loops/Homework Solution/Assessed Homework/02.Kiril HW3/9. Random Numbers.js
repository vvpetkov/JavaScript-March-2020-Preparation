let input = ["10", "10", "15", "1", "7", "8"];
let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

const n = +gets();
const min = +gets();
const max = +gets();
let res = "";
function randomNumber (min, max) {
  return Math.random() * (max - min) + min;
}
for (let i = 1; i <= n; i++) {
  res += `${Math.round(randomNumber(min, max))} `;
}
print(res);
