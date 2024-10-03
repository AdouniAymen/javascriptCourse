import dayjs from 'https://unpkg.com/dayjs@1.11.10/esm/index.js';
import isSatSun from './isWeekend.js';

console.log(dayjs().add(5, 'days').format('MMMM D')); //October 6
console.log(dayjs().add(30, 'days').format('MMMM D')); //October 31
console.log(dayjs().subtract(30, 'days').format('MMMM DD'));//September 02
console.log(dayjs().format('dddd'));//wednesday
const date = dayjs().add(9,'days').format('dddd')
console.log(isSatSun(date));

// the rest is for improving the amazon final project