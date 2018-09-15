/**
 * While loop
 */

// {keyword} ( {expression}) {
//   statements
// }

var counter = 1;
while ( counter <= 10 ) {
  console.log(`this is iteration ${counter}`);
  counter++;
}

// i is a local variable.
// not accessible outside of the for
// statement
for (let i = 0; i < 10; i++) {
  console.log(`this is iteration ${i}`);
}

// turns "a" into global variable
for (var a = 0; a < 10; a++) {
  console.log(`this is iteration ${a}`);
}

let b; // global variable 
for (b = 0; b < 10; b++) {
  console.log(`this is iteration ${a}`);
}

// break
var b; // global variable 
for (b = 0; b < 10; b++) {
  // when b is 5, the loop exits in line 38
  console.log(`before if statement ${b}`);
  if (b == 5) { // breaks the loop as long as b is equals to 5
    break;
  }
  console.log(`after if statement ${b}`);
}
console.log(`We are out!!!`);


// continue
var b; // global variable 
for (b = 0; b < 10; b++) {
  if (b == 5) { // skips the remaining of the loop as long as b is equals to 5
    continue; // will move to the next incremental value
  }
  console.log(`this is iteration ${a}`);
}
console.log(`We are out!!!`);

// this is iteration 0
// this is iteration 1
// this is iteration 2
// this is iteration 3
// this is iteration 4
// this is iteration 6
// this is iteration 7
// this is iteration 8
// this is iteration 9
// We are out!!!


/**
 * Difference between break and continue
 */

// break will stop looping
// continue will skip the iteration
