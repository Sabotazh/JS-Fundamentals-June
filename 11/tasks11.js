// ************************* Task 1 *************************
// Реалізуйте функцію getPromise(message, delay), яка приймає текстове повідомлення message
// і цілочисельне значення затримки delay (в мс) і повертає Promise, який чекає задану кількість часу
// (використовуючи аргумент delay) і завершується повідомленням message.

// function getPromise(message, delay) {
//   return new Promise((resolve) => {
//     setTimeout(function () {
//       resolve(message);
//     }, delay);
//   })
// }
// // Приклад застосування функції:
// getPromise("test promise", 2000).then(function(data) {
//   console.log(data);
// });



// ************************* Task 2 *************************
// Реалізуйте функцію calcArrProduct(arr), яка приймає масив чисел. Функція повинна повернути Promise,
// робота якого завершується поверненням добутку елементів масиву, якщо вони є типу Numbers,
// або повідомленням "Error! Incorrect array!" у випадку, якщо хоча б 1 елемент масиву нечисловий.

// function calcArrProduct(arr) {
//   return new Promise((resolve, reject) => {
//     let res = 1;
//     for (let i = 0; i < arr.length; i++) {
//       "number" === typeof arr[i] ? res *= arr[i] : reject("Error! Incorrect array!");
//     }
//     resolve(res);
//   });
// }
// // Приклад застосування функції:
// calcArrProduct([3,4,5]).then(result => console.log(result)); // 60
// calcArrProduct([5,"user2", 7, 12]).then(result => console.log(result)); // "Error! Incorrect array!"



// ************************* Task 3 *************************
// Створіть наступний асинхронний ланцюжок promise:
//   new Promise(function (resolve, reject) {
//     // Запитуємо у користувача number за допомогою prompt()
//     // Якщо користувач ввів не число - викликаємо reject()
//     // Якщо користувач ввів число- викликаємо resolve(number)
//   }).catch(function (error) {
//     return new Promise(function (resolve, reject) {
//       // Запитуємо у користувача number, до тих пір, поки він його не введе
//       // Після вводу числа - викликаємо resolve(number)
//     });
//   }).then(function (result) {
//     // Вивід number у консоль
//   });

// new Promise(function (resolve, reject) {
//   let number = +prompt("Enter your number:"); // Запитуємо у користувача number за допомогою prompt()
//   isNaN(number) ? reject("Error input!") : resolve(number);
// }).catch(function (error) {
//   console.log(error);
//   return new Promise(function (resolve, reject) {
//     let number;
//     function isNumber() {
//       number = prompt("Enter your number:");
//       isNaN(number) ? reject("Error input!") : resolve(number);
//     }
//     isNumber();
//   });
// }).then(function (result) {
//   console.log(result);
// });
