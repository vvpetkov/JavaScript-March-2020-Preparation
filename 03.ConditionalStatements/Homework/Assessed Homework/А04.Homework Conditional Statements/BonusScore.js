const input = ['-3'];

const print = this.print || console.log;
const gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

const score = +gets();
let bonus;

if (score >= 1 && score <= 3) {
    bonus = score * 10
    print(bonus);
} else if (score >= 4 && score <= 6) {
    bonus = score * 100
    print(bonus);
} else if (score >= 7 && score <= 9) {
    bonus = score * 1000
    print(bonus);
} else if (score <= 0 || score > 9) {
    bonus = 'invalid score'
    print(bonus);
} 
