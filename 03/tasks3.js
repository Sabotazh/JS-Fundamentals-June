// ************************* Task 1 *************************
// function createArray(start, end) {
//   let arr = [];
//   while (start <= end) {
//     arr.push(start++)
//   }
//   return arr;
// }
//
// let arr = createArray(2, 9);
// console.log(arr); // [2,3,4,5,6,7,8,9]



// ************************* Task 2 *************************

// function getWholeNumbers(a, b) {
//   let numbers = '';
//   for (let i = a; i <= b; i++) {
//     for (let j = a; j <= i; j++) {
//       numbers += i + ',';
//     }
//   }
//   console.log(numbers.slice(0, -1) + '...');
// }
//
// getWholeNumbers(1, 3) // 1,2,2,3,3,3...



// ************************* Task 3 *************************
// function randArray(k) {
//   let arr = [];
//   let i = 0;
//   do {
//     arr[i] = Math.floor(Math.random() * 500) + 1;
//     ++i;
//   } while (i < k)
//   console.log(arr);
// }
//
// randArray(5);  // [399,310,232,379,40]



// ************************* Task 4 *************************
// function compact(arr) {
//   return arr.filter((value, index, array) => array.indexOf(value) === index);
// }
//
// const arr = [5,3,4,5,6,7,3];
// const arr2 = compact(arr);
// console.log(arr2) ; // [5,3,4,6,7]



// ************************* Task 5 *************************
// function funcName(arr) {
//   let arrAll = arr.flat();
//   let arrNumber = arrAll.filter(el => 'number' === typeof el);
//   let arrString = arrAll.filter(el => 'string' === typeof el);
//
//   return [arrNumber, arrString];
// }
//
// let arr = [5, "Limit", 12, "a", "3", 99, 2, [2, 4, 3, "33", "a", "text"], "strong", "brown"];
// let arrNew = funcName(arr);
// console.log(arrNew);



// ******************** Task 6 ********************
// function calc(a, b, op) {
//   let operation = {
//     1: a - b,
//     2: a * b,
//     3: a / b,
//   };
//
//   return operation[op] ?? a + b;
// }
//
// console.log(calc(10, 3, 1));



// ******************** Task 8 ********************
// function findUnique(arr) {
//   return arr.length === arr.filter((value, index, array) => array.indexOf(value) === index).length;
// }
//
// console.log(findUnique([1, 2, 3, 5, 3]));  // => false
// console.log(findUnique([1, 2, 3, 5, 11])); // => true



// ******************** ⭐⭐⭐ ********************
// function create(x) {
//   return function (y) {
//     return x === y;
//   }
// }
//
// const tom = create("pass_for_Tom");
// console.log(tom("pass_for_Tom")); //повертає true
// console.log(tom("pass_for_tom")); //повертає false
