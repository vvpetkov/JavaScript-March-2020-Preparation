// Prep/Loops/Repetition/
// 07.Print-Deck-of-Cards.js

const input = ['K'];
const print = this.print || console.log;
const gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

const deck = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
let card = gets();
let index = 0;

do {
  let face = deck[index];
  print(`${face} of spades, ${face} of clubs, ${face} of hearts, ${face} of diamonds `);
} while (deck[index++] !== card);
