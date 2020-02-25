const input = ['186', '909', '782', '764', '882', '909', '511'];
const gets = this.gets || ((arr, index) => () => arr[index++]) (input, 0);
const print = this.print || console.log

let n = Number();
let helperArr = [];
let length = 7;
let sum = 0;
let firstNum = 0;
let secondNum = 0;
let thirdNum = 0;
let firstDiff = 0;
let secondDiff = 0;
let thirdDiff = 0;
let maxDiff = 0;

for (let i = 0; i < 7; i++) {
  n = +gets();
  
  firstNum += Math.abs(Math.floor((n / 100) % 10));
  secondNum += Math.abs(Math.floor((n / 10) % 10));
  thirdNum += Math.abs(Math.floor(n % 10));

  firstDiff += Math.abs(Math.floor(secondNum - firstNum));
  secondDiff += Math.abs(Math.floor(secondNum - thirdNum));
  thirdDiff += Math.abs(Math.floor(thirdNum - firstNum));
  sum += firstNum + secondNum + thirdNum;

  maxDiff += Math.max(firstDiff, secondDiff, thirdDiff);

  if (maxDiff > (sum % 10)) {
    print(n);
  }

  firstNum = 0;
  secondNum = 0;
  thirdNum = 0;
  firstDiff = 0;
  secondDiff = 0;
  thirdDiff = 0;
  sum = 0;
  maxDiff = 0;

}