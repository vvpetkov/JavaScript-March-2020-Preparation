// Write a program that reads a card sign(as a string) from the console and generates and prints all possible cards from a standard deck of 52 cards up to the card with the given sign(without the jokers). The cards should be printed using the classical notation (like 5 of spades, A of hearts, 9 of clubs; and K of diamonds).
// The card faces should start from 2 to A(10 is 10).
// Print each card face in its four possible suits: clubs, diamonds, hearts and spades.
// Input
// On the only line, you will receive the sign of the card to which, including, you should print the cards in the deck.
// Output
// The output should follow the format bellow(assume our input is 5):
// Copy
// 2 of spades, 2 of clubs, 2 of hearts, 2 of diamonds
// 3 of spades, 3 of clubs, 3 of hearts, 3 of diamonds
// ...
// 5 of spades, 5 of clubs, 5 of hearts, 5 of diamonds
const input = ['A'];
const gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);
const print = this.print || console.log;
const n = gets();
if ((Number(n) >= 2) && (Number(n) <= 10)) {
  for (let i = 2; i <= n; i++) {
    print(`${i} of spades, ${i} of clubs, ${i} of hearts, ${i} of diamonds`);
  }
} else if ((n === 'J') || (n === 'Q') || (n === 'K') || (n === 'A')) {
  for (let i = 2; i <= 10; i++) {
    print(`${i} of spades, ${i} of clubs, ${i} of hearts, ${i} of diamonds`);
  }
  switch (n) {
    case 'J':
      print('J of spades, J of clubs, J of hearts, J of diamonds'); break;
    case 'Q':
      print('J of spades, J of clubs, J of hearts, J of diamonds');
      print('Q of spades, Q of clubs, Q of hearts, Q of diamonds'); break;
    case 'K':
      print('J of spades, J of clubs, J of hearts, J of diamonds');
      print('Q of spades, Q of clubs, Q of hearts, Q of diamonds');
      print('K of spades, K of clubs, K of hearts, K of diamonds'); break;
    case 'A':
      print('J of spades, J of clubs, J of hearts, J of diamonds');
      print('Q of spades, Q of clubs, Q of hearts, Q of diamonds');
      print('K of spades, K of clubs, K of hearts, K of diamonds');
      print('A of spades, A of clubs, A of hearts, A of diamonds'); break;
  }
}
