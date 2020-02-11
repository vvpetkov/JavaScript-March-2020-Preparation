const input = ['1 2 4 8 12 34 220 2000'];
const print = this.print || console.log;
const gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

const arrN = gets().split(' ');
let isSorted = true;

// Check: print(arrN); // [  '1',   '2',  '4',   '8',  '12',  '34',  '200', '2000']
// We need to remove one number to be checked - the last one (i < arrN.length - 1)
// because there is no next number to compare with and it will return to 'false'.
// The comparison should be between numbers, not strings! Transform arrN[i] into number.

for (let i = 0; i < arrN.length - 1; i++) {
  if (Number(arrN[i]) < Number(arrN[i + 1])) {
    isSorted = true;
  } else {
    isSorted = false;
  }
}

if (isSorted === true) {
  print('Yes');
} else {
  print('No');
}
