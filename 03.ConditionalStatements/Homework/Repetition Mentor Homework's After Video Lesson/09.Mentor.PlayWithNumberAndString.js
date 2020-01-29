// 09.Mentor.PlayWithNumberAndString.js

const input = ['hello'];

const print = this.print || console.log;
const gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

const play = gets();