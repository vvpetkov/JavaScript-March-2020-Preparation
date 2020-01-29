// 99.Mentor.js 

const input = ['3', 'hello'];

const print = this.print || console.log;
const gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

const type = gets();
const value = gets();

switch (type) {
  case '1': print(+value + 1); break;
  case '2': print(+value + 1); break;
  case '3': print(value + '*'); break;
}
