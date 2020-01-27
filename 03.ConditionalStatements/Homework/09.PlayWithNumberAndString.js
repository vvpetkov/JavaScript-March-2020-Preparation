// 09.PlayWithNumberAndString.js

const input = [6];

const print = this.print || console.log;
const gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

const play = gets();
print(play);

switch (play) {
  case typeof play === 'string':
    print(play + '*');
    break;
  case typeof play === 'number':
    print(play + 1);
    break;

  default:
    print('Not working!');
    break;
}

if (typeof play === 'string'){
  print('Ok!Bambino.STRING')
}else if(typeof play === 'number'){
  print('Ok!Bambino.NUMBER')
}