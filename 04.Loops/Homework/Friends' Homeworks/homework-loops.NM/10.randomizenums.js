let print = this.print || console.log;

let n = 5;
let array = [];

for(let i = 1; i <= n; i++){
   
array.push(i)
}


let currentIndex = array.length, temporaryValue, randomIndex;
while (0 !== currentIndex) {

    
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  
print(array.join(' '))
