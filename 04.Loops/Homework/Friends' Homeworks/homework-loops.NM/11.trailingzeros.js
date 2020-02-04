let print = this.print || console.log;

let n = 10;
let N = 1;
for(let i = 1; i <= n; i++){

    N = N * i
}

let count = 0;
N = N.toString().split('');

for (let j = N.length - 1; j > 0; j--) {
    if (parseInt(N[j]) === 0) {
      count += 1;
    } else {
      break;
    }
}

if(count === 0){
    print('think why')
}else{
    print(count)
}




 


