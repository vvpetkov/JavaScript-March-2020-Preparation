const input = ['3'];
const print = this.print || console.log;
const gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

const n = +gets();
const nArr = [];

for (let i = 0; i < n; i++) {
  nArr[i] = i + 1;
}
print(nArr.toString().replace(/,/g, ' '));

// let num = '';
// for (let i = 1; i <= n; i++) {
//   num += `${i} `;
// }

// console.log(num);
