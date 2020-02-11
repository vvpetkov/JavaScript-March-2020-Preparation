const input = ['3 4 5 3 4 5'];
const print = this.print || console.log;
const gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

const arrN = gets().split(' ');
let isSymmetric = true;

// print(arrN); // [  '1', '2', '3', '4', '4', '3', '2', '1']

for (let i = 0; i < arrN.length; i++) {
  for (let j = arrN.length - 1; j >= 0; j--) {
    if (arrN[i] === arrN[j]) {
      isSymmetric = true;
    } else {
      isSymmetric = false;
    }
  }
}

if (isSymmetric === true) {
  print('Yes');
} else {
  print('No');
}
