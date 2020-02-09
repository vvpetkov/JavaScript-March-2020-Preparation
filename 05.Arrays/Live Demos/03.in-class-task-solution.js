const input = ['19,30,22,33,21', 'John,Peter,Kate,Jane,Nick'];
const gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);
const print = this.print || console.log;

const ages = gets().split(',');
const names = gets().split(',');

let youngestPersonName = names[0];
let youngestPersonAge = +ages[0];

let oldestPersonName = names[0];
let oldestPersonAge = +ages[0];

for (let index = 0; index < ages.length; index++) {
  const currentAge = +ages[index];
  const currentName = names[index];

  if (currentAge < youngestPersonAge) {
    youngestPersonAge = currentAge;
    youngestPersonName = currentName;
  }

  if (currentAge > oldestPersonAge) {
    oldestPersonAge = currentAge;
    oldestPersonName = currentName;
  }
}

print(`Youngest person: ${youngestPersonName} ${youngestPersonAge}`);
print(`Oldest person: ${oldestPersonName} ${oldestPersonAge}`);
