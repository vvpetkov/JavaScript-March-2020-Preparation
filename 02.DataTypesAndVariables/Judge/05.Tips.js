// Input.
let input = [
    '25',

];

// Custom implementation of read and print. Do not touch : )
let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

// Solution
let mealPrice = gets();
mealPrice = Number(mealPrice);

let tip = 10 * (1 / 100) * mealPrice
let sumAfterTip = mealPrice + tip



print(Math.floor(sumAfterTip));