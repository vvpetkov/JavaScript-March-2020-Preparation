// Input.
let input = [
    '10',
    '10'

  ];
  
  // Custom implementation of read and print. Do not touch : )
  let print = this.print || console.log;
  let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);
  
  // Solution
  let width = gets();
  let height = gets();
    width = Number(width);
    height = Number(height);
  let areaOfRectangle= width * height


  print(areaOfRectangle);
  