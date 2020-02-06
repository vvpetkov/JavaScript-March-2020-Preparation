// Prep/Loops/Judge/
// Repetition 1:10 video
// 10.Odd-and-Even-Product.js


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
  print(`yes${oddProduct}`);
} else {
  //print(`no ODD ${oddProduct} EVEN ${evenProduct}`);
  print(`no ${oddProduct} ${evenProduct}`);
}
