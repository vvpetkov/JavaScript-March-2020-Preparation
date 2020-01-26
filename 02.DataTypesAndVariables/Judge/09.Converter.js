// Input.
let input = [
    '20',

];

// Custom implementation of read and print. Do not touch : )
let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

// Solution
let milesPerGallon = gets();
milesPerGallon = Number(milesPerGallon);


// 1g = 4.54 l
// 1m = 1.6 km
// 100 km = 62.5 miles (100/1.6)
// 20 MPG = 20m/g = 20/4.54 = 4.405 Litres/miles
// 62.5 / 4.405 = 14.1875  litres per 100 km

let litresPerMiles = milesPerGallon / 4.54;
let litresPer100km = (100/1.6) / litresPerMiles;




print(`${Math.floor(litresPer100km)} litres per 100 km`);