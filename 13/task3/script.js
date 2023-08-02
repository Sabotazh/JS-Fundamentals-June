let user = document.querySelector(".user");
let avatar = document.querySelector(".avatar");
let name = document.querySelector(".name");
let age = document.querySelector(".age");
let sex = document.querySelector(".sex");
let country = document.querySelector(".country");
let login = document.querySelector(".login");
let password = document.querySelector(".password");
let email = document.querySelector(".email");

async function getRequest() {
  let response = await fetch("https://randomuser.me/api");
  let users = await response.json();
  users.results.forEach((el) => {
    let get = Object.values(el);
    let [
      gender,
      {title, first},
      {country},
      email,
      {username, password},
      {age},
      ,
      ,
      ,
      ,
      {large},
    ] = get;

    sex.textContent = `gender: ${gender}`;
    name.textContent = `name: ${title} ${first}`;
    country.textContent = `country: ${country}`;
    email.textContent = `email: ${email}`;
    login.textContent = `login: ${username}`;
    password.textContent = `password: ${password}`;
    age.textContent = `age: ${age}`;
    avatar.src = large;
  });
}

let get = getRequest();
