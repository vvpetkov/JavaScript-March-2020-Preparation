const input = [
    '3',
];

const print = this.print || console.log;
const gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

let card = gets();

switch (card) {
  case "2":
    card = 2;
    break;
  case "3":
    card = 3;
    break;
  case "4":
    card = 4;
    break;
  case "5":
    card = 5;
    break;
  case "6":
    card = 6;
    break;
  case "7":
    card = 7;
    break;
  case "8":
    card = 8;
    break;
  case "9":
    card = 9;
    break;
  case "10":
    card = 10;
    break;
  case "J":
    card = 11;
    break;
  case "Q":
    card = 12;
    break;
  case "K":
    card = 13;
    break;
  case "A":
    card = 14;
    break;
}
for (let i = 2; i <= card; i++) {
  if (i <= 10) {
    print(`${i} of spades, ${i} of clubs, ${i} of hearts, ${i} of diamonds`);
  } else if (i === 11) {
    print("J of spades, J of clubs, J of hearts, J of diamonds");
  } else if (i === 12) {
    print("Q of spades, Q of clubs, Q of hearts, Q of diamonds");
  } else if (i === 13) {
    print("K of spades, K of clubs, K of hearts, K of diamonds");
  } else if (i === 14) {
    print("A of spades, A of clubs, A of hearts, A of diamonds");
  }
}