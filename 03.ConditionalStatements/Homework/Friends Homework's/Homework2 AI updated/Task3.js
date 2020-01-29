// Problem 3. Check for a Play Card
// Classical play cards use the following signs to designate the card face: 2, 3, 4, 5, 6, 7, 8, 9, 10, J, Q, K and A.
// Write a program that reads a string and prints “yes” if it is a valid card sign or “no” otherwise.

const input = ['A'];
const print = this.print || console.log;
const gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);
const char = gets();
if (char === '2' || char === '3' || char === '4' || char === '5' || char === '6' || char === '7' || char === '8' || char === '9' || char === '10' || char === 'J' || char === 'Q' || char === 'K' || char === 'A') {
  print('yes');
} else print('no');
