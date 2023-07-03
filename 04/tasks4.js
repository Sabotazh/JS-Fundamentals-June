// ******************** Task 1 ********************
// function sumSliceArray(arr, first, second) {
//   if (!Number(first) || !Number(second)) {
//     throw new Error('Please enter numbers only');
//   }
//   if (first < 0 || first > arr.length || second < 0 || second > arr.length) {
//     throw new Error('The entered elements are out of range of the entered array');
//   }
//
//   return arr[--first] + arr[--second];
// }
//
// const arr = [7, -12, 44, 22];
//
// try {
//   const sum = sumSliceArray(arr, 2,4);
//   console.log(sum);
// } catch (e) {
//   console.log(e.message);
// }



// ******************** Task 2 ********************
// function checkAge() {
//   const name = prompt('Enter your name:', 'User');
//   const age = +prompt('Enter your age:', '33');
//   const status = prompt('Enter your status:', 'user');
//   const availableStatuses = {
//     'admin': 'role description',
//     'moderator': 'role description',
//     'user': 'role description'
//   };
//
//   if (isNaN(age)) {
//     throw new TypeError('A non-numeric value is entered in the age field');
//   }
//   if ("" === name.trim() || 0 === age || "" === status.trim()) {
//     throw new Error('Please enter your credentials'); // The field is empty! Please enter your age
//   }
//   if (18 > age || 70 < age) {
//     throw new RangeError('The user is not age appropriate');
//   }
//   if (!availableStatuses[status]) {
//     throw new EvalError(`Status '${status}' does not exist`);
//   }
//
//   return alert(`Access granted`);
// }
//
// try {
//   checkAge();
// } catch (e) {
//   alert('Access denied' + '\n' + e.name + '\n' + e.message);
// }



// ******************** Task 3 ********************
// function calcRectangleArea(width, height) {
//   if ('number' === typeof width && 'number' === typeof height) return width * height;
//   throw new Error('Width and height must be a number!');
// }
//
// try {
//   console.log(calcRectangleArea(5, 'a'));
// } catch (e) {
//   console.log(e.message)
// }



// ******************** Task 4 ********************
// class MonthException {
//   constructor(message) {
//     this.message = message;
//     this.name = "MonthException";
//   }
// }
//
// function showMonthName(month) {
//   const months = {
//     1: 'January',
//     2: 'February',
//     3: 'March',
//     4: 'April',
//     5: 'May',
//     6: 'June',
//     7: 'July',
//     8: 'August',
//     9: 'September',
//     10: 'October',
//     11: 'November',
//     12: 'December',
//   };
//   if (undefined === months[month]) {
//     throw new MonthException('Incorrect month number');
//   }
//
//   return months[month];
// }
//
// try {
//   console.log(showMonthName(5));  // May
//   console.log(showMonthName(14)); // MonthException Incorrect month number
// } catch (e) {
//   console.log(e.name, e.message)
// }



// ******************** Task 5 ********************
// function showUser(id) {
//   if (0 > id) {
//     throw new Error('ID must not be negative')
//   }
//
//   return {id: id}
// }
// try {
//   console.log(showUser(28));
//   console.log(showUser(-5));
// } catch (e) {
//   console.log(e.message);
// }
//
// function showUsers(ids) {
//   let users = [];
//   for (let id of ids.values()) {
//     try {
//       users.push(showUser(id));
//     } catch (e) {
//       console.log(e.message);
//     }
//   }
//   return users;
// }
// console.log(showUsers([7, -12, 44, 22]));
// // Error: ID must not be negative: -12
// // [ {id: 7}, {id: 44}, {id: 22} ]
