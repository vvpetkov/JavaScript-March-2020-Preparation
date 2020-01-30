const input = ['9'];
const print = this.print || console.log;
const gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

const score = +gets();

if (score >= 1 && score <= 3) {
    const result = score * 10;
    print(result);
} else if (score >= 4 && score <= 6) {
    const result = score * 100;
    print(result);
} else if (score >= 7 && score <= 9) {
    const result = score * 1000;
    print(result);
} else {
    print('invalid score');
}