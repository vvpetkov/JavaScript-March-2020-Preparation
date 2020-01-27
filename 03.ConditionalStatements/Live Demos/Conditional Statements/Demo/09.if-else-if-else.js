const hour = 8;

if (hour >= 6 && hour <= 10) {
  console.log('Good morning!');
} else if (hour > 10 && hour < 20) {
  console.log('Good day');
} else if (hour >= 20 && hour < 23) {
  console.log('Good evening!');
} else {
  console.log('Wrong Hour!');
}
