// 09.02.PlayWithNumberAndString.js
//

const input = ['a'];

const print = this.print || console.log;
const gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

const play = gets();
const number = isNaN(play);

switch (number) {
  case false:
    print(Number(play) + 1);
    break;
  case true:
    print(play + '*');
    break;
}