let input = ["5", "13.5", "13.5", "1", "7", "8"];
let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

const n = Number(gets());
for (let i = 0; i < n; i++) {
  let row = "";
  for (let k = i + 1; k < n + i + 1; k++) {
    row += `${k} `;
  }
  print(row);
}

// let x = +gets();
// for (let i = 0; i < x; i++) {
//   let sum = 0;
//   let res = "";
//   for (let j = 1; j <= x; j++) {
//     sum = i + j;
//     res += sum + " ";
//   }
//   print(res);
// }
