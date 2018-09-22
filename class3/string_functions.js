const letters = 'abcd';
console.log(letters.split(''))
// result ['a', 'b', 'c', 'd']

const letters2 = 'a,b,c,d';
console.log(letters2.split(','))
// result ['a', 'b', 'c', 'd']

// splits string int array and then
// it joins arrays woith '---'
console.log(letters2.split(',').join('---'))
// result a---b---c---d