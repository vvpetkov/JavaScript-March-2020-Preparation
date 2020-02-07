// и двете решения бачкат, но долното(закоементираното) е по добро щото не разчита на math.round.

let n = 10;
let min = 10;
let max = 15;

let result = '';
for(i = 1; i <= n; i++){
    r = Math.random() * (max - min) + min;
    rr = Math.round(r);
    result += rr + ' '
}console.log(result)


// let result = '';
// for(i = 1; i <= n; i++){
//     min = Math.ceil(min);
//     max = Math.floor(max);
//     r = Math.floor(Math.random() * (max - min + 1)) + min
//     result += r + ' '
// }console.log(result)

