// let dirtyDishes = 5;
// let cleanedDishes = 0;
// let num = 3;

// while (dirtyDishes > 0) {
//   dirtyDishes--;
//   cleanedDishes++;

//   if (cleanedDishes === num) {
//     break;
//   }

//   console.log(`I have cleaned ${cleanedDishes} and ${dirtyDishes} are left!`);
// }

// console.log('Job ended!');

// let numbers = '';
// const n = 3;
// let i = 1;

// while (i <= n) {
//   numbers += `${i} `;
//   i++;
//   // console.log(numbers);
// }

// console.log(numbers);

// let numbers = '';
// const n = 3;

// for (let i = 1; i <= n; i++) {
//   for (let j = 1; j <= n; j++) {
//     numbers += `${i},`;
//   }
// }

// console.log(numbers.slice(0, numbers.length - 1));

// ---------- 2021

// while loops
// for loops // шугър на while
// break
// continue

// докато е условието вярно изпълнявай цикъла

let dirtyDishes = 5;
let cleanedDishes = 0;

while (dirtyDishes > 0) {
  // dirtyDishes = dirtyDishes - 1;
  dirtyDishes--;
  // cleanedDishes = cleanedDishes + 1;
  cleanedDishes++;
  console.log(`I have cleaned ${cleanedDishes} and ${dirtyDishes} are left!`);
}

console.log("Job ended!");

//

let numbers = "";
const n = 3;

for (let i = 1; i <= n; i++) {
  for (let j = 1; j <= n; j++) {
    numbers += `${i} `;
  }
}

console.log(numbers);

// continue
for (let i = 0; i < 10; i++) {
  if (i % 3 === 0) {
    continue;
  }
  console.log(i);
}
