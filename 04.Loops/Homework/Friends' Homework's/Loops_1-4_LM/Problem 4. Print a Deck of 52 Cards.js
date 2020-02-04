const suits = ['spades', 'clubs', 'hearts', 'diamonds'];
const values = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];

for (let i = 0; i < suits.length; i++) {
  for (let j = 0; j < values.length; j++) {
    const val = values[j];
    switch (val) {
      case '2': console.log(`2 of ${suits[0]}, 2 of ${suits[1]}, 2 of ${suits[2]}, 2 of ${suits[3]}`); break;
      case '3': console.log(`3 of ${suits[0]}, 3 of ${suits[1]}, 3 of ${suits[2]}, 3 of ${suits[3]}`); break;
      case '4': console.log(`4 of ${suits[0]}, 4 of ${suits[1]}, 4 of ${suits[2]}, 4 of ${suits[3]}`); break;
      case '5': console.log(`5 of ${suits[0]}, 5 of ${suits[1]}, 5 of ${suits[2]}, 5 of ${suits[3]}`); break;
      case '6': console.log(`6 of ${suits[0]}, 6 of ${suits[1]}, 6 of ${suits[2]}, 6 of ${suits[3]}`); break;
      case '7': console.log(`7 of ${suits[0]}, 7 of ${suits[1]}, 7 of ${suits[2]}, 7 of ${suits[3]}`); break;
      case '8': console.log(`8 of ${suits[0]}, 8 of ${suits[1]}, 8 of ${suits[2]}, 8 of ${suits[3]}`); break;
      case '9': console.log(`9 of ${suits[0]}, 9 of ${suits[1]}, 9 of ${suits[2]}, 9 of ${suits[3]}`); break;
      case '10': console.log(`10 of ${suits[0]}, 10 of ${suits[1]}, 10 of ${suits[2]}, 10 of ${suits[3]}`); break;
      case 'J': console.log(`J of ${suits[0]}, J of ${suits[1]}, J of ${suits[2]}, J of ${suits[3]}`); break;
      case 'Q': console.log(`Q of ${suits[0]}, Q of ${suits[1]}, Q of ${suits[2]}, Q of ${suits[3]}`); break;
      case 'K': console.log(`K of ${suits[0]}, K of ${suits[1]}, K of ${suits[2]}, K of ${suits[3]}`); break;
      case 'A': console.log(`A of ${suits[0]}, A of ${suits[1]}, A of ${suits[2]}, A of ${suits[3]}`); break;
      default: console.log('Not a playing card!'); break;
    }
  } break;
}
