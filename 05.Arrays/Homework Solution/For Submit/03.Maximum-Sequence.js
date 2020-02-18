// Prep/Arrays/Homework Solution
// Problem 3. Maximum Sequence
// 03.Maximum-Sequence.js
// Credits to AI

const input = ['2', '1', '1', '2', '3', '3', '2', '2', '2', '1'];
const print = this.print || console.log;
const gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

const arrayMax = [];

let maxCounter = 0;

for (let i = 0; i <= input.length - 1; i++) {
  arrayMax.push(+gets());
}

print(arrayMax); // ['2', '1', '1', '2', '3', '3', '2', '2', '2', '1']

for (let i = 0; i < arrayMax.length; i++) {
  let counter = 0;
  const elemToComp = arrayMax[i];
  for (let j = i; j < arrayMax.length; j++) {
    const elem = arrayMax[j];
    if (elem === elemToComp) {
      counter++;
    } else {
      break;
    }
  }
  if (counter >= maxCounter) {
    maxCounter = counter;
  }
}
print(maxCounter);