// Arrays (Judge) Combine Lists (Vld)
// 03.Combine-Lists.js

const input = ['2,3,1', '5,2,3'];
const print = this.print || console.log;
const gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

// The solution starts from here

const listA = gets().split(',');  // [ '2', '3', '1' ] ​​​​​
const listB = gets().split(',');  // [ '5', '2', '3' ] ​​​​​

const combinedList = [];

// двата масива имат еднаква дължина, въртим по нея 
// и подаваме един след друг от двата масива елементи
// като ги записваме в нов масив

for (let i = 0; i < listA.length; i++) {
  combinedList.push(listA[i]);
  combinedList.push(listB[i]);
}

print(combinedList); // [ '2', '5', '3', '2', '1', '3' ] 
