// Longest Block in String
// 03.Longest-Block-in-String.js
// test- regular expression


const input = ['abbCCCcddBBBxx'];
const print = this.print || console.log;
const gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

const str = gets();

let str2 = str.match(/(.)\1*/g).sort((a,b)=>b.length-a.length)[0];

//print(str);
print(str2);
