// Problem 8. Digit as Word
// Write a program that reads a digit (0-9), and depending on the input, shows the digit as a word (in English).
// *Print “not a digit” in case of invalid input. * Use a switch statement.

const input = ['hi'];
const print = this.print || console.log;
const gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);
const isDigit = +gets();
switch (isDigit) {
  case 0: print('zero'); break;
  case 1: print('one'); break;
  case 2: print('two'); break;
  case 3: print('three'); break;
  case 4: print('four'); break;
  case 5: print('five'); break;
  case 6: print('six'); break;
  case 7: print('seven'); break;
  case 8: print('eight'); break;
  case 9: print('nine'); break;
  default: print('not a digit');
}
