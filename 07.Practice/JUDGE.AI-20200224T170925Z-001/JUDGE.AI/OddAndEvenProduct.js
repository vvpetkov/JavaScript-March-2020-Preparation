const input = ['5', '4 3 2 5 2'];
const print = this.print || console.log;
const gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);
const n = +gets();
let oddProduct = 1;
let evenProduct = 1;
const numArr = gets().split(' ').map(Number);
for (let i = 0; i < n; i++) {
  const currentNum = numArr[i];
  if (i % 2 === 1) {
    oddProduct *= currentNum;
  } else {
    evenProduct *= currentNum;
  }
}
if (oddProduct === evenProduct) {
  print(`yes ${oddProduct}`);
} else {
  print(`no ${evenProduct} ${oddProduct}`);
}
