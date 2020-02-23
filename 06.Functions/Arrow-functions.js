//
// Arrow functions
// Arrow-functions.js

const materials = [
  'Hydrogen',
  'Helium',
  'Lithium',
  'Beryllium'
];

console.log(materials.map(material => material.length));
// expected output: Array [8, 6, 7, 9]



// Niki
// параметър е това което очаквам (той очаква да му се подаде)
// аргумент е това което съм дал

const sayHello = (name) => {
  console.log(name);
};

sayHello('Niki');
sayHello('Viki');
sayHello('Kiki');


const printFullName = (firstName, lastName) => {
  console.log(firstName, lastName);
};

printFullName('Niki', 'Neykov');
printFullName('Viki', 'Veykov');
printFullName('Kiki', 'Keykov');


const getFullName = (firstName, lastName) => {
  return `${firstName} ${lastName}`;
};

const myFirstName = 'Brendan';
const myLastName = 'Eich';

const fullName = getFullName(myFirstName, myLastName);

// fullName  е равно на резултата от извикването на функцията getFullName 

console.log(fullName);
// expected output: Brendan Eich

const sumTowNumbers = (numA, numB) => {
  return numA + numB;
};

const a = 5;
const b = 6;
const sum = sumTowNumbers(a, b);

console.log(sum);
// expected output: 11

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const arr2 = [];

for (let i = 0; i < arr.length; i++) {
  const currentNum = arr[i];
  arr2.push(currentNum * 2);
}

console.log(arr, arr2);

const arr3 = [];

// функционално :

const getNumbersMultipliedBy2 = (numbers) => {
  const newArr = [];

  for (let i = 0; i < numbers.length; i++) {
    const currentNum = numbers[i];
    newArr.push(currentNum * 2);
  }
  return newArr;
};

const arrF = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const arr22 = getNumbersMultipliedBy2(arrF);

console.log(arr22);

//

const arr111 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const calculate = (numA, numB, operation) => {

};
//

// const sumTwoNumbers111 = (a, b) => {
//   return a + b;
// }

// абсолютно еквивалентно на :
// но само ако имамем един ред в {}

const sumTwoNumbers111 = (a, b) => (a + b);

console.log(sumTwoNumbers111(2, 3));

//

const arr222 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const calculate222 = (numA, numB, operation222) => {
  return operation222(numA, numB);
};

const sum222 = calculate222(a, b, sumTwoNumbers111);
console.log(sum222);

/// стана мазаляк ще го гледам пак!
