let input = [
  '10',
];

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

let n = +gets();

for (let row = 2; row <= n; row++) {
  let line = '';
  for (let column = 1; column <= row; column++) {
    line = `${row} of ♣, ${row} of ♦, ${row} of ♥, ${row} of ♠ `;
  }
  console.log(line);
}

for (let row = 1; row <= 4; row++) {
  let line = '';
  let card = 'test';
  switch (row) {
    case 1: card = 'J'; break;
    case 2: card = 'Q'; break;
    case 3: card = 'K'; break;
    case 4: card = 'A'; break;
    default:
      break;
  }
  for (let col = 1; col <= 4; col++) {
    line = ` ${card} of ♣, ${card} of ♦, ${card} of ♥, ${card} of ♠ `;
  }
  print(line);
}