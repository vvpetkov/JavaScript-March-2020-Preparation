let input = ["4 3 2 5 2", "13.5", "13.5", "1", "7", "8"];
let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

let z = gets();
z = z.split(" ");
let oddProduct = 1;
let evenProduct = 1;

for (let i = 1; i <= z.length; i++) {
  if (i % 2 === 0) {
    evenProduct *= z[i - 1];
  } else {
    oddProduct *= z[i - 1];
  }
}
if (oddProduct === evenProduct) {
  print("yes");
  print(`product = ${oddProduct}`);
} else {
  print("no");
  print(`odd_product = ${oddProduct}`);
  print(`even_product = ${evenProduct}`);
}
