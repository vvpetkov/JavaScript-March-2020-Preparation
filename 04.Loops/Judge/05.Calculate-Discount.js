// 05.Calculate-Discount.js


const input = ['4', '9.99', '19.99', '29.99', '39.99'];
const print = this.print || console.log;
const gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

const n = +gets();

for (let i = 1; i <= n; i++) {
  const currentPrice = +gets();
  discount = 0.65; // 65% off
  discountLev = currentPrice * discount;
  promoPrice = currentPrice - discountLev;

  print(Number(Math.round(promoPrice + 'e+2') + 'e-2').toFixed(2));
}
