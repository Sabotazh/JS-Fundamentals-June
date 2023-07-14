function stylize() {
  let h1 = document.querySelector('h1');
  h1.style.backgroundColor = '#90ee90';
  let div = document.querySelectorAll('#myDiv p');
  let styleParams = ['font-weight: bold', 'color: red', 'text-decoration: underline', 'font-style: italic'];
  div.forEach((p, el) => {
    p.style = styleParams[el];
  });
  let ul = document.getElementById('myList');
  ul.style = 'display: flex; list-style: none;';
  let span = document.querySelector('span');
  span.style = 'display: none;';
}
