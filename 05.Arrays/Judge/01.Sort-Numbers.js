// Arrays (Judge) Sort Numbers (Vld)
// 01.Sort-Numbers.js

const input = ['2, 3, 1, 5, 6']; // запетайка + спейс
const print = this.print || console.log;
const gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

// The solution starts from here

const sortedNumbers = gets()
  .split(', ') // от стринг го прави на масив с елементи по сепаратор (сепаратора е запетайка + спейс)
  .map((str) => +str) // измислям си една променлива (str) и .map върти през всички ел. на масива  и правя нещо с тях след =>
  .sort((a, b) => b - a) // низходяща сортираща функция виж си интелисенса ако я забравиш
  .join(', '); // от масив го прави на стринг залепени по даден сепаратор
print(sortedNumbers);
