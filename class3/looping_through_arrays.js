let letters = ['a', 'b', 'c'];

// this will print out
// each letter in the array
for( let letter of letters ) {
  console.log(letter)
}

// this will print out
// each letter in the array
// by accessing each value
// through square bracket
// notation
for( let index in letters ) {
  console.log(`${letters[index]} lives in the ${index} position`)
}