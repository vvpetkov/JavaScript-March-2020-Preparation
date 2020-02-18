const input = [
  '4',
  '12',
  '23',
  '34',
  '45'
];
const gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);
const print = this.print || console.log;

const n = +gets();
const numbers = [];

for (let i = 0; i < n; i++) {
  numbers.push(gets());
}

const merged = [];
const squashed = [];

for (let i = 0; i < numbers.length - 1; i++) {
  const currentNum = numbers[i];
  const nextNum = numbers[i + 1];

  const mergedNum = currentNum[1] + nextNum[0];
  merged.push(mergedNum);

  const middleDigit = (+currentNum[1] + +nextNum[0]) % 10;
  const squashedNum = currentNum[0] + middleDigit + nextNum[1];
  squashed.push(squashedNum);
}

print(merged.join(' '));
print(squashed.join(' '));
