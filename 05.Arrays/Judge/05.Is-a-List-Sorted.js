// Arrays (Judge)(05) Is a List Sorted? (Vld)
// 05.Is-a-List-Sorted.js

const input = ['3', '1,2,3,4,5', '1,2,8,9,9', '1,2,2,3,2'];
const print = this.print || console.log;
const gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

// The solution starts from here

const n = +gets();

for (let i = 0; i < n; i++) {
  const list = gets();
  const sortedList = list
    .split(',')             // str. to arr. 
    .map((e) => +e)         // обикаля по вс. ел. и след => променя вс. ел.
    .sort((a, b) => a - b)  // сортираща функция
    .join(',');             // лепя по сепаратор 

  print(list === sortedList) 
}