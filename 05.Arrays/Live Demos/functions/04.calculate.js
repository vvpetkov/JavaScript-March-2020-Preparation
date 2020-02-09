const calculate = (numA, numB, operation) => {
  return operation(numA, numB);
};

const sumTwoNumbers = (a, b) => {
  return a + b;
};

const subtractTwoNumbers = (a, b) => {
  return a - b;
};

const multiplyTwoNumbers = (a, b) => {
  return a * b;
};

const divideTwoNumbers = (a, b) => {
  return a / b;
};

const sum = calculate(5, 2, sumTwoNumbers);
console.log(sum); // 7

const subtraction = calculate(5, 2, subtractTwoNumbers);
console.log(subtraction); // 3

const multiplication = calculate(5, 2, multiplyTwoNumbers);
console.log(multiplication); // 10

const division = calculate(5, 2, divideTwoNumbers);
console.log(division); // 2.5
