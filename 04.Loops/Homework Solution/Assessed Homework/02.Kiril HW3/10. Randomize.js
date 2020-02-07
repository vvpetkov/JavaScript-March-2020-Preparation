let input = ["6", "10", "15", "1", "7", "8"];
let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

const n = +gets();
let myArray = [];
for (let i = 1; i <= n; i++) {
  myArray.push(i);
}

function shuffle(arra1) {
  var ctr = arra1.length, temp, index;
  while (ctr > 0) {
    index = Math.floor(Math.random() * ctr);
    ctr--;
    temp = arra1[ctr];
    arra1[ctr] = arra1[index];
    arra1[index] = temp;
  }
  return arra1;
}
shuffle(myArray);
let res = "";
for (let i = 0; i < n; i++) {
  res += `${myArray[i]} `;
}
console.log(res);
