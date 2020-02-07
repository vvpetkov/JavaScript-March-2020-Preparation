const input = ['6', '1', '49'];
const print = this.print || console.log;
const gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

const n = +gets();
const min = +gets();
const max = +gets();
let sequence = '';

function getRandomIntInclusive (min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; // The maximum is inclusive and the minimum is inclusive
}

for (let index = 1; index <= n; index++) {
  sequence += `${getRandomIntInclusive(min, max)} `;
}

print(sequence);