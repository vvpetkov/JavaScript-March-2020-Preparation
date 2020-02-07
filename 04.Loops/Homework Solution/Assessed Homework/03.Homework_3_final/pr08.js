const input = ['5', '2', '1', '1', '6', '3'];
const print = this.print || console.log;
const gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

const numLenght = +gets();
let num = 0;
let oddProductValue = 1;
let evenProductValue = 1;

for (let index = 1; index <= numLenght; index++) {
  num = +gets();
  oddProductValue *= num;
  if (index === numLenght) {
    break;
  } else {
    num = +gets();
    evenProductValue *= num;
    index++;
  }
}

if (oddProductValue === evenProductValue) {
  print(`yes ${evenProductValue}`);
} else {
  print(`no ${oddProductValue} ${evenProductValue}`);
}