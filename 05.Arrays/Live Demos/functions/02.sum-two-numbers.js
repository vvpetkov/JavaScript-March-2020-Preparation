const sumTwoNumbers = (numA, numB) => {
  return numA + numB;
};

// const sumTwoNumbers = (numA, numB) => numA + numB; // we can skip the return

const a = 5;
const b = 6;
const sumAB = sumTwoNumbers(a, b);
console.log(sumAB); // 11

const c = 1;
const d = 3;
const sumCD = sumTwoNumbers(c, d);
console.log(sumCD); // 4
