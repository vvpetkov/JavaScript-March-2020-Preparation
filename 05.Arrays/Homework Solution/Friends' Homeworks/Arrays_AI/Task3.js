// Problem 3. Maximum Sequence
// Write a program that finds the length of the maximum sequence of equal elements in an array of integers.
const input = ['1', '11', '11', '11', '12', '15', '15', '14'];
const print = this.print || console.log;
const gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);
const arrayMax = [];
let maxCounter = 0; // създаваме 2 брояча, както и 2 елемента - единият брояч е максималният такъв, при елементите правим сравнение месжу това, което е минало, това, което остава да се провери от целия масив
for (let i = 0; i <= input.length - 1; i++) {
  arrayMax.push(+gets());
}
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
