const input = ['ivan', 'stamat', 'ivan'];
const print = this.print || console.log;
const gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

const nameA = gets();
const nameB = gets();
const nameC = gets();

const isNameAEqualToNameB = nameA === nameB;
print(isNameAEqualToNameB); // false

const isNameAEqualToNameC = nameA === nameC;
print(isNameAEqualToNameC); // true

const isNameANotEqualToNameB = nameA !== nameB;
print(isNameANotEqualToNameB); // true

const isNameANotEqualToNameC = nameA !== nameC;
print(isNameANotEqualToNameC); // false
