const a = 1;
const b = 2;
const c = 3;

if (a > b) {
  console.log(a);
} else if (b > c) {
  console.log(b);
} else if (c < a) {
  console.log(c);
} else {
  if (a > b || b > c) {
    console.log('Whaat?');
  } else {
    console.log('How are you?');
  }
}
