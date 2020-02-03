// Problem 4. Print a Deck of 52 Cards
// 04.Print-a-Deck-of-52-Cards.js

const input = [''];
const print = this.print || console.log;
const gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

print('suit symbols: clubs (♣), diamonds (♦), hearts (♥) and spades  (♠)')
let j=''
for (let i = 2; i <= 10; i++){
  for (j = 1; j<=4; j++)
  print(`i = ${i} j = ${j}`);
  print(`${i} of `)

}