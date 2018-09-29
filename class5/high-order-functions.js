
const printHelloWorld = function(mesage, func) {
  func(message);
}

const message = "Hey there";
printHelloWorld( message, console.log );


// this is an example of built in high order function
const colors = ['yellow', 'blue'];

console.log('---------');
console.log('print a list of items');
for (let singleColor of colors) {
  console.log(singleColor)
}

console.log('---------');
console.log('print a list of item positions');
for (let singleColor in colors) {
  console.log(singleColor)
}

console.log('---------');
console.log('print a everything');
colors.forEach( (value, index, array) => {
  console.log('------------------', index);
  console.log(value, index, array);
});

// https://www.google.ca/search?q=mdn+forEach&rlz=1C5CHFA_enCA770CA770&oq=mdn+forEach&aqs=chrome..69i57j0l5.801j0j1&sourceid=chrome&ie=UTF-8
// the syntax for forEach is as follows:
// colors.forEach( func ); => func( {item}, {position}, {fullArray} );
// colors.forEach( () => {} );