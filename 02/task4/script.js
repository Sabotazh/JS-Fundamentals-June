var a = +prompt('Enter the length of the first side of the triangle');
if (!Number.isInteger(a)) alert('Incorrect data');
if (Number.isInteger(a)) {
  var b = +prompt('Enter the length of the second side of the triangle');
  if (!Number.isInteger(b)) alert('Incorrect data');
}
if (Number.isInteger(a) && Number.isInteger(b)) {
  var c = +prompt('Enter the length of the third side of the triangle');
  if (!Number.isInteger(c)) alert('Incorrect data');
}

//a
  const p = (a + b + c) / 2;
  const areaValue = Math.sqrt( p * (p - a) * (p - b) * (p - c) );
  areaValue
    ? console.log(`The area of the triangle is ${areaValue.toFixed(3)}`)
    : console.log('Such a triangle does not exist');

//b
  console.log(a*a === b*b + c*c || b*b === a*a + c*c || c*c === b*b + a*a
              ? 'The triangle is right-angled'
              : 'The triangle is NOT right-angled');
