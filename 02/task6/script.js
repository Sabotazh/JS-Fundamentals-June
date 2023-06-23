let arr =   [4, 5, 2, 1, 6, 5, 3, 5, 2, 5];
const count = arr.reduce((acc, el) => {
  acc[el] = (acc[el] || 0) + 1;
  return acc;
}, {});
const mostFrequent = Number(Object.keys(count).reduce((a, b) => (count[a] > count[b] ? a : b)));
const data = [mostFrequent];
newArr = arr.filter((el) => el !== mostFrequent);

console.log(data);
console.log(newArr);
