let btn = document.querySelector('.btn');

btn.addEventListener('click', async function(){
  let response = await fetch('http://localhost:5000');
  btn.innerHTML = await response.text();
});
