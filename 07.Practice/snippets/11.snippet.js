const a = 1;
const b = 2;
const c = 3;

if (a < b) {
  if (b < c) {
    const d = a + b + c;
    console.log(d);
  }

  if (a < c) {
    console.log(d);
  }
}
