const typesOfData = [
  2,
  [4, 5],
  {a: 4},
  'hello',
  3.33,
  false,
  
];

for( const index in typesOfData ) {
  const value = typesOfData[index];
  const typeOfData = typeof(value);
  console.log(`${value} ${typeOfData}`) ;
}