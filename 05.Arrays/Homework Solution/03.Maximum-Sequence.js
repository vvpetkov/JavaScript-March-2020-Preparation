// Prep/Arrays/Homework Solution
// Problem 3. Maximum Sequence
// 03.Maximum-Sequence.js

const input = ['2', '1', '1', '2', '3', '3', '2', '2', '2', '1'];
const print = this.print || console.log;
const gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

// Да намерим дължината на максимално повтарящите се еднакви елементи 
// на цели числа в даден масив

// Да проверя дали елементите се повтарят и ако има да ги сложа в нов масив
// Защото при масива ще мога да видя, колко е дълъг и да намеря най-дългият масив =
// = на най-многото повтарящи се елементи един след друг 
// и на този масив трябва да принтирам дължината

let currentEl = [];
let maxSequence = [];

for (let i = 0; i < input.length; i++) {
  if (input[i] === input[i + 1]) {
    currentEl[i] = input[i];
  }
// Сложих, но те са всички повтарящи се!
// трябва от всички повтарящи да намеря най-много повтарящите се!
}

print(currentEl); 