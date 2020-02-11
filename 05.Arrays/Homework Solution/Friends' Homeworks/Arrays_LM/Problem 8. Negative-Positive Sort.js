const input = ['7 2 -2 1 -5 4 5 -3 1'];
const print = this.print || console.log;
const gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

const arrN = gets().split(' ');
const arrNPossitive = [];
const arrNNegative = [];

// print(arrN); // [ '7', '2',  '-2', '1', '-5', '4', '5', '-3', '1']
// Create 2 new arrays collecting + & - values.

for (let i = 0; i < arrN.length; i++) {
  if (Number(arrN[i]) >= 0) {
    arrNPossitive.push(arrN[i]);
  } else {
    arrNNegative.push(arrN[i]);
  }
}

// print(arrNPossitive, arrNNegative); // [ '7', '2', '1', '4', '5', '1' ] [ '-2', '-5', '-3' ]
// And concat both of them.

print(arrNNegative.toString() + ',' + arrNPossitive.toString());
