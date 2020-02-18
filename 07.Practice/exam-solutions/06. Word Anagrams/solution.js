const input = [
  'anagram',
  '6',
  'gramana',
  'aaagrnm',
  'anagra',
  'margana',
  'abc',
  'xy'];
const gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);
const print = this.print || console.log;

const textA = gets().split('').sort().join('');

const n = +gets();

for (let i = 0; i < n; i++) {
  const textB = gets().split('').sort().join('');

  if (textA === textB) {
    print('Yes');
  } else {
    print('No');
  }
}
