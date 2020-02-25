// Convert Decimal Numbers to HexaDecimal
const input = ['338583669684'];
const print = this.print || console.log;
const gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);
let decimal = +gets();
let hexaDecimal = '';
do {
  const decimalDigit = decimal % 16;
  switch (decimalDigit) {
    case 10: hexaDecimal += 'A'; break;
    case 11: hexaDecimal += 'B'; break;
    case 12: hexaDecimal += 'C'; break;
    case 13: hexaDecimal += 'D'; break;
    case 14: hexaDecimal += 'E'; break;
    case 15: hexaDecimal += 'F'; break;
    default: hexaDecimal += decimalDigit; break;
  }
  decimal = Math.floor(decimal / 16);
} while (decimal >= 1); // делим на 16 докато не остане число, по-голямо или равно на 1
print(hexaDecimal.split('').reverse().join('')); // обръщаме наопаки, тъй като първата цифра, която получаваме, трябва реално да е последна
