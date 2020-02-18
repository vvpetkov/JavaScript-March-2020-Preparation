const input = ['258'];
const gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);
const print = this.print || console.log;

const bearLegsCount = 2;
const humanLegsCount = 5;
const chickenLegsCount = 7;
const n = +gets();
let count = 0;

for (let bearLegsPair = 0; bearLegsPair <= Math.floor(n / bearLegsCount); bearLegsPair++) {
  for (let humanLegsPair = 0; humanLegsPair <= Math.floor(n / humanLegsCount); humanLegsPair++) {
    for (let chickenLegsPair = 0; chickenLegsPair <= Math.floor(n / chickenLegsCount); chickenLegsPair++) {
      const bearLegs = bearLegsCount * bearLegsPair;
      const humanLegs = humanLegsCount * humanLegsPair;
      const chickenLegs = chickenLegsCount * chickenLegsPair;
      const legsSum = bearLegs + humanLegs + chickenLegs;

      if (legsSum === n) {
        count++;
      }
    }
  }
}

print(count);
