const arr = [1, 2, 3];
const arr2 = [1, 2, 3];
console.log(arr === arr2); // false checks if the reference is the same (not the values)

const arr3 = arr; // making arr3 reference to be the same as the arr
console.log(arr === arr3); // true arr and arr3 have the same reference

const arrA = [1, 2, 3];
const arrB = [1, 2, 3];
let areEqual = true;

if (arrA.length === arrB.length) {
  for (let i = 0; i < arrA.length; i++) {
    if (arrA[i] !== arrB[i]) {
      areEqual = false;
      break;
    }
  }
} else {
  areEqual = false;
}

console.log(areEqual); // true (we have compared the values in the arrays)
