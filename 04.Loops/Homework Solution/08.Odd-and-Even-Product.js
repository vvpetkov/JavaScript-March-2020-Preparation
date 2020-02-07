// Prep/Loops/Homeworks
// 08.Odd-and-Even-Product.js
// 1:10 video

const input = ["4", "3", "2", "5", "2"];
const print = this.print || console.log;
const gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

const n = +gets();
let oddProduct = 1;
let evenProduct = 1;
for (let i = 1; i <= n; i++) {
  let currentNum = +gets();
  if (i % 2 === 1) {
    oddProduct *= currentNum;
  } else {
    evenProduct *= currentNum;
  }
}

if (oddProduct === evenProduct) {
  print('yes');
  print(`product=${oddProduct}`);
} else {
  print('no');
  print(`odd_product=${oddProduct}`);
  print(`even_product=${evenProduct}`);
}