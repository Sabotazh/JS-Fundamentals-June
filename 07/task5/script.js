let btn = document.getElementById('btn');
btn.addEventListener('mouseover', mouseOver);
btn.addEventListener('click', mouseClick);
btn.addEventListener('mouseout', mouseOut);

function mouseOver() {
  document.getElementById('p').innerHTML += 'Mouse on me!<br>';
}

function mouseClick() {
  document.getElementById('p').innerHTML += 'I was pressed!<br>';
}

function mouseOut() {
  document.getElementById('p').innerHTML += 'Mouse is not on me!<br>';
}
