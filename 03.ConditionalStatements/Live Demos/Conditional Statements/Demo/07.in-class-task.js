const input = ['32'];
const print = this.print || console.log;
const gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

const age = +gets();

const isChild = age < 12;
const isTeen = age >= 12 && age < 20;
const isAdult = age >= 20 && age <= 65;
const isPensioner = age > 65;

const isWorkAge = !isChild && !isTeen && isAdult && !isPensioner;

print(isWorkAge); // true
