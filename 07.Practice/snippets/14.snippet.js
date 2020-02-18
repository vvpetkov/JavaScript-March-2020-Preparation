let a = 1;
let b = 2;
let c = 3;

for (let i = 0; i < 10; i++) {
  a++;

  if (i % 2 === 0) {
    b--;
    c++;
  }

  if (i % 2 === 1) {
    c--;
  }
}

console.log(a, b, c);
