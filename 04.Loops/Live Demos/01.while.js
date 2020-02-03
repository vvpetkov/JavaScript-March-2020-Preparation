let dirtyDishes = 5;
let cleanedDishes = 0;
const num = 3;

while (dirtyDishes > 0) {
  dirtyDishes--;
  cleanedDishes++;

  // if (cleanedDishes === num) {
  //   break; // stops the while loop
  // }

  // if (cleanedDishes === num) {
  //   continue;  // jumps into the next iteration
  // }

  console.log(`I have cleaned ${cleanedDishes} and ${dirtyDishes} are left!`);
}

console.log('Job ended!');
