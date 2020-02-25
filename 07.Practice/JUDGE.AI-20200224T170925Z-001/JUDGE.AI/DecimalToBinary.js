// Convert Decimal Numbers to Binary
const input = ['236476736'];
const print = this.print || console.log;
const gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);
let decimal = +gets();
let binary = '';
do {
  const decimalDigit = decimal % 2;
  binary += decimalDigit % 2;
  decimal = Math.floor(decimal / 2);
} while (decimal >= 1); // делим на 2 докато не остане 0 или 1 накрая
print(binary.split('').reverse().join('')); // обръщаме наопаки, тъй като първата цифра, която получаваме, трябва реално да е последна
