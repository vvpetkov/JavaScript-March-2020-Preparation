const input = ['kwevhnwefhowiejJDJJJJDAD'];
const gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);
const print = this.print || console.log;

let str = gets();
let charArr = [];

let char = '';
let finalResult = '';

let maxSequence = 1;
let currSequence = 1;

for (let i = 0; i < str.length; i++) {
  charArr.push(str[i]);
}

for (let i = 0; i < charArr.length - 1; i++) {

  if (charArr[i] === charArr[i + 1]) {
    currSequence++;
    if (currSequence > maxSequence) {
      maxSequence = currSequence;
      char = charArr[i];
    }
  } else {
    currSequence = 1;
  }
}

if (maxSequence === 1) {
  char += str[0];
}

for (let i = 0; i < maxSequence; i++) {
  finalResult += char;
}

print(finalResult);