// Функция map
// function-map.js


//  за да не въртим фор цикли

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const multipliedByTwo = arr.map((el) => el * 2);
console.log(multipliedByTwo);

// може и логика да вкараме 

const multipliedByTwo2 = arr.map((el) => {
  if (el === 5) {
    return 0;
  }
  return el;
});

console.log(multipliedByTwo2);

// правим нов масив и на мястото на старите данни правим нови

const arr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const testFunc = arr2.map((el, index) => 5);

console.log(testFunc);

//

const arr3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const testFunc3 = arr2.map((el, index) => index);

console.log(testFunc3);

//

const arr4 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const testFunc4 = arr2.map((el, index) => 'some str');

console.log(testFunc4);

// по-полезни неща

const str = '1,2,3,4,5,6,7,8,9,10';

const numbers = str.split(',').map((el) => +el).map((num) => num * 2);

console.log(numbers);
