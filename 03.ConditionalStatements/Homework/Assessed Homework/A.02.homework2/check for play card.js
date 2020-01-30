const input = ['3'];

const print = this.print || console.log;
const gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

const card = gets();
if (card === '2' || card === '3' || card === '4' || card === '5' || card === '6' || card === '7' || card === '8' || card === '9' || card === '10' || card === 'J' || card === 'Q' || card === 'K' || card === 'A') {
  print('yes');
} else {
  print('no');
}
