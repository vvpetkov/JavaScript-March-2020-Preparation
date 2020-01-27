const logicalOrA = true || true || true || true || false;
console.log(logicalOrA); // false

const logicalOrB = true || true || false || true || true;
console.log(logicalOrB); // false

const logicalOrC = false || true || true || true || true;
console.log(logicalOrC); // false

const logicalOrD = true || true || true || true || true;
console.log(logicalOrD); // true

const logicalOrE = false || false || false || false || false;
console.log(logicalOrE); // false
