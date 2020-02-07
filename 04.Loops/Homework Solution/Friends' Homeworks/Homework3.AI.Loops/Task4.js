// Problem 4. Print a Deck of 52 Cards
// Write a program that generates and prints all possible cards from a standard deck of 52 cards (without the jokers).
// * The cards should be printed using the classical notation (like 5 of spades, A of hearts, 9 of clubs; and K of diamonds).
// * The card faces should start from 2 to A. * Print each card face in its four possible suits: clubs, diamonds, hearts and spades.
// * Use 2 nested for-loops and a switch-case statement.
// Note: You may use the suit symbols instead of text.
const input = ['A'];
const gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);
const print = this.print || console.log;
// const deckOfCards = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
// // const suits = ['♥', '♦', '♣', '♠'];
// const card = gets();
// let index = 0;
// do {
//   const face = deckOfCards[index];
//   print(`${face} ♠, ${face} ♣, ${face} ♥, ${face} ♦`);
// } while (deckOfCards[index++] !== card);
const n = gets();
if ((Number(n) >= 2) && (Number(n) <= 10)) {
  for (let i = 2; i <= n; i++) {
    print(`${i} ♠, ${i} ♣, ${i} ♥, ${i} ♦`);
  }
} else if ((n === 'J') || (n === 'Q') || (n === 'K') || (n === 'A')) {
  for (let i = 2; i <= 10; i++) {
    print(`${i} ♠, ${i} ♣, ${i} ♥, ${i} ♦`);
  }
  switch (n) {
    case 'J': print('J ♠, J ♣, J ♥, J ♦'); break;
    case 'Q':
      print('J ♠, J ♣, J ♥, J ♦');
      print('Q ♠, Q ♣, Q ♥, Q ♦'); break;
    case 'K':
      print('J ♠, J ♣, J ♥, J ♦');
      print('Q ♠, Q ♣, Q ♥, Q ♦');
      print('K ♠, K ♣, K ♥, K ♦'); break;
    case 'A':
      print('J ♠, J ♣, J ♥, J ♦');
      print('Q ♠, Q ♣, Q ♥, Q ♦');
      print('K ♠, K ♣, K ♥, K ♦');
      print('A ♠, A ♣, A ♥, A ♦'); break;
  }
}
