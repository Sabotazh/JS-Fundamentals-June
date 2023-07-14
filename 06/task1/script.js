let elements = document.querySelectorAll('#list li');
let arr = [];
for(let i = 0; i < elements.length; i++){
  arr[i] = elements[i]['innerText'];
}
function getElements(arr, length) {
  let newArr = [];
  for(let i = 0; i < length; i++){
    let el;
    if (0 === i % 2) {
      el = arr.shift();
    } else {
      el = arr.pop();
    }
    newArr.push(el);
  }
  return newArr;
}

alert(getElements(arr, elements.length));
