const input = ['10'];
const print = this.print || console.log;
const gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

const n = +gets();
let nStr = '';

if (n > 0) {
  for (let i = 0; i <= n; i++) {
    if (i % 3 !== 0 && i % 7 !== 0) {
      nStr += `${i} `;
    }
  }
} print(nStr);

// const nArr = [];
// if (n > 0) {
//   for (let i = 0; i <= n; i++) {
//     if (i % 3 !== 0 && i % 7 !== 0) {
//       nArr.push(i);
//     }
//   }
// } print(nArr.toString().replace(/,/g, ' '));
