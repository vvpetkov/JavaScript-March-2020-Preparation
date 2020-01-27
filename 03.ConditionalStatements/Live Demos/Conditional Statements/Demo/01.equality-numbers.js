const input = ['4', '5', '4'];
const print = this.print || console.log;
const gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

const a = +gets();
const b = +gets();
const c = +gets();

const isAEqualToB = a === b;
print(isAEqualToB); // false

const isAEqualToC = a === c;
print(isAEqualToC); // true

const isANotEqualToB = a !== b;
print(isANotEqualToB); // true

const isANotEqualToC = a !== c;
print(isANotEqualToC); // false
