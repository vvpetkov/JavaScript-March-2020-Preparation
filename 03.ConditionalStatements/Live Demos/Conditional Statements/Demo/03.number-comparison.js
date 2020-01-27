const input = ['4', '5', '4'];
const print = this.print || console.log;
const gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

const a = +gets();
const b = +gets();
const c = +gets();

const isAGreaterThanB = a > b;
print(isAGreaterThanB); // false

const isALessThanB = a < b;
print(isALessThanB); // true

const isAGreaterThanC = a > c;
print(isAGreaterThanC); // false

const isALessThanC = a < c;
print(isALessThanC); // false

const isAGreaterThanOrEqualToC = a >= c;
print(isAGreaterThanOrEqualToC); // true

const isALessThanOrEqualToC = a <= c;
print(isALessThanOrEqualToC); // true
