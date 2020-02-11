const input = ['own', 'own'];
const print = this.print || console.log;
const gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

const str1 = gets();
const str2 = gets();
let isEqual = 0;

// print(arr1, arr2)
isEqual = str1.localeCompare(str2);

if (isEqual > 0) {
  print('Second');
} else if (isEqual < 0) {
  print('First');
} else {
  print('Equal');
}
