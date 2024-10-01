/* -----------12a----------- */
const add = function () {
  console.log(2 + 3)
};
add();
/* -----------12b---------- */
function runTwice(fun) {
  fun();
  fun();
}
runTwice(add);
/* -------12c--------- */
function finished() {
  setTimeout(() => {document.querySelector('.js-finish-button').innerHTML = 'Finished!'}, 1000);
}
/* --------12d------- */
function finished() {
  const buttonElement = document.querySelector('.js-finish-button');
  buttonElement.innerHTML = 'Loading...'
  setTimeout(function() {buttonElement.innerHTML = 'Finished!'}, 1000);
}
/* -----------12e--------- */
function addToCart() {
  const addedMessage = document.querySelector('.js-added-message');
  addedMessage.innerHTML = 'Added';
  setTimeout(function () { addedMessage.innerHTML = '' }, 2000);
}
/* -------- 12f ----------- */
let timeoutId;
function addToCart() {
  clearTimeout(timeoutId);
  const addedMessage = document.querySelector('.js-added-message');
  addedMessage.innerHTML = 'Added';
  timeoutId = setTimeout(function () { addedMessage.innerHTML = '' }, 2000);
}
/* --------- 12g ---------- */
// counter = 0;
// setInterval(function () {
//   counter += 1;
//   document.title = `( ${counter} ) New message`;
// }, 2000);
/* ------------- 12h -- 12i ---------- */
let message = 2;
  document.title = `( ${message} ) New message`;
function addMessage() {
  message += 1;
  if (message <=   0) { document.title = 'App' } else {
    document.title = `( ${message} ) New message`;
  }
}
function removeMessage() {
  message -= 1;
  if (message <= 0) {
    message = 0;
    document.title = 'App'
  } else {
    document.title = `( ${message} ) New message`;
  }
}
document.querySelector('.js-add').addEventListener('click', () => {addMessage()})
document.querySelector('.js-remove').addEventListener('click', () => {removeMessage()})
/* -------- 12j ------------ */
multiply = (num1, num2) => { return num1 * num2};
console.log(multiply(2,3));
/* -------------12k-------------- */

multiply = (num1, num2) =>  num1 * num2;
console.log(multiply(3, 3));

/* ----------- 12l -------------- */

function countPositive(array) {
  let count = 0;
  array.forEach(element => {
    if (element > 0) { count += 1; }
  });
  return count;
}
console.log(countPositive([2, 5, -3, 4, -10]));

/*------------12m---------*/

addNum = (array, num) => array.map(element => element + num);
console.log(addNum([2, 5, 9], 2));

/*------- 12n -----------*/

removeEgg1 = (foods) => foods.filter( element => element !=='egg');
console.log(removeEgg1(['milk', 'egg', 'choclate', 'sugar']));

/* --------- 12o ------- */
function removeEgg2(foods) {
  let count = 0;
  return foods.filter(function (element) {
    return true;
  })
}
console.log(removeEgg2(['milk', 'egg', 'choclate','egg','sugar','egg']));

/*------- 12p ----------*/

