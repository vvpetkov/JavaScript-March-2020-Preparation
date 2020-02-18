const input = [
  'set 2',
  'print',
  'front-add 1',
  'print',
  'back-add 2',
  'print',
  'front-remove',
  'print',
  'set 4',
  'print',
  'print',
  'front-add 1',
  'print',
  'back-add 3',
  'print',
  'reverse',
  'print',
  'end'
];
const gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);
const print = this.print || console.log;

let num = '';

let inputLine = gets().split(' ');
let command = inputLine[0];
let value = inputLine[1];

while (command !== 'end') {
  if (command === 'print') {
    print(num);
  } else if (command === 'set') {
    num = value;
  } else if (command === 'front-add') {
    num = value + num;
  } else if (command === 'front-remove') {
    num = num.slice(1);
  } else if (command === 'back-add') {
    num += value;
  } else if (command === 'back-remove') {
    num = num.slice(0, num.length - 1);
  } else if (command === 'reverse') {
    num = num.split('').reverse().join('');
  }

  inputLine = gets().split(' ');
  command = inputLine[0];
  value = inputLine[1];
}
