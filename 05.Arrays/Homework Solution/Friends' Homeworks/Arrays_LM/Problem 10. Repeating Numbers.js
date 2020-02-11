const input = ['1 2 3 4 5 6 5 8 9'];
const print = this.print || console.log;
const gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

const arrN = gets().split(' ');
const arrNSorted = arrN.slice().sort();

// print(arrN); // [ '1', '2', '3', '4', '5', '6', '5', '8', '9' ]
// print(arrNSorted); // [ '1', '2', '3', '4', '5', '5', '6', '8', '9' ]

for (let i = 0; i < arrNSorted.length; i++) {
  if (arrNSorted[i] === arrNSorted[i + 1]) {
    print(arrNSorted[i]);
  }
}
