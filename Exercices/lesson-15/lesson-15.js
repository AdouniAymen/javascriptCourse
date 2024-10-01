import  dayjs  from 'https://unpkg.com/dayjs@1.11.10/esm/index.js';

console.log(dayjs().add(5, 'days').format('MMMM D')); //October 6
console.log(dayjs().add(30, 'days').format('MMMM D')); //October 31
