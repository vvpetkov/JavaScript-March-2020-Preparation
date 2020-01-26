// Input.
let input = [
    '0',
    '2',
    '6',
    '0'
];

// Custom implementation of read and print. Do not touch : )
let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

// Solution
let days = gets();
days = Number(days);
let hours = gets();
hours = Number(hours);
let minutes = gets();
minutes = Number(minutes);
let seconds = gets();
seconds = Number(seconds);

let daysToSeconds = days * 24 * 60 * 60
let hoursToSeconds = hours * 60 * 60
let minutesToSeconds = minutes * 60
let sumOfAllSeconds = daysToSeconds + hoursToSeconds + minutesToSeconds + seconds;


print(sumOfAllSeconds);
