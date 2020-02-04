//копнах я от джъджа, що ме домързя да я решавам пак.
let input = [5, 2, 1, 1, 6, 3];
let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);


let n = +gets();
let number = '';
let odd = 1;
let even = 1; 
for (let i = 1; i <= n; i++){
if(i % 2 === 0){
    even *= +gets();
}
if(i % 2 === 1){
    odd *= +gets();
}
}
if(odd === even){
    print(`yes ${odd}`)
}

if(odd !== even){
    print(`no ${odd} ${even}`)
}
