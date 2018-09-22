const programmingLanguages = ['Python', 'Javascript'];
const mixedValues = ['Python', 'Javascript', 2, 3.33];
const nestedValues = [
  ['arturo', 'Jhon'],
  ['Susie'],
  ['Kate']
];

// the way of accessing values is by using squares
// with the 0-based position of the item
programmingLanguages[0] // prints -> Python

nestedValues.length // returns number of items in list -> 3
nestedValues[0].length // returns number of items in list -> 2
programmingLanguages.push('Java')


let second = [];
for(const i = 0; i < 100; i++){
  second.push(i);
}
console.log(second)