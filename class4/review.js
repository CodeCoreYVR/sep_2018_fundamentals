let sampleArray = [
  'black', 'white', 'red', 'blue'
];

sampleArray.push('green');
sampleArray.pop('green');

/**
 * for loops for accesing array and object values
 */
// looping through an array
// while getting the index of
//  each item. In other words,
// we get the 0-based position
// of each item
for ( let i in sampleArray ) {
  console.log(`the value of i is ${i}`);
}

// output
// the value of i is 0
// the value of i is 1
// the value of i is 2
// the value of i is 3

// looping through an array
// while getting the item itself
//  as we are looking through the array
for ( let helloWorldThisVariableMakesNoSense of sampleArray ) {
  console.log(`The value of item is ${helloWorldThisVariableMakesNoSense}`);
}

// output
// The value of item is black
// The value of item is white
// The value of item is red
// The value of item is blue

const nestedArrays = [
  ['blue', 'grey'],
  ['john', 'joan']
]

for (let secondDimensionArray of nestedArrays) {
  for( let val of secondDimensionArray ) {
    console.log(val);
  }
}

const house = {
  bathrooms: 2,
  rooms: 4
};

for ( let key in house ) {
  console.log( `This house has ${house[key]} ${key}` )
}

/**
 * Scopes
 */

let firstName = 'Arturo';

function printAName (firstName) {
  console.log(`The value of firstName
  within the function is ${firstName}`);
  firstName = 'Andreia';
  console.log(`The value of firstName
  within the function is ${firstName}`);
}

console.log(`The value of firstName is ${firstName}`);
printAName();
console.log(`The value of firstName is ${firstName}`);
printAName('Derek');
console.log(`The value of firstName is ${firstName}`);

