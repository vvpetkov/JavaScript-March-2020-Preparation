let input = ['999'];
let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

let num = +(gets());
let ones = num % 10;
let tens = Math.floor(num / 10) % 10;
let hunds = Math.floor(num / 100);

if (hunds === 1) {
    print('One hundred');
} else if (hunds === 2) {
    print('Two hundred');
} else if (hunds === 3) {
    print('Three hundred');
} else if (hunds === 4) {
    print('Four hundred');
} else if (hunds === 5) {
    print('Five hundred');
} else if (hunds === 6) {
    print('Six hundred');
} else if (hunds === 7) {
    print('Seven hundred');
} else if (hunds === 8) {
    print('Eight hundred');
} else if (hunds === 9) {
    print('Nine hundred');
}

if (tens === 1) {
    if (ones === 1) {
        print('eleven');
    } else if (ones === 2) {
        print('twelve');
    } else if (ones === 3) {
        print('thirteen');
    } else if (ones === 4) {
        print('fourteen');
    } else if (ones === 5) {
        print('fifteen');
    } else if (ones === 6) {
        print('sixteen');
    } else if (ones === 7) {
        print('seventeen');
    } else if (ones === 8) {
        print('eighteen');
    } else if (ones === 9) {
        print('nineteen');
    } else if (ones === 0) {
        print('ten')
    }
}
if (tens === 2) {
    print('twenty');
} else if (tens === 3) {
    print('trihty');
} else if (tens === 4) {
    print('fourty');
} else if (tens === 5) {
    print('fifty');
} else if (tens === 6) {
    print('sixty');
} else if (tens === 7) {
    print('seventy');
} else if (tens === 8) {
    print('eighty');
} else if (tens === 9) {
    print('ninety');
}
if (tens !== 1) {
    if (ones === 1) {
        print('one');
    } else if (ones === 2) {
        print('two');
    } else if (ones === 3) {
        print('three');
    } else if (ones === 4) {
        print('four');
    } else if (ones === 5) {
        print('five');
    } else if (ones === 6) {
        print('six');
    } else if (ones === 7) {
        print('seven');
    } else if (ones === 8) {
        print('eight');
    } else if (ones === 9) {
        print('nine');
    } 
}
if (hunds === 0 && tens === 0 && ones === 0){
print(zero);
}
let number = (hunds + tens + ones);
print(number);