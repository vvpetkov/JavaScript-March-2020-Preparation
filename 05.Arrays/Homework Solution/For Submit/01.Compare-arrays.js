// Prep/Arrays/Homework Solution
// Problem 1. Compare arrays
// 01.Compare-arrays.js


const input = [
  '3',
  '1',
  '2',
  '3',
  '1',
  '2',
  '3',
];
const print = this.print || console.log;
const gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

let isEqual = true;
// Махам n от инпута да не ми пречи
let n = input.shift(); // Махам n от инпута и я записвам в променлива (мутирам инпута)
// print(n); // 3    
// print(input); // ["1", "2", "3", "1", "2", "3"] (инпута е вече мутиран)
// въртя половината индекси на масива
for (let i = 0; i < input.length / 2; i++) {
  // сравнявам от начало до среда срещу от сред до края ,
  // като ползвам различно въртене на индекса , чрез i
  if (input[i] !== input[input.length / 2 + i ]) { // сравнява 1 със 4 елемент ,2 със 5 и т.н.
    isEqual = false;
    break;
  }

}

if (isEqual){
  print('Equal');
} else {
  print('Not equal');
}
