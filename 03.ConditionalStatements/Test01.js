
const input = ['123'];
const print = this.print || console.log;
const gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

const numberToEnglish = +gets();

var str = "hello"
if (!!str) {
  print(true);
} else {
  print(false);
}

if (8 >= 8){
  print(true)
}else{
  print(false)
}


if (!(10 > 5)) {
  print(true);
} else {
  print(false);
}

if (5 > 0) {
  print(true);
} else {
  print(false);
}