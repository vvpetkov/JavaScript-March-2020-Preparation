const input = ['4'];
const print = this.print || console.log;
const gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

const humanYears = +gets();
let dogYears;
if (humanYears <= 2) {
  dogYears = humanYears * 10;
} else {
  dogYears = ((humanYears - 2) * 4) + 20;
}

print(dogYears);
