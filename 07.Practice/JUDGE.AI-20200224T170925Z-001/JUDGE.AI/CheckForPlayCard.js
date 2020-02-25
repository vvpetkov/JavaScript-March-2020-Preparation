// Check for Play Card
// Classical play cards use the following signs to designate the card face: 2, 3, 4, 5, 6, 7, 8, 9, 10, J, Q, K and A.
// Write a program that enters a string and prints "yes CONTENT_OF_STRING" if it is a valid card sign or
// "no CONTENT_OF_STRING" otherwise.
const input = ['q'];
const print = this.print || console.log;
const gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);
const card = gets();
if ((card === '2') || (card === '3') || (card === '4') || (card === '5') || (card === '6') || (card === '7') || (card === '8') || (card === '9') || (card === '10') || (card === 'J') || (card === 'Q') || (card === 'K') || (card === 'A')) {
  print(`yes ${card}`);
} else print(`no ${card}`);
