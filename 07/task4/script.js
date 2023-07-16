btn.addEventListener('click', deleteUser);

function deleteUser() {
  let user = document.getElementById('names');
  user.remove(user.selectedIndex);
}
