let input =[
    '2',
    '5',
    '-3'
];

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

let a = gets();
let b = gets();
let c = gets();

a = Number(a);
b = Number(b);
c = Number(c);

// https://www.youtube.com/watch?v=VE-Pmz12CE8

// square root  Math.sqrt()
//The plus-minus symbol "±" indicates both x1 and x2



let D = Math.pow(b,2) - (4 * a * c)

let x1 = (-b + Math.sqrt(D)) / (2 * a) // x1 = + symbol
let x2 = (-b - Math.sqrt(D)) / (2 * a) // x2 = - symbol

console.log(`x1=${x1}; x2=${x2}`);

// I understand that in Examples x1 and x2 have opposite symbol 
