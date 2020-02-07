let input = [];
let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

for (let i = 2; i <= 14; i++) {
  if (i >= 11) {
    let k = "";
    switch (i) {
      case 11: k = "J"; break;
      case 12: k = "Q"; break;
      case 13: k = "K"; break;
      case 14: k = "A";
    }
    print(`${k} of ♠, ${k} of ♣, ${k} of ♥, ${k} of ♦`)
  } else {
    print(`${i} of ♠, ${i} of ♣, ${i} of ♥, ${i} of ♦`)
  }
}
