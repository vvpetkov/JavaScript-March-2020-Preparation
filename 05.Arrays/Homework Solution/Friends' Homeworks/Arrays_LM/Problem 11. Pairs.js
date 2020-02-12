const input = ['6', '1 2 3 4 3 6 5 8 3 9'];
const print = this.print || console.log;
const gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

const nSum = +gets();
const arrSum = gets().split(' ');

// print(nSum); // 6
// print(arrSum); // ['1', '2', '3', '4', '3', '6', '5', '8', '3', '9']
// Reduce the elements - remove those who are more than nSum (6)

const arrSumSorted = arrSum.slice().sort(); // print(arrSumSorted); // ['1', '2', '3', '3', '3', '4', '5', '6', '8', '9']
for (var i = arrSumSorted.length - 1; i >= 0; i--) {
  if (arrSumSorted[i] > nSum) {
    arrSumSorted.splice(i, 1); // print(arrSumSorted); // ['1', '2', '3', '3', '3', '4', '5', '6']
  }
}

const arrNReduced = [];
for (let i = 0; i < arrSumSorted.length; i++) {
  for (let j = 0; j < arrSumSorted.length - i - 1; j++) {
    if ((Number(arrSumSorted[i]) + Number(arrSumSorted[j])) === nSum) {
      arrNReduced.push(arrSumSorted[i], arrSumSorted[j]);
    }
  }
}

for (let i = 0; i < arrNReduced.length / 2; i++) {
  arrNReduced.pop(arrNReduced[i]);
}

// print(arrNReduced); // [ '1', '5', '2', '4', '3', '3', '3', '3',  '3', '3', '3', '3', '3']

for (let i = 0; i < arrNReduced.length - 1; i += 2) {
  print(arrNReduced[i] + ',' + arrNReduced[i + 1]);
}
