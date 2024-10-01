function getLastValue(array) {
  return array[array.length - 1];
}
console.log(getLastValue([1, 3, 3]));
/* --------------------- */

function arraySwap(array) {
  let lastindex = array[array.length - 1];
  let firstindex = array[0];
  array[0] = lastindex;
  array[array.length - 1] = firstindex;
  return array;
}
console.log(arraySwap([1, 2, 4, 55]))
/* ----------------- */
for (let i = 0; i < 11; i += 2){
  console.log(i);
}
for (let i = 5; i > -1; i--) { console.log(i) }
let i = 0;
/* --------------------- */
while (i < 11) {
  console.log(i);
  i += 2;
}
i = 5;
while (i >= 0) {
  console.log(i); 
  i--;
}
/* -------------------------------- */
const array = [1, 2, 3, 4];
for (i = 0; i < array.length; i++){
  array[i] += 1;
}
console.log(array);
/* ------------------------------ */
function addOne(array) {
  for (i = 0; i < array.length; i++){
    array[i] += 1;
    return array;
}
}
console.log(array);
/* -------------------- */
function addNum(array, num) {
  for (i = 0; i < array.length; i++) {
    array[i] += num;
    return array;
  }
}
console.log(addNum(array, 5))
/* ------------------------- */
function addArrays(array1, array2) {
  for (i = 0; i < array1.length; i++) {
    array1[i] += array2[i];
  } 
  return array1;
}
console.log(addArrays([2, 2, 2, 2], [2, 2, 2, 2]));
/* -------------------------------- */
function countPositive(nums) {
  let count = 0;
  for (let i = 0; i < nums.length; i++) {
    const element = nums[i];
    if (element > 0) { count += 1 };
  }
  return count;
}
console.log(countPositive([2, -5, 6, 0, -3]));

/*----------------------*/
 
function minMax(nums) {
  let result = {
    max : null,
    min : null
  };
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] > result.max || result.max===null ) { result.max=nums[i] }
    else {result.max}
  }
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] < result.min || result.min===null) { result.min=nums[i] }
    else {result.min}
  }
  return result;
}
console.log(minMax([]))
/* --------------------- */

function countWords(words) {
  let result = {};
  const word = words[i];
  result[word] = 0;
  for (let i = 0; i < words.length; i++) {
   console.log(result[word]);
  }
  return result;
}
console.log(countWords(['su', 'du', 'su', 'su', 'du']));
/* -------11o--------- */
const array3 = ['done', 'good', 'search', 'key'];
//set the index in -1 as a default value in case that 'search' is not found
let index = -1;
for (let i = 0; i < array3.length; i++) {
  if (array3[i] === 'search') { index = i }; 
}
console.log(index);
/* -----11p----------- */
const array4 = ['work', 'good', 'search', 'key','search'];
//set the index in -1 as a default value in case that 'search' is not found
let index2 = -1;
for (let i = 0; i < array4.length; i++) {
  if (array4[i] === 'search') { index2 = i;break; }
  
}
console.log(index2);
/* ---------------11q------------- */
function findIndex(array5,word) {
  let index3 = -1;
  for (let i = 0; i < array5.length; i++) {
    if (array5[i] === word) { index3 = i; break; }
  }
  return index3;
}
console.log(findIndex(['word', 'key', 'go', 'done'], 'go'));
/* ------------11r--------------- */
let array6 = ['do', 'egg', 'no', 'egg', 'just', 'egg', 'work'];
function removeEgg(array6) {
  let result = [];
  let count = 0;
  let array7 = array6.slice().reverse();
  for (let i = 0; i < array6.length; i++) {
    if (array7[i] === 'egg' && count < 2) {count++; continue; }
    result.push(array7[i]);
  }
  result.reverse();
  return result;
}
console.log(removeEgg(array6));
console.log(array6);
/* -------------11v--------------- */
function FuzzBuzz() {
  for (let i = 0; i <= 20; i++){
    if (i % 3 === 0) { console.log('Fizz') }
    else if (i % 5 === 0) { console.log('Buzz') }
    else if (i % 3 === 0 && i % 5 === 0) { console.log('FizzBuzz') }
    else {console.log(i)}
  }
}
FuzzBuzz();
/* -----------11w---------------- */
function findIndex(array, word) {
        for (let i = 0; i < array.length; i++) {
          if (array[i] === word) {
            // Instead of creating an accumulator
            // variable and updating it in the loop,
            // we can just return i directly, when
            // we find it since this is a function.
            return i;
          }
        }

        // If the function has not returned by now,
        // logically that means the word must not
        // exist in the array, so we'll return -1.
        return -1;
}
function unique(array) {
  let result = [];
  for (let i = 0; i < array.length; i++) {
    if (findIndex(result, array[i]) === -1) {
      result.push(array[i]);
    }
  }
  return result;
}
console.log(unique(['go', 'run', 'go', 'run']));
//second try with part two of the lesson
//11o-11p-11q
function findIndex(array, word) {
  let index = -1;
  for (let i = 0; i < array.length; i++) {
    if (array[i] === word) { index = i; break}
  }
  return index;
}
console.log(findIndex(['code', 'gun', 'search', 'done', 'search'], 'go'));
//11r-11s
function removeEgg(foods) {
  let result = [];
  let count = 0;
  for (let i = 0; i < foods.length; i++) {
    if (foods[i] === 'egg' && count < 2) { count++; continue }
    result.push(foods[i]);
  }
  return result;
}
console.log(removeEgg(['apple', 'egg', 'milk', 'egg', 'egg']));
//11t-------------
function removeEgg(foods) {
  foods.reverse();
  let result = [];
  let count = 0;
  for (let i = 0; i < foods.length; i++) {
    if (foods[i] === 'egg' && count < 2) { count++; continue }
    result.push(foods[i]);
  }
  result.reverse();
  return result;
}
console.log(removeEgg(['apple', 'egg', 'milk', 'egg', 'egg']));
//11w-----------------
function unique(array) {
  let result = [];
  for (let i = 0; i < array.length; i++) {
    if (findIndex(result,array[i]) === -1) {
      result.push(array[i]);
    }
  }
  return result;
}
console.log(unique(['done','milk','go','done','go']));
