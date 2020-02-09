const arr = [1, 2, 3, 4, 5];

for (let index = 0; index < arr.length; index++) {
  console.log(arr[index]);
}

let i = 0;
while (i < arr.length) {
  console.log(arr[i]);
  i++;
}

for (const element of arr) {
  console.log(element);
}
