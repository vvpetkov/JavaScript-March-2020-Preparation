// Prep/Loops/Judge/
// 07.Print-Deck-of-Cards.js

const input = ['16'];
const print = this.print || console.log;
const gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

const hand = +gets();

for (let row = 2; row <= hand; row++) {
  let line = '';
  let card = 'test';
  switch (row) {
    case 11: card = 'J'; break;
    case 12: card = 'Q'; break;
    case 13: card = 'K'; break;
    case 14: card = 'A'; break;
    default: card = row; break;
  }
  for (let col = 1; col <= 4; col++) {
    line = `${card} of spades, ${card} of clubs, ${card} of hearts, ${card} of diamonds `;
  }
  print(line);
}
