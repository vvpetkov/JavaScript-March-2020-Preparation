// My REPETITION from Videos
// repetition-video-vld.js


while (true) {
  console.log('Квартал Люлин')
  if (true) {
    console.log('blok 1')
  }

  if (true) {
    console.log('blok 2')
    break;
  }

}


let dirtyDishes = 8;
let cleanDishes = 0;
let num = 5;

while (dirtyDishes > 0) {
  dirtyDishes--;
  cleanDishes++;

  if (cleanDishes === num) {
    console.log('soak after 4');
    //continue;
    break;
  }

  console.log(`I have cleaned ${cleanDishes} and ${dirtyDishes} are left `)
}

console.log('Job ended!');

let numbers = '';
const n = 3;
let i = 1;

while (i <= n) {
  numbers += `${i} haha `;
  i++
}
console.log(numbers);
