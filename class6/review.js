/**
 * Timing function
 */

let y = 1

const x = function(){

  console.log(y);

  timeDelay = y * 1000;
  y++;

  if (y !== 11){
    setTimeout(x, timeDelay)
  }
}

x();

/**
 * Review
 */

// setTimeout
// arguments: (function, number) 
const id = setTimeout(() => {
  console.log('This message should appear after 3 seconds')
}, 3000);
console.log('This message should appear before the timeout function gets triggered');
console.log(`timeout id ${id}`)

// clearInterval
// this function receives an identifier that can be used
// to terminate a timing process before its execution.
clearInterval(id);

/**
 * setInterval
 */
// it receives 2 arguments, the first one is a funcgtion and the second one
// is a number that represents

const number = 0;
setInterval( function () {
  console.log(number++);
}, 3000);

number = 0;
setInterval( function () {
  console.log(++number);
}, 3000);




let test = false;
let id;
id = setInterval(() => {
  if( test === true)  {
    console.log('finally, i can stop processing');
    setInterval(id);
  }
  console.log(':( i will wait for another secondf');
}, 1000);

// later x
test = true;
