// Arrays (Judge) Reverse Number (Vld)
// 02.Reverse-Number.js

const input = ['123.45']; 
const print = this.print || console.log;
const gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

// The solution starts from here

const reversedNum = gets()
// да ги превърнем (раздробим) в масив от символи
  .split('')  // сепар. е празен стринг, дели елем.  по "нищо = празен стринг"
  .reverse()  // функция която обръща стринга огледално
  .join('')  // ел. на масив към стринг със залепяне по сепаратор
print(reversedNum);
