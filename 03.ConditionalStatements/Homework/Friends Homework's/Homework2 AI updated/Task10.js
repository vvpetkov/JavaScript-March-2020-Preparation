// Problem 10. Number as Words
// Write a program that converts a number in the range [0…999] to words, corresponding to the English pronunciation.

const input = ['100'];
const print = this.print || console.log;
const gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);
const numberToEnglish = +gets();
// we split the number to its digits and after that will assign their English pronunciation values
let hundredsDigit = ((numberToEnglish % 1000 - numberToEnglish % 100) / 100); // calculate the hundreds' digit
let tensDigit = ((numberToEnglish % 100 - numberToEnglish % 10) / 10); // calculate the tens' digit
let unitsDigit = (numberToEnglish % 10); // calculate the units' digit

// we assign the different hundred possibilities for the hundreds' digit
switch (hundredsDigit) {
  case 1: hundredsDigit = 'one hundred'; break;
  case 2: hundredsDigit = 'two hundred'; break;
  case 3: hundredsDigit = 'three hundred'; break;
  case 4: hundredsDigit = 'four hundred'; break;
  case 5: hundredsDigit = 'five hundred'; break;
  case 6: hundredsDigit = 'six hundred'; break;
  case 7: hundredsDigit = 'seven hundred'; break;
  case 8: hundredsDigit = 'eight hundred'; break;
  case 9: hundredsDigit = 'nine hundred'; break;
  default: hundredsDigit = ''; break;
}

// we do the same for the tens, but also describe the exceptional ones between 10 and 19 with an additional switch for case 1.
switch (tensDigit) {
  case 1:
    switch (unitsDigit) {
      case 0: tensDigit = 'ten'; unitsDigit = ''; break;
      case 1: tensDigit = 'eleven'; unitsDigit = ''; break;
      case 2: tensDigit = 'twelve'; unitsDigit = ''; break;
      case 3: tensDigit = 'thirteen'; unitsDigit = ''; break;
      case 4: tensDigit = 'fourteen'; unitsDigit = ''; break;
      case 5: tensDigit = 'fifteen'; unitsDigit = ''; break;
      case 6: tensDigit = 'sixteen'; unitsDigit = ''; break;
      case 7: tensDigit = 'seventeen'; unitsDigit = ''; break;
      case 8: tensDigit = 'eighteen'; unitsDigit = ''; break;
      case 9: tensDigit = 'nineteen'; unitsDigit = ''; break;
      default: tensDigit = ''; break;
    } break;
  case 2: tensDigit = 'twenty'; break;
  case 3: tensDigit = 'thirty'; break;
  case 4: tensDigit = 'forty'; break;
  case 5: tensDigit = 'fifty'; break;
  case 6: tensDigit = 'sixty'; break;
  case 7: tensDigit = 'seventy'; break;
  case 8: tensDigit = 'eighty'; break;
  case 9: tensDigit = 'ninety'; break;
  default: tensDigit = ''; break;
}

// finally, we do a switch for the units' digits
switch (unitsDigit) {
  case 1: unitsDigit = 'one'; break;
  case 2: unitsDigit = 'two'; break;
  case 3: unitsDigit = 'three'; break;
  case 4: unitsDigit = 'four'; break;
  case 5: unitsDigit = 'five'; break;
  case 6: unitsDigit = 'six'; break;
  case 7: unitsDigit = 'seven'; break;
  case 8: unitsDigit = 'eight'; break;
  case 9: unitsDigit = 'nine'; break;
  default: unitsDigit = ''; break;
}

// we explore the 8 possibilities for the digits to be zero or non-zero and print the number for every case
if ((hundredsDigit !== '') && (tensDigit !== '') && (unitsDigit !== '')) {
  print(`${hundredsDigit} and ${tensDigit} ${unitsDigit}`);
} else if ((hundredsDigit !== '') && (tensDigit !== '') && (unitsDigit === '')) {
  print(`${hundredsDigit} and ${tensDigit}`);
} else if ((hundredsDigit !== '') && (tensDigit === '') && (unitsDigit !== '')) {
  print(`${hundredsDigit} and ${unitsDigit}`);
} else if ((hundredsDigit !== '') && (tensDigit === '') && (unitsDigit === '')) {
  print(`${hundredsDigit}`);
} else if ((hundredsDigit === '') && (tensDigit !== '') && (unitsDigit !== '')) {
  print(`${tensDigit} ${unitsDigit}`);
} else if ((hundredsDigit === '') && (tensDigit !== '') && (unitsDigit === '')) {
  print(`${tensDigit}`);
} else if ((hundredsDigit === '') && (tensDigit === '') && (unitsDigit !== '')) {
  print(`${unitsDigit}`);
} else if ((hundredsDigit === '') && (tensDigit === '') && (unitsDigit === '')) {
  print('zero');
}
