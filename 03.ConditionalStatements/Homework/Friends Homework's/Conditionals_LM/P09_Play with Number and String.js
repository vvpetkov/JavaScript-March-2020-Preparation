const input = ['boom'];
const print = this.print || console.log;
const gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

const what = gets();
const whatTF = isNaN(what);

switch (whatTF) {
  case true: print(what + '*'); break;
  case false: print(+what + 1); break;
}
