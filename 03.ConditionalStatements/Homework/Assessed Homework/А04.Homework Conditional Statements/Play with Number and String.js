const input = ['1.1'];

const print = this.print || console.log;
const gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

const value = gets();

if (isNaN(value)) {
    print(value + '*');
} else {
    print(+value + 1);
}
