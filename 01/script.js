function getSurname() {
  console.log('Sabat');
}

function getTwoVariablesValues() {
  let x = Math.floor(Math.random() * 10);
  let y = Math.floor(Math.random() * 10);
  alert(`x = ${x},` + `\n` + `y = ${y}`);
  x = y;
  alert(`x = ${x},` + `\n` + `y = ${y}`);
}

function getObject() {
  let $undefined;
  const $object = {
    'Boolean': true,
    'Null': null,
    'Number': 28,
    'String': 'Some text',
    'Undefined': $undefined,
  };
  console.log($object);
  for (const [key, value] of Object.entries($object)) {
    console.log(`${key}: ${typeof(value)}`);
  }
}

function isAdult() {
  let isAdult = confirm('Are you an adult?');
  console.log(
    isAdult
      ? 'The user replied that he is an adult'
      : 'The user replied that he is NOT an adult'
  );
}

function getCurrentStudent() {
  let yourFirstName;
  let yourLastName;
  let yourGroup;
  let yourBirthYear;
  yourFirstName = 'Ivan';
  yourLastName = 'Sabat';
  yourGroup = '09.06.2023';
  yourBirthYear = 1991;
  let isMarried = false;
  console.log(`${yourBirthYear}: ${typeof(yourBirthYear)}`);
  console.log(`${isMarried}: ${typeof(isMarried)}`);
  console.log(`${yourFirstName}: ${typeof(yourFirstName)}`);
  console.log(`${yourLastName}: ${typeof(yourLastName)}`);
  console.log(`${yourGroup}: ${typeof(yourGroup)}`);
  let $Null = null;
  let $Undefined;
  console.log(typeof $Null);
  console.log(typeof $Undefined);
}

function getUserInfo() {
  let login = prompt('Please, enter your login:', 'User');
  let email = prompt('Please, enter your email:', 'usermale@gmail.com');
  let password = prompt('Please, enter your password:', 'qwerty');
  if (null === login || null === email || null === password) {
    alert('A user did not want to share some information');
  } else {
    alert(`Dear ${login},` + `\n` + ` your email is ${email},` + `\n` + ` your password is ${password}.`);
  }
}

function getNumberOfSeconds() {
  const isThirty = month => new Date(new Date().getFullYear(), month, 30).getDate() === 30;
  let inHour = 60*60;
  let inDay = inHour*24;
  let inMonth = inDay*(isThirty(new Date().getMonth()) ? 30 : 31);
  alert(`Seconds in ` + `\n` + ` a hour: ${inHour},` + `\n` + ` a day: ${inDay},` + `\n` + ` a month: ${inMonth}.`);
}