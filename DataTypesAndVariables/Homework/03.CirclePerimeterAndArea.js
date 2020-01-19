let input =[
    '3.5',
];

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

let radius = gets();

radius = Number(radius);

let circlePerimeter = 2 * Math.PI * radius
let circleArea = Math.PI * Math.pow(radius,2)

console.log(circlePerimeter.toFixed(2));
console.log(circleArea.toFixed(2));
