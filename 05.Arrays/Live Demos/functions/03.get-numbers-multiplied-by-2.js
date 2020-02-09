const getNumbersMultipliedBy2 = (numbers) => {
  const newArr = [];

  for (let i = 0; i < numbers.length; i++) {
    const currentNum = numbers[i];
    newArr.push(currentNum * 2);
  }

  return newArr;
};

const arr = [1, 2, 3, 4, 5];

const multipliedBy2 = getNumbersMultipliedBy2(arr);
console.log(multipliedBy2); // [ 2, 4, 6, 8, 10 ]
