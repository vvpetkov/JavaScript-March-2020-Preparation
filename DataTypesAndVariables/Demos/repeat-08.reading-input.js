let input =[
    'Peter',
    '25',
];

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);


let name = gets();  // read the first line of the input, no need to convert it to a string, it already is
let input2 = gets();  // read the second line
let age = Number(input2);   // convert it to a number

let ageIn5Years = age + 5;

// string concatenation
console.log(name + ' is ' + age + ' years old.');

// string interpolation. You could use this as it is way more readable
console.log(`${name} is ${age} years old.`);





