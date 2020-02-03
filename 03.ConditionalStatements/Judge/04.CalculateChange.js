const input = ['0.76', '1'];
const print = this.print || console.log;
const gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

const price = +gets();
const paid = +gets();
let change = paid - price;

print(change);

if (change >= 1) {
  print(Math.floor(change) + ' x 1 lev');
  change = (change - Math.floor(change)).toFixed(2);
}
let changeStotinki = change * 100;

if (changeStotinki >= 50) {
print('1 x 50 stotinki')
changeStotinki = changeStotinki - 50;
}

if (changeStotinki >= 40) {
  print('2 x 20 stotinki')
changeStotinki = changeStotinki - 40;
}

if (changeStotinki >= 20) {
  print('1 x 20 stotinki')
changeStotinki = changeStotinki - 20;
}

if (changeStotinki >= 10) {
  print('1 x 10 stotinki')
changeStotinki = changeStotinki - 10;
}

if (changeStotinki >= 5) {
  print('1 x 5 stotinki')
changeStotinki = changeStotinki - 5;
}

if (changeStotinki >= 4) {
  print('2 x 2 stotinki')
  changeStotinki = changeStotinki - 4;
}

if (changeStotinki = 1) {
  print('1 x 1 stotinki')
  changeStotinki = changeStotinki - 1;
}