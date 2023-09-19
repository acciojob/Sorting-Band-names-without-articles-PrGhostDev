// Array of band names
let bandNames = [
  'The Rolling Stones',
  'Led Zeppelin',
  'Aerosmith',
  'The Beatles',
  'The Who',
  'Queen',
  'Nirvana'
];

function removeArticles(name) {
  return name.replace(/^(a |an |the )/i, '').trim();
}

bandNames.sort((a, b) => removeArticles(a).localeCompare(removeArticles(b)));

const ulElement = document.querySelector('#bands');

bandNames.forEach((bandName) => {
  const liElement = document.createElement('li');
  liElement.textContent = bandName;
  ulElement.appendChild(liElement);
});
