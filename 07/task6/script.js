document.getElementById('dimensions').innerHTML = `Width: ${window.innerWidth}, Height: ${window.innerHeight}.`;
function displayWindowSize() {
  let width = window.innerWidth;
  let height = window.innerHeight;
  document.getElementById('dimensions').innerHTML = `Width: ${width}, Height: ${height}.`;
}

window.addEventListener('resize', displayWindowSize);
