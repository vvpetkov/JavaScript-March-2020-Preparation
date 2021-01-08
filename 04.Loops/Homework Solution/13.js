const input = ['4']
const print = this.print || console.log
const gets = this.gets || ((arr, index) => () => arr[index++])(input, 0)

const n = +gets()

let matrix = [];

for(let i = 0; i<n; i++){
    matrix.push([]);

    for(let j = 0; j<n; j++) {
        matrix[i].push(0);
    }
}

let direction = 'right';
let row = 0;
let col = 0;
let count = 1;

while (count <= n * n) {
    // print (count);
    matrix [row][col] = count;

    if(direction === 'right'){
        if(matrix[row][col+1] === 0) {
            col++;
        }else{
            direction = 'down';
            row++;
        }
    }

    count++;
}

console.table(matrix);

// не съм я дописал