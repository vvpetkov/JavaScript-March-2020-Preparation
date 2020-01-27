// 03.CheckForAPlayCard.js
const input = ['Q'];

const print = this.print || console.log;
const gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

const char = gets();
let ValidCardSing = '';

if (char === '2' || char === '3' || char === '4' || char === '5' || char === '6' || char === '7' || char === '8' || char === '9' || char === '10' || char === 'J' || char === 'Q' || char === 'K' || char === 'A') {
  ValidCardSing = 'yes';
} else {
  ValidCardSing = 'no';
}
print(ValidCardSing);
