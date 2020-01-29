// 10.02.NumberAsWords.js
// All credits to LM

// number as words
// (0-20)
//  (21-99)
//  (100-999)

const input = ['999'];
const print = this.print || console.log;
const gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

const num = +gets();
const num0 = 'zero';
const num1 = 'one';
const num2 = 'two';
const num3 = 'three';
const num4 = 'four';
const num5 = 'five';
const num6 = 'six';
const num7 = 'seven';
const num8 = 'eight';
const num9 = 'nine';
const num10 = 'ten';
const num11 = 'eleven';
const num12 = 'twelve';
const num13 = 'thirteen';
const num14 = 'fourteen';
const num15 = 'fifteen';
const num16 = 'sixteen';
const num17 = 'seventeen';
const num18 = 'eighteen';
const num19 = 'nineteen';
const num20 = 'twenty';
const num30 = 'thirty';
const num40 = 'forty';
const num50 = 'fifty';
const num60 = 'sixty';
const num70 = 'seventy';
const num80 = 'eighty';
const num90 = 'ninety';
const num100 = 'One hundred';
const num200 = 'Two hundred';
const num300 = 'Three hundred';
const num400 = 'Four hundred';
const num500 = 'Five hundred';
const num600 = 'Six hundred';
const num700 = 'Seven hundred';
const num800 = 'Eight hundred';
const num900 = 'Nine hundred';

if (num >= 0 && num <= 20) {
  if (num === 0) {
    print(num0.charAt(0).toUpperCase() + num0.slice(1));
  } else if (num === 1) {
    print(num1.charAt(0).toUpperCase() + num1.slice(1));
  } else if (num === 2) {
    print(num2.charAt(0).toUpperCase() + num2.slice(1));
  } else if (num === 3) {
    print(num3.charAt(0).toUpperCase() + num3.slice(1));
  } else if (num === 4) {
    print(num4.charAt(0).toUpperCase() + num4.slice(1));
  } else if (num === 5) {
    print(num5.charAt(0).toUpperCase() + num5.slice(1));
  } else if (num === 6) {
    print(num6.charAt(0).toUpperCase() + num6.slice(1));
  } else if (num === 7) {
    print(num7.charAt(0).toUpperCase() + num7.slice(1));
  } else if (num === 8) {
    print(num8.charAt(0).toUpperCase() + num8.slice(1));
  } else if (num === 9) {
    print(num9.charAt(0).toUpperCase() + num9.slice(1));
  } else if (num === 10) {
    print(num10.charAt(0).toUpperCase() + num10.slice(1));
  } else if (num === 11) {
    print(num11.charAt(0).toUpperCase() + num11.slice(1));
  } else if (num === 12) {
    print(num12.charAt(0).toUpperCase() + num12.slice(1));
  } else if (num === 13) {
    print(num13.charAt(0).toUpperCase() + num13.slice(1));
  } else if (num === 14) {
    print(num14.charAt(0).toUpperCase() + num14.slice(1));
  } else if (num === 15) {
    print(num15.charAt(0).toUpperCase() + num15.slice(1));
  } else if (num === 16) {
    print(num16.charAt(0).toUpperCase() + num16.slice(1));
  } else if (num === 17) {
    print(num17.charAt(0).toUpperCase() + num17.slice(1));
  } else if (num === 18) {
    print(num18.charAt(0).toUpperCase() + num18.slice(1));
  } else if (num === 19) {
    print(num19.charAt(0).toUpperCase() + num19.slice(1));
  } else if (num === 20) {
    print(num20.charAt(0).toUpperCase() + num20.slice(1));
  }
}

