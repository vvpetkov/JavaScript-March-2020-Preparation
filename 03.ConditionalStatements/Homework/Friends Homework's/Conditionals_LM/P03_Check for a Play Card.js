var input = ['500'];
var print = this.print || console.log;
var gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

var cardN = gets();

if (cardN === '2' || cardN === '3' || cardN === '4' || cardN === '5' || cardN === '6' || cardN === '7' || cardN === '8' || cardN === '9' || cardN === '10' || cardN === 'J' || cardN === 'Q' || cardN === 'K' || cardN === 'A') {
  print('yes');
} else {
  print('no');
}
