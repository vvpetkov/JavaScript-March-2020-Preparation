// 09.03.PlayWithNumberAndString.js
// Friends solution's : AI

const input = ['3'];

const print = this.print || console.log;
const gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

const stringOrNumber = gets();

switch (Number(stringOrNumber)) {
  case Number(stringOrNumber):
    print(Number(stringOrNumber) + 1);
    break;
  default:
    print(stringOrNumber + '*');
    break;
}
