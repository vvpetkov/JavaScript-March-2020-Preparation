const input = ['6 7 3 8 1 9 4 5 6 2 1 3'];
const print = this.print || console.log;
const gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

const arrN = gets().split(' ');
let countMax = 1;
let count = 1;
let arrNMax = [];

// print(arrN); // [ '6', '7', '3', '8', '1', '9', '4', '5', '6', '2', '1', '3']

for (let i = 0; i < arrN.length; i++) {
  if (arrN[i] < arrN[i + 1]) {
    count += 1;
    if (count > countMax) {
      countMax = count;
      arrNMax = [];
      arrNMax = arrN.splice(i - 1, countMax);
    }
  } else {
    count = 1;
    continue;
  }
}
print(arrNMax);
