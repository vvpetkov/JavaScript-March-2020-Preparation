const input = ['3', '2', '2', '4', '1', '2', '4'];
const print = this.print || console.log;
const gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

const N = +gets();
const arr1 = [];
const arr2 = [];
let isEqual = true;

for (let i = 0; i < N; i++) {
  arr1.push(+gets());
}
for (let i = 0; i < N; i++) {
  arr2.push(+gets());
}

for (let i = 0; i < N; i++) {
  if (arr1[i] === arr2[i]) {
    isEqual = true;
  } else {
    isEqual = false;
    break;
  }
}

if (isEqual === true) {
  print('Equal');
} else {
  print('Not equal');
}
