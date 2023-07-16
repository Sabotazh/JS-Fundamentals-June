document.querySelector('p').innerHTML = 'Germany, Berlin';

const city = {
  'ger': ['Berlin', 'Hamburg', 'Dortmund', 'Frankfurt'],
  'usa': ['New-York', 'Washington', 'Boston', 'Chicago'],
  'ukr': ['Lviv', 'Kyiv', 'Odesa', 'Dnipro']
};

let primeSelect = document.getElementById('country');
primeSelect.addEventListener('change', createList);
primeSelect.addEventListener('change', toParagraph);

let citySelect = document.getElementById('cities');
citySelect.addEventListener('change', toParagraph);

function createList() {
  citySelect.innerHTML = '';
  let selectedCountry = primeSelect.value;
  for (let i = 0; i < city[selectedCountry].length; i++){
    let newOption = document.createElement('option');
    newOption.innerHTML = city[selectedCountry][i];
    citySelect.appendChild(newOption);
  }
}

let paragraph = document.querySelector('p');
function toParagraph() {
  paragraph.innerHTML = '';
  paragraph.innerHTML = primeSelect.options[primeSelect.selectedIndex].text + ', '
    + citySelect.options[citySelect.selectedIndex].text;
}
