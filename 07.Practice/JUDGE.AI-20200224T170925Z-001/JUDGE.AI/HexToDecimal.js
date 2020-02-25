// Hex to Decimal
// Using loops write a program that converts a hexadecimal integer number to its decimal form.
const input = ['4ED528CBB4'];
const print = this.print || console.log;
const gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);
const hexaDecimal = gets().split('').reverse();
// print(hexaDecimal);
let decimal = 0;
for (let i = 0; i < hexaDecimal.length; i++) {
  switch (hexaDecimal[i]) {
    case 'A': hexaDecimal[i] = 10; break;
    case 'B': hexaDecimal[i] = 11; break;
    case 'C': hexaDecimal[i] = 12; break;
    case 'D': hexaDecimal[i] = 13; break;
    case 'E': hexaDecimal[i] = 14; break;
    case 'F': hexaDecimal[i] = 15; break;
    default: hexaDecimal[i] = Number(hexaDecimal[i]); break;
  }
  decimal += hexaDecimal[i] * Math.pow(16, i);
  // използваме, че числото в 10-ична с-ма е (16^0)*(цифра на 1-ци) + (16^1)*(цифра на 10-ци) (16^2)*(цифра на 100-тици) ...
  // обърнали сме масива hexaDecimal наобратно, за да може да се възползваме от горната формула
}
print(decimal);
