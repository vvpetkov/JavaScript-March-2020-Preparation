let input = ['3 10 4 6 5 1'];
let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

let str = gets(); //'2 1 1 6 3'
let arrNSok = [];
let arrEven = [];
let arrOdd = [];
let prod1 = 1;
let prod2 = 1;

arrNSok = str.split(' ');

for (let i = 0; i < arrNSok.length; i++) {
  if (i % 2 === 0) {
    arrOdd.push(arrNSok[i]);
  } else {
    arrEven.push(arrNSok[i]);
  }
}

for (i = 0; i < arrOdd.length; i += 1) {
  prod1 *= arrOdd[i];
}
for (i = 0; i < arrEven.length; i += 1) {
  prod2 *= arrEven[i];
}

if (prod1 === prod2) {
  print(`yes`);
} else {
  print(`no`);
}
