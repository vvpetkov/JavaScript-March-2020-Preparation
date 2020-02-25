// converting a given binary number to its decimal version
const input = ['110'];
const print = this.print || console.log;
const gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);
const binary = gets().split('').map(Number).reverse();
let decimal = 0;
for (let i = 0; i < binary.length; i++) {
  decimal += binary[i] * Math.pow(2, i);
  // използваме, че числото в 10-ична с-ма е (2^0)*(цифра на 1-ци) + (2^1)*(цифра на 10-ци) (2^2)*(цифра на 100-тици) ...
  // обърнали сме масива binary наобратно, за да може да се възползваме от горната формула
}
print(decimal);
