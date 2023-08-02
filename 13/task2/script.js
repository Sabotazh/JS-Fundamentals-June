let btn = document.querySelector('.btn');
let author = document.querySelector('.names');

btn.addEventListener('click', async function(){
  let response = await fetch('http://localhost:5001/task2/books.json');
  let books = await response.json();
  books.map(el => {
    author.innerHTML += `<li>${el.author}</li>`
  });
});
