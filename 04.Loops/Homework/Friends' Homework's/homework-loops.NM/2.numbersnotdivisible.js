let n = 20
let result = '';
for(let i = 1; i <= n; i++){
    if(i % 3 === 0 || i % 7 === 0){
        continue;
    }
    result += i + ' ';
}console.log(result)