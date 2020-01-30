const input = ['10'];

const print = this.print || console.log;
const gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

const a = gets();

if ((+a >= 2 && +a <= 10) || (a === 'J' || a === 'Q' || a === 'K' || a === 'A')) {
    print('yes');
} else {
    print('no');
}
