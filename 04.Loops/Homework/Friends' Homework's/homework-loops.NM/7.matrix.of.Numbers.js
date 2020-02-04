
let N = 4;

for (let i = 1; i <= N; i++) {
    let result = '';
    for (let j = 1; j <= N; j++) {
      result += (i + j - 1);
    }
    console.log(result);
  }