if (num > 20 && num <= 99) {
  let remainderNUM = num % 10;
  let baseNUM = num - remainderNUM;

  if (remainderNUM === 1) {
    remainderNUM = num1;
  } else if (remainderNUM === 2) {
    remainderNUM = num2;
  } else if (remainderNUM === 3) {
    remainderNUM = num3;
  } else if (remainderNUM === 4) {
    remainderNUM = num4;
  } else if (remainderNUM === 5) {
    remainderNUM = num5;
  } else if (remainderNUM === 6) {
    remainderNUM = num6;
  } else if (remainderNUM === 7) {
    remainderNUM = num7;
  } else if (remainderNUM === 8) {
    remainderNUM = num8;
  } else if (remainderNUM === 9) {
    remainderNUM = num9;
  }

  if (baseNUM === 20) {
    baseNUM = num20;
  } else if (baseNUM === 30) {
    baseNUM = num30;
  } else if (baseNUM === 40) {
    baseNUM = num40;
  } else if (baseNUM === 50) {
    baseNUM = num50;
  } else if (baseNUM === 60) {
    baseNUM = num60;
  } else if (baseNUM === 70) {
    baseNUM = num70;
  } else if (baseNUM === 80) {
    baseNUM = num80;
  } else if (baseNUM === 90) {
    baseNUM = num90;
  }
  print((baseNUM.charAt(0).toUpperCase() + baseNUM.slice(1)) + ' ' + remainderNUM);
}

if (num >= 100 && num <= 999) {
  let base100 = Math.floor(num / 100);
  if (base100 === 1) {
    base100 = num100;
  } else if (base100 === 2) {
    base100 = num200;
  } else if (base100 === 3) {
    base100 = num300;
  } else if (base100 === 4) {
    base100 = num400;
  } else if (base100 === 5) {
    base100 = num500;
  } else if (base100 === 6) {
    base100 = num600;
  } else if (base100 === 7) {
    base100 = num700;
  } else if (base100 === 8) {
    base100 = num800;
  } else if (base100 === 9) {
    base100 = num900;
  }

  let remainder100 = num % 100;
  if (remainder100 <= 20) {
    if (remainder100 === 1) {
      remainder100 = num1;
    } else if (remainder100 === 2) {
      remainder100 = num2;
    } else if (remainder100 === 3) {
      remainder100 = num3;
    } else if (remainder100 === 4) {
      remainder100 = num4;
    } else if (remainder100 === 5) {
      remainder100 = num5;
    } else if (remainder100 === 6) {
      remainder100 = num6;
    } else if (remainder100 === 7) {
      remainder100 = num7;
    } else if (remainder100 === 8) {
      remainder100 = num8;
    } else if (remainder100 === 9) {
      remainder100 = num9;
    } else if (remainder100 === 10) {
      remainder100 = num10;
    } else if (remainder100 === 11) {
      remainder100 = num11;
    } else if (remainder100 === 12) {
      remainder100 = num12;
    } else if (remainder100 === 13) {
      remainder100 = num13;
    } else if (remainder100 === 14) {
      remainder100 = num14;
    } else if (remainder100 === 15) {
      remainder100 = num15;
    } else if (remainder100 === 16) {
      remainder100 = num16;
    } else if (remainder100 === 17) {
      remainder100 = num17;
    } else if (remainder100 === 18) {
      remainder100 = num18;
    } else if (remainder100 === 19) {
      remainder100 = num19;
    } else if (remainder100 === 20) {
      remainder100 = num20;
    }
    print(base100 + ' ' + 'and ' + remainder100);

  } else if (remainder100 > 20 && remainder100 <= 99) {
    let remainder10 = remainder100 % 10;
    let baseNUM = remainder100 - remainder10;
    if (remainder10 === 1) {
      remainder10 = num1;
    } else if (remainder10 === 2) {
      remainder10 = num2;
    } else if (remainder10 === 3) {
      remainder10 = num3;
    } else if (remainder10 === 4) {
      remainder10 = num4;
    } else if (remainder10 === 5) {
      remainder10 = num5;
    } else if (remainder10 === 6) {
      remainder10 = num6;
    } else if (remainder10 === 7) {
      remainder10 = num7;
    } else if (remainder10 === 8) {
      remainder10 = num8;
    } else if (remainder10 === 9) {
      remainder10 = num9;
    }
    if (baseNUM === 20) {
      baseNUM = num20;
    } else if (baseNUM === 30) {
      baseNUM = num30;
    } else if (baseNUM === 40) {
      baseNUM = num40;
    } else if (baseNUM === 50) {
      baseNUM = num50;
    } else if (baseNUM === 60) {
      baseNUM = num60;
    } else if (baseNUM === 70) {
      baseNUM = num70;
    } else if (baseNUM === 80) {
      baseNUM = num80;
    } else if (baseNUM === 90) {
      baseNUM = num90;
    }
    print(base100 + ' ' + 'and ' + baseNUM + ' ' + remainder10);
  }
}
