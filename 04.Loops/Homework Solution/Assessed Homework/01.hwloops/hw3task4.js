let input = ['K'];
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);
let print = this.print || console.log;

let deck = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
let card = gets();
let index = 0;

do{
  let face  = deck[index];
  print(`${face} of spades, ${face} of clubs, ${face} of hearts, ${face} of diamonds`);
}while(deck[index++] !== card);