const input = ['100000'];
const print = this.print || console.log;
const gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

const n = +gets();
let factorial = BigInt(1);
let fArr = [];

if (n <= 100000) {
  for (let i = BigInt(1); i <= n; i++) {
    factorial *= i;
  }
}

fArr = (factorial.toString()).split(''); // print(fArr) // ['3', '6', '2', '8', '8', '0', '0']
let count = 0;

for (let i = fArr.length - 1; i >= 0; i--) {
  if (fArr[i] === '0') {
    count += 1;
  } else {
    break;
  }
}

print(count);
