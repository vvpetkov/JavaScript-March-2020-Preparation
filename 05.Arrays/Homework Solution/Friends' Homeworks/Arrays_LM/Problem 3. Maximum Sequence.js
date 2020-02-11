const input = ['2 1 1 2 3 3 3 3 3 2 2 2 1'];
const print = this.print || console.log;
const gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

const arrN = gets().split(' ');
let countMax = 1;
let count = 1;
// print(arrN);

for (let i = 0; i < arrN.length; i++) {
  if (arrN[i] === arrN[i + 1]) {
    count += 1;
    if (count > countMax) {
      countMax = count;
    }
  } else {
    count = 1;
    continue;
  }
}

print(countMax);
