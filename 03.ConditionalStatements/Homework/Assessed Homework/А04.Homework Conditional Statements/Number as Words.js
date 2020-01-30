const input = ['42'];

const print = this.print || console.log;
const gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

const digit = +gets();
let a, b, result, result1, result2, result3, digit1, digit2, digit3, digits;

const tillNineteen = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
const tens = ['twenty', 'thirty', 'fourty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

if (digit >= 1 && digit <= 19) {
  a = digit - 1;
  result = tillNineteen[a];
  print(result);
}

if (digit >= 20 && digit <= 99) {
  digit1 = Math.floor((digit / 10) % 10);
  a = digit1 - 2;
  result1 = tens[a];
  digit2 = Math.floor((digit / 1) % 10);
  b = digit2 - 1;
  result2 = tillNineteen[b];
  print(result1 + ' ' + result2);
}

if (digit >= 100 && digit <= 999 && digit % 100 === 0) {
  digit1 = Math.floor((digit / 100) % 10);
  a = digit1 - 1;
  result1 = tillNineteen[a];
  print(result1 + ' hundred');
} else if (digit > 100 && digit < 200) {
  digits = digit - 100;
  if (digits >= 1 && digits <= 19) {
    a = digits - 1;
    result = tillNineteen[a];
    print('one hundred and ' + result);
  } else {
    digit2 = Math.floor((digits / 10) % 10);
    b = digit2 - 2;
    result2 = tens[b];
    digit3 = Math.floor((digit / 1) % 10);
    b = digit3 - 1;
    result3 = tillNineteen[b];
    print('one hundred and ' + result2 + ' ' + result3);
  }
} else if (digit > 200 && digit < 300) {
  digits = digit - 200;
  if (digits >= 1 && digits <= 19) {
    a = digits - 1;
    result = tillNineteen[a];
    print('two hundred and ' + result);
  } else {
    digit2 = Math.floor((digits / 10) % 10);
    b = digit2 - 2;
    result2 = tens[b];
    digit3 = Math.floor((digit / 1) % 10);
    b = digit3 - 1;
    result3 = tillNineteen[b];
    print('two hundred and ' + result2 + ' ' + result3);
  }
} else if (digit > 300 && digit < 400) {
  digits = digit - 300;
  if (digits >= 1 && digits <= 19) {
    a = digits - 1;
    result = tillNineteen[a];
    print('three hundred and ' + result);
  } else {
    digit2 = Math.floor((digits / 10) % 10);
    b = digit2 - 2;
    result2 = tens[b];
    digit3 = Math.floor((digit / 1) % 10);
    b = digit3 - 1;
    result3 = tillNineteen[b];
    print('three hundred and ' + result2 + ' ' + result3);
  }
} else if (digit > 400 && digit < 500) {
  digits = digit - 400;
  if (digits >= 1 && digits <= 19) {
    a = digits - 1;
    result = tillNineteen[a];
    print('four hundred and ' + result);
  } else {
    digit2 = Math.floor((digits / 10) % 10);
    b = digit2 - 2;
    result2 = tens[b];
    digit3 = Math.floor((digit / 1) % 10);
    b = digit3 - 1;
    result3 = tillNineteen[b];
    print('four hundred and ' + result2 + ' ' + result3);
  }
} else if (digit > 500 && digit < 600) {
  digits = digit - 500;
  if (digits >= 1 && digits <= 19) {
    a = digits - 1;
    result = tillNineteen[a];
    print('five hundred and ' + result);
  } else {
    digit2 = Math.floor((digits / 10) % 10);
    b = digit2 - 2;
    result2 = tens[b];
    digit3 = Math.floor((digit / 1) % 10);
    b = digit3 - 1;
    result3 = tillNineteen[b];
    print('five hundred and ' + result2 + ' ' + result3);
  }
} else if (digit > 600 && digit < 700) {
  digits = digit - 600;
  if (digits >= 1 && digits <= 19) {
    a = digits - 1;
    result = tillNineteen[a];
    print('six hundred and ' + result);
  } else {
    digit2 = Math.floor((digits / 10) % 10);
    b = digit2 - 2;
    result2 = tens[b];
    digit3 = Math.floor((digit / 1) % 10);
    b = digit3 - 1;
    result3 = tillNineteen[b];
    print('six hundred and ' + result2 + ' ' + result3);
  }
} else if (digit > 700 && digit < 800) {
  digits = digit - 700;
  if (digits >= 1 && digits <= 19) {
    a = digits - 1;
    result = tillNineteen[a];
    print('seven hundred and ' + result);
  } else {
    digit2 = Math.floor((digits / 10) % 10);
    b = digit2 - 2;
    result2 = tens[b];
    digit3 = Math.floor((digit / 1) % 10);
    b = digit3 - 1;
    result3 = tillNineteen[b];
    print('seven hundred and ' + result2 + ' ' + result3);
  }
} else if (digit > 800 && digit < 900) {
  digits = digit - 800;
  if (digits >= 1 && digits <= 19) {
    a = digits - 1;
    result = tillNineteen[a];
    print('eight hundred and ' + result);
  } else {
    digit2 = Math.floor((digits / 10) % 10);
    b = digit2 - 2;
    result2 = tens[b];
    digit3 = Math.floor((digit / 1) % 10);
    b = digit3 - 1;
    result3 = tillNineteen[b];
    print('eight hundred and ' + result2 + ' ' + result3);
  }
} else if (digit > 900 && digit < 1000) {
  digits = digit - 900;
  if (digits >= 1 && digits <= 19) {
    a = digits - 1;
    result = tillNineteen[a];
    print('nine hundred and ' + result);
  } else {
    digit2 = Math.floor((digits / 10) % 10);
    b = digit2 - 2;
    result2 = tens[b];
    digit3 = Math.floor((digit / 1) % 10);
    b = digit3 - 1;
    result3 = tillNineteen[b];
    print('nine hundred and ' + result2 + ' ' + result3);
  }
}
