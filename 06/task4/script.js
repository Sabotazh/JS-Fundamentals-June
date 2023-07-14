// реалізувати вивід даних із полів при кліку на кнопку "Надіслати" в поле outBlock

const inputForm = document.querySelectorAll('.arr');
const btn = document.querySelector('.btn');
const outBlock = document.querySelector('.out');

btn.onclick = function () {
  outBlock.innerHTML = " ";
  inputForm.forEach((element) => {
    outBlock.innerHTML += `${element.getAttribute('data-form')} : ${element.value} <br>`;
  });
}