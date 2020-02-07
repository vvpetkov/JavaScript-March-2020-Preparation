const input = ['5'];
const print = this.print || console.log;
const gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

const n = +gets();
const arrN = [];
let arrNS = [];

for (let i = 1; i <= n; i++) {
  arrN.push(i);
}

arrNS = (arrN.toString()).split(','); // print(arrNS) // [ '1',  '2', '3', '4',  '5']
const nar = arrNS.length;

for (let i = nar - 1; i > 0; i--) {
  const j = Math.floor(Math.random() * i);
  const temp = arrNS[i];
  arrNS[i] = arrNS[j];
  arrNS[j] = temp;
}

print(arrNS.toString().replace(/,/g, ' '));
