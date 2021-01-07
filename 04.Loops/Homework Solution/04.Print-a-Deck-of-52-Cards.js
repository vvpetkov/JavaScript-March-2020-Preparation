// Problem 4. Print a Deck of 52 Cards
/*
Write a program that generates and prints all possible cards from a standard deck of 52 cards (without the jokers). * The cards should be printed using the classical notation (like 5 of spades, A of hearts, 9 of clubs; and K of diamonds). * The card faces should start from 2 to A. * Print each card face in its four possible suits: clubs, diamonds, hearts and spades. * Use 2 nested for-loops and a switch-case statement.

Note: You may use the suit symbols instead of text.
*/
// 04.Print-a-Deck-of-52-Cards.js

const input = [''];
const print = this.print || console.log;
const gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

for (let row = 2; row <= 14; row++) {
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
    line = `${card} of ♣, ${card} of ♦, ${card} of ♥, ${card} of ♠ `;
  }
  print(line);
  
}
print('И много горд от себе си!');
print('2020 те чу!');