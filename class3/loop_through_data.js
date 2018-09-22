const obj = {
  a: 1,
  b: 2,
  c: 3
}

for( let key in obj ) {
  console.log(`the value of ${key} is ${obj[key]}`)
}