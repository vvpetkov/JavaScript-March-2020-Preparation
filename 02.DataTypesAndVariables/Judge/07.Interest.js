// Input.
let input = [
    '2000',

];

// Custom implementation of read and print. Do not touch : )
let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

// Solution
let n = gets();
n = Number(n);

let interestForFirst = 5 * (1 / 100) * n;
let totalFirstYear = n + interestForFirst;
let interestForSecond = 5 * (1 / 100) * totalFirstYear;
let totalSecondYear = totalFirstYear + interestForSecond;
let interestForThird = 5 * (1 / 100) * totalSecondYear;
let totalThirdYear = totalSecondYear + interestForThird;



    print(totalFirstYear.toFixed(2));
    print(totalSecondYear.toFixed(2));
    print(totalThirdYear.toFixed(2));