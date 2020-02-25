const input = ['135', '357', '791', '357', '913', '579', '135'];
const print = this.print || console.log;
const gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);
const arrayOfNumbers = [];
for (let i = 0; i < 7; i++) {
  arrayOfNumbers.push(gets());
  const hundreds = Number(arrayOfNumbers[i][0]);
  const tenths = Number(arrayOfNumbers[i][1]);
  const units = Number(arrayOfNumbers[i][2]);
  if ((Math.max(Math.abs(hundreds - tenths), Math.abs(hundreds - units), Math.abs(tenths - units))) <= ((hundreds + tenths + units) % 10)) {
    continue;
  } else print(arrayOfNumbers[i]);
}
