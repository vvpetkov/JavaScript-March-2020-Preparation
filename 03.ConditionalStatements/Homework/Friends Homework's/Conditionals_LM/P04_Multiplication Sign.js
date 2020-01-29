var input = ['0', '-0.5', '-5.1'];
var print = this.print || console.log;
var gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

var a = +gets();
var b = +gets();
var c = +gets();

if (a > 0 && b > 0 && c > 0) {
    print('+');
} else if (a === 0 || b === 0 || c === 0) {
    print('0');
} else if (a < 0) {
    if (b < 0) {
        if (c < 0) {
            print('-');
        } else {
            print('+');
        }
    } else if (b > 0) {
        if (c < 0) {
            print('+');
        } else {
            print('-');
        }
    }
}
