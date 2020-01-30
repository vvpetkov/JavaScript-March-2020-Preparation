const input = ['Q'];
const print = this.print || console.log;
const gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

const character = gets();

if (character >=2 && character <= 10) {
   print('yes');
} else if (character === 'J' || character === 'Q' || character === 'K' || character === 'A') {
    print('yes');
} else {
    print('no')
}