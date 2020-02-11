const input = ['2 1 3 1 2 1 7'];
const print = this.print || console.log;
const gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

const arrN = gets().split(' ');
let isWave = true;

// print(arrN); // [  '2', '1', '2', '1', '2', '1','2']
// Compare numbers!
// Last two 'i+2' could be reached only for 'arrN.length -2'
// step 'i += 2' >> otherwise we compare every next.

for (let i = 0; i < arrN.length - 2; i += 2) {
  if (Number(arrN[i]) > Number(arrN[i + 1]) && Number(arrN[i + 1]) < Number(arrN[i + 2])) {
    isWave = true;
  } else {
    isWave = false;
  }
}

if (isWave === true) {
  print('Yes');
} else {
  print('No');
}
