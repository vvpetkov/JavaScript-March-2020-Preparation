const input = ['10'];
const gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);
const print = this.print || console.log;

const boundary = +gets();
let sequenceArray = [getRandomIntInclusive(1, boundary)];

for (let index = 0; index < boundary - 1;) {
  let randomNumber = getRandomIntInclusive(1, boundary);
  if (sequenceArray.every(element => element != randomNumber)) {
    sequenceArray.push(randomNumber);
    index++;
  }
  else {
    continue;
  }
}

let sequenceString = '';
for (let i = 0; i < sequenceArray.length; i++) {
  sequenceString += `${sequenceArray[i]} `;
}

print(sequenceString);

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; // The maximum is inclusive and the minimum is inclusive
}


// const input = ['10'];
// const gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);
// const print = this.print || console.log;

// const boundary = +gets();
// let sequence = '';

// function getRandomIntInclusive (min, max) {
//   min = Math.ceil(min);
//   max = Math.floor(max);
//   return Math.floor(Math.random() * (max - min + 1)) + min; // The maximum is inclusive and the minimum is inclusive
// }

// let index = 0;
// let number = 0;
// let randomNumber;
// while (index <= boundary) {
//   randomNumber = getRandomIntInclusive(1, boundary);
//   if (randomNumber !== number) {
//     number = randomNumber;
//     sequence += `${number} `;
//     index++;
//   }
// }
// print(sequence);
