const input = ['8 2 1 3 5 8 9 11 2 5'];
const print = this.print || console.log;
const gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

const arrN = gets().split(' ');
let isBiggest = 0;
let isSecondBiggest = 0;

for (let i = 0; i < arrN.length; i++) {
  if (Number(arrN[i]) > Number(arrN[i + 1]) || Number(arrN[i]) > isBiggest) {
    isBiggest = Number(arrN[i]);
  }
}
// print(isBiggest); // 11
// We need to remove the biggest number in order to make a new check for the next one.
// Use 'break' after the biggest id found, otherwise it will continue to search for another biggest and may remove it too.
// If we have many biggest with the same value, we need to remove only one!

for (let i = 0; i < arrN.length; i++) {
  if (Number(arrN[i]) === isBiggest) {
    arrN.splice(i, 1);
    break;
  }
}

for (let i = 0; i < arrN.length; i++) {
  if (Number(arrN[i]) > Number(arrN[i + 1]) || Number(arrN[i]) > isSecondBiggest) {
    isSecondBiggest = Number(arrN[i]);
  }
}

print(`${isBiggest} ${isSecondBiggest}`);
