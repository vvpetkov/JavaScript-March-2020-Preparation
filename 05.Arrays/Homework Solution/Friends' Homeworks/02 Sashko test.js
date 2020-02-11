const input = ['telerik', 'teleric'];
const print = this.print || console.log;
const gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);
const string1 = gets();
const string2 = gets();
const string1ToArray = string1.split('');
const string2ToArray = string2.split('');
let isEqual;
if (string1.length === string2.length) { // Правим масив от всяка от двете думи и сравняваме символите. Има и случаи, когато първата или втората е по-дълга
  for (let i = 0; i <= string1.length - 1; i++) {
    if (string1ToArray[i] === string2ToArray[i]) {
      isEqual = 'Equal';
    } else if (string1ToArray[i] > string2ToArray[i]) {
      isEqual = 'Second';
    } else {
      isEqual = 'First';
    }
  }
} else if (string1.length < string2.length) {
  for (let i = 0; i <= string1.length - 1; i++) {
    if (string1ToArray[i] <= string2ToArray[i]) {
      isEqual = 'First';
    } else {
      isEqual = 'Second';
    }
  }
} else if (string1.length > string2.length) {
  for (let i = 0; i <= string2.length - 1; i++) {
    if (string2ToArray[i] <= string1ToArray[i]) {
      isEqual = 'Second';
    } else {
      isEqual = 'First';
    }
  }
}
print(isEqual);
print(string1ToArray[6]);
print(string2ToArray[6]);
print(string1ToArray[6] > string2ToArray[6]);
print(string1ToArray[6] < string2ToArray[6]);

let test1 = 'a'
let test2 = 'b'
print(test1 > test2);
print(test1 < test2);
