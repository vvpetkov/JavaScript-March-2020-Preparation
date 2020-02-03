const input = ['june', '24'];
const print = this.print || console.log;
const gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

const month = gets();
const date = +gets();
let season;

if ((month === 'March' && date >= 20) ||
     month === 'April' ||
     month === 'May' ||
    (month === 'June' && date < 21)
) {
  season = 'Spring';
} else if ((month === 'June' && date >= 21) ||
            month === 'July' ||
            month === 'August' ||
           (month === 'September' && date < 22)
) {
  season = 'Summer';
} else if ((month === 'September' && date >= 22) ||
            month === 'October' ||
            month === 'November' ||
           (month === 'December' && date < 20)
) {
  season = 'Autumn';
} else {
  season = 'Winter';
}

print(season);
