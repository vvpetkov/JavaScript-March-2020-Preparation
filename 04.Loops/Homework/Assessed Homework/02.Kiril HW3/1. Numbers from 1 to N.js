let input = ["5", "13.5", "13.5", "1", "7", "8"];
let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

const n = +gets();
let i = 1;
let result = "";

while (i <= n) {
  result += `${i} `;
  i++;
}

print(result);