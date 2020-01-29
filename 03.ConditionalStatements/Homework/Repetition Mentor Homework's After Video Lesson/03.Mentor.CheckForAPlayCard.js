// 03.Mentor.CheckForAPlayCard.js

const input = ['2'];

const print = this.print || console.log;
const gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

// 2, 3, 4, 5, 6, 7, 8, 9, 10, J, Q, K and A

let character = gets();

let isValidCardSign =
  (character >= 2 && character <= 10) ||
  (character === 'J') ||
  (character === 'Q') ||
  (character === 'K') ||
  (character === 'A');

print(isValidCardSign ? 'yes' : 'no');
