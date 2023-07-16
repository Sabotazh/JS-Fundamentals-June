// ************************* Task 1 *************************
// Напишіть функцію, яка перевірятиме чи перший символ в рядку написаний в верхньому регістрі, чи ні.
// Приклад роботи:
// upperCase('regexp');
// // "String's not starts with uppercase character"
// upperCase('RegExp');
// // "String's starts with uppercase character"

// function upperCase(str) {
//   return str.match(/^[A-Z]/)
//     ? "String's starts with uppercase character"
//     : "String's not starts with uppercase character";
// }
//
// console.log(upperCase('regexp')); // "String's not starts with uppercase character"
// console.log(upperCase('RegExp')); // "String's starts with uppercase character"



// ************************* Task 2 *************************
// Напишіть функцію, яка приймає рядкові дані і виконує перевірку на їх відповідність емейлу.
// Валідними вважаються всі символи на різних позиціях.
// Приклад роботи:
// checkEmail("Qmail2@gmail.com");
// true

// function checkEmail(str) {
//   return !!str.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);
// }
//
// console.log(checkEmail('Qmail2@gmail.com'));
// console.log(checkEmail('@mail2@gmail.com'));



// ************************* Task 3 *************************
// Напишіть регулярний вираз, який в рядковому тексті 2 підстрічки буде міняти місцями.
// Приклад роботи:
// Вхідний рядок: "Java Script"
// Вихід: "Script, Java"

// let input = "Java Script";
// let output = input.replace(/(\w+)\s(\w+)/, '$2, $1');
//
// console.log(output);



// ************************* Task 4 *************************
// Напишіть функцію, яка виконуватиме валідацію номера банківської карти (9999-9999-9999-9999).

// function validateCreditCardNumber(ccNum) {
//   let cardType = null;
//   if (ccNum.match(/^(4[0-9]{12}([0-9]{3})?)$/)) cardType = ' (Visa)';
//   if (ccNum.match(/^(5[1-5][0-9]{14})$/)) cardType = ' (Master Card)';
//
//   return ccNum.match(/\b(?:\d{4}[ -]?){3}(?=\d{4}\b)/)
//     ? `Your credit card number: ${ccNum.replaceAll('-', '')}${cardType ?? ''}.`
//     : `The credit card number is invalid!`;
// }
//
// console.log(validateCreditCardNumber('+380-98-678-1234'));
// console.log(validateCreditCardNumber('9999-9999-9999-9999'));
// console.log(validateCreditCardNumber('4111111111111111'));
// console.log(validateCreditCardNumber('5555555555554444'));



// ************************* Task 5 *************************
// Напишіть функцію, яка приймає рядкові дані і виконує перевірку на їх відповідність емейлу.
//   Вимоги:
//  •  Цифри (0-9).
//  •  Тільки латинські літери в великому (A-Z) і малому (a-z) регістрах.
//  •  В тілі емейла допустимі лишеі символи “_” і “-”. Але вони не можуть бути 1-им символом емейлу.
//  •  Символ “-” не може повторюватися.
// checkEmail('my_mail@gmail.com');
// "Email is correct!"
// checkEmail('#my_mail@gmail.com');
// "Email is not correct!"
// checkEmail('my_ma--il@gmail.com');
// "Email is not correct!"

// function checkEmail(email) {
//   return email.match(/^\w+(?:[-_]\w+)*@[A-Za-z0-9]+(?:-[A-Za-z0-9]+)*\.[A-Za-z]{2,}$/)
//     ? 'Email is correct!'
//     : 'Email is not correct!';
// }
//
// console.log(checkEmail('my_mail@gmail.com'));   // "Email is correct!"
// console.log(checkEmail('#my_mail@gmail.com'));  // "Email is not correct!"
// console.log(checkEmail('my_ma--il@gmail.com')); // "Email is not correct!"



// ************************* Task 6 *************************
// Напишіть функцію, яка перевіряє правильність логіна. Правильний логін - рядок від 2 до 10 символів,
// що містить лише букви та числа, номер не може бути першим. Функція має приймати рядок і знаходити усі числа в цьому рядку,
// включаючи числа з плаваючою комою (наприклад, 3.4).
//   Приклад роботи:
//   checkLogin('ee1.1ret3');
//   true
//   //1.1, 3
//
//   checkLogin('ee1*1ret3');
//   false
//   //1, 1, 3

// function checkLogin(str) {
//   const trueLogin = (!!str.match(/^.{2,10}$/) && !!str.match(/^[A-Za-z][A-Za-z0-9]*$/));
//   const numbers = str.match(/[-+]?\d+(\.\d+)?/g);
//
//   return {trueLogin, numbers};
// }
//
// let result = checkLogin('ee1.1ret3');
// console.log(!result.trueLogin);
// console.log(result.numbers);
//
// result = checkLogin('ee1*1ret3');
// console.log(result.trueLogin);
// console.log(result.numbers);



// ************************* ⭐⭐⭐ *************************
// Додайте перевірку на кожне поле даних в формі
// https://codepen.io/misha_klymenko/pen/rNZKodW?editors=1000
