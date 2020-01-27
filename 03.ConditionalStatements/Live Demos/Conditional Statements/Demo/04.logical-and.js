const logicalAndA = true && true && true && true && false;
console.log(logicalAndA); // false

const logicalAndB = true && true && false && true && true;
console.log(logicalAndB); // false

const logicalAndC = false && true && true && true && true;
console.log(logicalAndC); // false

const logicalAndD = true && true && true && true && true;
console.log(logicalAndD); // true
