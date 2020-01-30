const input = ['-5', '+2', '-2'];
const gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);
const print = this.print || console.log;

const firstNumber = Math.sign(+gets());
const secondNumber = Math.sign(+gets());
const thrirdNumber = Math.sign(+gets());

if (firstNumber === 0 || secondNumber === 0 || thrirdNumber === 0) {
  print('0');
} else if ((firstNumber === 1 && secondNumber === 1 && thrirdNumber === 1) ||
  (firstNumber === 1 && secondNumber !== 1 && thrirdNumber !== 1) ||
  (firstNumber !== 1 && secondNumber === 1 && thrirdNumber !== 1) ||
  (firstNumber !== 1 && secondNumber !== 1 && thrirdNumber === 1)) {
  print('+');
} else {
  print('-');
}